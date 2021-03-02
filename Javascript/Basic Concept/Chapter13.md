## 13. 웹 브라우저의 객체  
### 13.1 클라이언트 측 자바스크립트  
  - 웹 브라우저에서 자바스크립트가 하는 일  
    자바스크립트를 사용하지 않는 웹 페이지는 정적 웹 페이지라고 한다. (즉, 문서 하나를 표현할 뿐 변화하지 않는다.)    
    자바스크립트를 사용하면 웹 페이지를 동적으로 만들 수 있다.  
    
    - 기술적인 측면에서 웹 브라우저에서 자바스크립트가 하는 일을 다음과 같이 분류할 수 있다.  
      - 웹 페이지의 Document 객체 제어  
      - 웹 페이지의 Window 객체 제어 및 브라우저 제어  
      - 웹 페이지에서 발생하는 이벤트 처리  
      - HTTP를 이용한 통신 제어  
    
  - 웹 브라우저에서의 자바스크립트 실행 순서  
    렌더링 엔진 : 웹 브라우저에서 HTML 문서를 분석하고 표시하는 프로그램  
    
    렌더링 엔진은 다음과 같은 처리 과정을 거쳐 HTML 문서의 구문을 분석하고, DOM 트리를 구축한 후에 HTML 안에 지정된 자바스크립트 코드를 실행한다.  
      1. 웹 브라우저로 웹 페이지를 열면 Window 객체가 생성된다. (Window 객체는 웹 페이지의 전역 객체로 웹 페이지와 탭마다 생성된다.)  
      2. Document 객체가 Window 객체의 프로퍼티로 생성되며, 웹 페이지를 해석해서 DOM 트리의 구축을 시도한다.  
        Document 객체는 readyState 프로퍼티를 가지고 있으며, 이 프로퍼티에는 HTML 문서의 해석 상태를 뜻하는 문자열이 저장된다. (초깃값 : **'loading'**)  
      3. HTML 문서는 HTML 구문을 작성 순서에 따라 분석하며, Document 객체 요소와 텍스트 노드를 추가해 나간다.  
      4. HTML 문서 안에 script 요소가 있으면 script 요소 안의 코드 또는 외부 파일에 저장된 코드의 구문을 분석한다. <!--20210223 기록 마침--><!--20210224 기록 시작-->
         그 결과 오류가 발생하지 않으면 그 시점에서 코드를 실행한다.  
         (script 요소는 **동기적**으로 실행됨. script 요소의 구문을 분석해서 실행할 때는 HTML 문서의 구문 분석이 일시적으로 중단되고, 자바스크립트 코드 실행을 완료한 후에는 중단되었던 HTML 문서의 구문 분석을 재개한다.)    
      5. HTML 문서의 모든 내용을 읽은 후에 DOM 트리 구축을 완료하면 document.readyState 프로퍼티 값이 **'interative'**로 바뀐다.  
      6. 웹 브라우저는 Document 객체에 DOM 트리 구축 완료를 알리기 위해 DOMContentLoaded 이벤트를 발생시킨다.  
         (img 등의 요소가 이미지 파일 등의 외부 리소스를 읽어 들여야 한다면 이 시점에서 읽어들임)  
      7. 모든 리소스를 읽은 후엔 document.readyState 프로퍼티 값이 **'complete'**로 바뀐다.  
         마지막으로 웹 브라우저는 Window 객체를 상대로 load 이벤트를 발생시킨다.  
      8. 다양한 이벤트를 수신하며, 이벤트가 발생하면 이벤트 처리기가 **비동기**로 호출된다.
    
    \*참고   
    이미지 등의 외부 리소스는 DOM 트리 구축 후에 로드한다.  
    load 이벤트는 리소스를 읽어 들인 후에 발생하기 때문에 외부 리소스를 읽어 들이는 시간이 걸리는 만큼 사용자가 기다려야한다.  
    이를 방지하기 위해서는 load 이벤트 대신 DOMContentLoaded 이벤트의 이벤트 처리기에 초기화 작업을 작성한 함수를 등록한다.  
    이 방법을 사용하면 사용자가 오래 기다리지 않고도 웹 페이지를 조작할 수 있다.   <!--20210224 기록 마침--><!--20210225 기록 시작-->
    
    - async와 defer 속성  
      async와 defer 속성은 script 요소의 논리 속성으로, script 요소에 적용하여 사용한다.  
      이 속성을 사용하면 자바스크립트 코드를 실행할 때 HTML 구문 분석을 막지 않는다.  
      
      사용 예  
      ```javascript
        <script async src = "main.js"></script>
        <script defer src = "main.js"></script>
      ```
      
      script 요소에 async 속성을 설정하면 script 요소의 코드가 비동기적으로 실행된다. HTML 문서의 구문 분석 처리를 막지않고, script 요소의 코드를 최대한 빨리 실행한다. 여러 개의 script 요소에 async 속성을 설정하면 다 읽어 들인 코드부터 비동기적으로 실행하므로 실행 순서가 보장되지 안흔다.  
      
      defer 속성을 설정한 script 요소는 DOM 트리 구축이 끝난 후에 실행된다. DOM 구축이 끝난 시점에 실행되기 때문에 자바스크립트 코드로 요소 객체에 이벤트 처리기를 등록하는 등의 초기화 작업을 할 수 있다.  
      
      async 또는 defer 속성이 설정된 script 요소에 document.write 메서드가 있으면 async와 defer 속성이 무시되어 동기적으로 실행된다.  
      
  - 크로스 브라우징 대책  
    크로스 브라우징 대책이란? ECMAScript 5를 지원하지 않는 오래된 웹 브라우저에서도 문제없이 웹 페이지를 표시하고 같은 기능을 사용할 수 있도록 대응하는 작업  
    크로스 브라우징 대책  
    - 기능성 테스트  
    - 브라우저 테스트  
    - 라이브러리를 사용해서 대응  

  - Window 객체  
    Window 객체는 전역 객체이며, 전역 변수는 Window 객체의 프로퍼티이다. 또한 웹 브라우저에서 사용할 수 있는 다양한 객체가 모두 Window 객체의 프로퍼티이다.  
    Window 객체의 프로퍼티와 메서드는 window 프로퍼티로 참조할 수 있다. 예를 들어 Document 객체는 Window.document 와 같이 참조할 수 있다. 이 때 Window. 부분은 생략 가능하다.  
    
    - Window 객체의 주요 프로퍼티  
      https://developer.mozilla.org/ko/docs/Web/API/Window#%EC%86%8D%EC%84%B1    
    
### 13.2 Location 객체  
  Location 객체는 창에 표시되는 문서의 URL을 관리한다. Location 객체는 window.location 또는 location으로 참조할 수 있다. document.location 또한 Location 객체를 참조한다.  
  - Location 객체의 주요 프로퍼티와 메서드   
    https://developer.mozilla.org/ko/docs/Web/API/Location  
    
### 13.3 History 객체  
  History 객체는 창의 웹 페이지 열람 이력을 관리한다. History 객체는 window.history 또는 history로 참조할 수 있다.  
   - History 객체의 주요 프로퍼티와 메서드  
     https://developer.mozilla.org/ko/docs/Web/API/History  
    <!--20210226 기록 마침 2시간 야근한날..-->
    
### 13.4 Navigator 객체  
  Navigator 객체는 스크립트가 실행 중인 웹 브라우저 등의 애플리케이션 정보를 관리한다. Navigator 객체는 window.navigator 또는 navigator로 참조할 수 있다.  
  - Navigator 객체의 주요 프로퍼티와 메서드  
    https://developer.mozilla.org/ko/docs/Web/API/Navigator  
   
### 13.5 Screen 객체  
  Screen 객체는 화면(모니터) 크기와 색상 등의 정보를 관리한다. Screen 객체는 window.screen 또는 screen 참조할 수 있다.  
  - Screen 객체의 주요 프로퍼티와 메서드  
    https://developer.mozilla.org/ko/docs/Web/API/Screen  
   
   <!--20210227 기록 마침 휴가..--> <!--20210302 기록 시작-->  
### 13.6 Document 객체  
  Document 객체는 창에 표시되고 있는 웹 페이지를 관리한다. Document 객체는 window.document 또는 document로 참조할 수 있다.  
  Document 객체는 중요한 객체로 뒤에서 자세하게 다룰 예정이다.  
  - Document 객체의 주요 프로퍼티와 메서드  
    https://developer.mozilla.org/ko/docs/Web/API/Document  
  
### 13.7 창 제어하기  
  웹 브라우저는 일반적으로 여러 개의 창과 탭을 표시하며, 각각의 창과 탭은 별도의 브라우징 컨텍스트를 제공한다. 각각의 브라우징 컨텍스트는 별도의 Window 객체를 가진다.  
  각 브라우징 컨텍스트는 상호 간에 독립적이며 다른 브라우징 컨텍스트 간에 간섭할 수 없다.  
  하지만 예외는 있다. 브라우징 컨텍스트가 새로운 브라우징 컨텍스트를 열때이다. 이 경우에는 부모 브라우징 컨텍스트와 자식 브라우징 컨텍스트는 상호작용 가능하다.  

  - 창 여닫기  
    새로운 창 또는 탭을 열 때는 open 메서드를 사용한다. 사용 방법은 아래와 같다.  
    ```javascript
      var w = open(url, name, option);
    ```
    open 메서드는 새로운 창의 Window 객체를 반환한다.  
    
    각 인수의 의미는 다음과 같다.  
    url : 새롭게 여는 창이 읽어 들이는 문서의 URL
    name : 새로운 창의 이름  
    option : 새로운 창의 설정 값(창의 크기 등)을 쉼표로 연결해서 표기한다.  
             option으로 설정 가능 한 값에 대해서는 아래 url을 참고하자.   
             https://developer.mozilla.org/ko/docs/Web/API/Window/open#window_features  
    
    열린 창을 닫을 때는 close 메서드를 사용한다. 사용 방법은 아래와 같다.  
    ```javascript
      w.close();
    ```
    
  - 창 제어하기  
    open 메서드로 연 창은 위치와 크기를 바꾸거나 스크롤할 수 있다. 사용할 수 있는 메서드 내용은 아래 url를 참고하자.  
    https://developer.mozilla.org/ko/docs/Web/API/Window#%EB%A9%94%EC%84%9C%EB%93%9C  
    
  - 다른 창 참조하기  
    부오 창과 자식 창(부모 창이 open 메서드로 연 창)은 서로의 Window 객체를 참조할 수 있다. 그러나 상호 간에 참조할 수 있는 경우는 동일 출처 정책을 만족할 때로 한정된다.  
    부모 창이 자식 창의 Window 객체를 참조할 때는 open 메서드가 반환한 값을 사용하고, 자식 창이 부모 창의 Window 객체를 참조할 때는 자식 창의 Window 객체에 있는 opener 프로퍼티를 사용한다.  
    
    \*참고  
    동일 출처 정책이란? 웹 페이지 위에서 동작하는 프로그램 출처와 그 프로그램이 읽으려고 시도하는 데이터 출처가 서로 다를 경우에 리소스 간의 상호작용을 제한하는 정책  
                        출처란 리소스 URL이 지닌 세 가지 식별 정보를 말한다. 프로토콜, 포트번호, 호스트 이름이 같을 경우 출처가 같은 리소스라고 한다.  
                        
    <!--20210302 기록 마침-->
