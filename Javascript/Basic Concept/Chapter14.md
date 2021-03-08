## 14. 문서제어  
### 14.1 DOM 트리   
  - DOM(Document Object Model) 트리  
    웹 브라우저가 웹 페이지를 읽어 들이면 렌더링 엔진은 웹 페이지의 HTML 문서 구문을 해석하고 Document 객체에서 문서 내용을 관리하는 DOM 트리라고 하는 객체의 트리 구조를 만든다.  
    DOM 트리를 구성하는 객체 하나를 노드라고 하며, 다음과 같은 기본적인 노드가 존재한다.  
      - 문서 노드 : 전체 문서를 가리키는 Document 객체, document로 참조할 수 있다.  
      - HTML 요소 노드 : HTML 요소를 가리키는 객체  
      - 텍스트 노드 : 텍스트를 가리키는 객체  
    HTML은 요소 뒤에 공백 문자가 있어도 무시한다. 하지만 DOM 트리는 연속적인 공백 문자를 발견하면 텍스트로 취급하여 텍스트 노드로 생성한다.
    (HTML 요소 안에 있는 첫 공백 문자와 마지막 공백 문자에 대해서는 공백 노드를 생성하지 않는다.)
    (크로스 브라우징 대책을 세울 때 공백 노드가 있는지에 의존하지 않는 방법을 선택해야함)
    
  - 노드 객체의 프로퍼티  
    (자세한 내용은 다음 url을 참고. https://developer.mozilla.org/ko/docs/Web/API/Node)
    
    - 노드 객체의 DOM 트리 계층을 표현하는 프로퍼티  
      |프로퍼티 이름|설명|
      |:-----------|:---|
      |parentNode|이 노드의 부모 노드를 참조한다. Document 객체의 부모 노드는 null이 된다|
      |childNodes|이 노드의 자식 노드의 참조를 저장한 유사 배열 객체|
      |firstChild|이 노드의 첫 번째 자식 노드. 자식 노드가 없을 때는 null이 된다|
      |lastChild|이 노드의 마지막 자식 노드. 자식 노드가 없을 때는 null이 된다|
      |nextSibling|이 노드와 같은 부모 노드를 가진 이 노드 다음의 형제 노드|
      |nodeType|노드 유형을 뜻하는 숫자(1: 요소 노드, 3: 텍스트 노드, 9: Document)|
      |nodeValue|텍스트 노드의 테스트 콘텐츠. 요소 노드에서는 null이 된다|
      |nodeName|요소 노드는 대문자로 바뀐 요소 이름이 들어간다. 텍스트 노드는 "#text"가 들어간다|
   
    노드가 가진 위와 같은 프로퍼티를 이용하여 특정 요소 객체나 텍스트 객체를 참조할 수 있다. 하지만 이런 참조 방법은 요소와 요소 사이에 있는 공백 문자의 영향을 받는다.  
    HTML 문서 안의 요소에만 관심이 있는 경우에도 childNodes와 firstChild로 노드를 참조하면 위에서 언급한 것과 같이 공백 문자의 유무에 따라 검색 방법을 바꿔야해서 불편하다.  
    그래서 각 노드에는 DOM 트리 안의 텍스트 노드를 무시하고 HTML 문서에서 요소의 계층 구조만 가져오기 위한 프로퍼티가 마련되어 있다.  
    
    - 노드 객체의 DOM 트리 계층을 가리키는 프로퍼티  
      |프로퍼티 이름|설명|
      |:-----------|:--|
      |childNodes|이 요소의 자식 요소 참조를 저장한 유사 배열 객체|
      |parentElement|이 요소의 부모 요소 객체를 참조한다|
      |firstElementChild|이 요소의 첫 번째 자식 요소 객체를 참조한다|
      |lastElementChild|이 요소의 마지막 자식 요소 객체를 참조한다|
      |nextElementSibling|이 요소와 같은 부모를 가진 다음 형제 요소 객체를 참조한다|
      |previousElementSibling|이 요소와 같은 부모를 가진 이전 형제 요소 객체를 참조한다|
      |childElementCount|자식 요소의 개수. children.length와 같다|
      
    - 주요 노드 객체  
    HTML 문서에서 주로 사용하는 노드 객체에는 문서노드, 요소 노드, 텍스트 노드, 주석 노드, 속성 노드가 있다.  
    주요 노드 객체의 종류, 생성자, nodeName, nodeValue, nodeType의 속성 값은 다음과 같다.  
    |노드의 종류|생성자|nodeName|nodeValue|nodeType|
    |:--------:|:----:|:------|:--------:|:------:|
    |문서 노드|HTMLDocument|"#document"|null|9|
    |요소 노드|HTMLElement|요소 이름 (대문자)|null|1|
    |텍스트 노드|Text|"#text"|텍스트|3|
    |주석 노드|Comment|"#comment"|주석 내용|8|
    |속성 노드|Attr|속성 이름|속성 값|2|
    
  <!--20210303 기록 마침-->  <!--20210306 기록 시작-->
  \* 참고  
    렌더링 엔진  
    렌더링 엔진은 DOM 트리와 스타일 규칙이 바뀔 때마다 렌더 트리를 다시 구성해서 웹 페이지를 다시 그린다.  
    렌더 트리를 다시 구성하고 다시 렌더링하는 처리는 시간이 많이 걸리는 작업이다. 따라서 웹 브라우저는 렌더링 처리 횟수를 가능한 줄이는 최적화 처리를 한다.  
    예를 들어 스타일의 수정 요청이 여러 번 반복되면 요청을 대기열에 모아 두고 마지막에 한꺼번에 처리한다.  
 
### 14.2 노드 객체 가져오기  

  - id 속성으로 노드 가져오기  
    HTML 문서의 요소에는 id 속성을 지정할 수 있다. (id 속성 값은 문서 내에 유일한 값이어햐 한다.)  
    id 값으로 요소 객체를 가져올 때는 getElementById 메서드를 사용한다.  
    사용 방법은 아래와 같다.  
    ```javascript
      document.getElementById(id 값);
    ```
    
  - 요소의 이름으로 노드 가져오기  
    getElementsByTagName 메서드를 사용하면 인수로 넘긴 문자열과 같은 이름을 가진 태그 목록을 가져올 수 있다.  
    사용 방법은 아래와 같다.  
    ```javascript
      document.getElementsByTagName(요소의 태그 이름);
    ```
    getElementsByTagName 메서드는 NodeList 객체(유사 배열 객체)를 반환한다.
     \* NodeList 객체  
        NodeList 객체는 HTML 문서의 변화에 따라 동적으로 바뀐다.  
        따라서 NodeList 객체를 순회하면서 요소를 추가해야 하는 상황에서는 주의를 기울여야 한다. 이때는 아래와 같이 NodeList 객체의 정적 복사본을 만들어 순회해야 한다.   
       ```javascript
          var staticList = Array.prototype.slice.call(nodeList, 0);
       ```

  - class 속성 값으로 노드 가져오기  
    HTML 문서의 요소에는 class 속성을 지정할 수 있다.  
    class 속성 값으로 요소 객체 목록을 가져 올때는 getElementsByClassName 메서드를 사용한다.  
    사용 방법은 아래와 같다.  
    ```javascript
      document.getElementsByClassName(class의 이름);
    ```
  <!--20210306 기록 마침--> <!--20210308 기록 시작-->  
  
  - name 속성 값으로 노드 가져오기  
    name 속성은 그 요소의 이름을 지정할 때 사용하며, form과 input 요소 등의 폼 컨트롤 요소, iframe, img, map, object 요소 등에 지정할 수 있다. name 속성 값은 class 속성 값과 마찬가지로 요소 여러 개를 대상으로 같은 값을 쓸 수 있다.  
    getElementsByName 메서드를 사용하면 특정 문자열을 name 속성 값으로 갖는 요소 객체 목록을 가져올 수 있다.  
    사용 방법은 아래와 같다.  
    ```javascript
      document.getElementsByName(name 속성 값);
    ```
    
  - querySelectorAll, querySelector 메서드  
    querySelectorAll 메서드를 사용하면 인수로 넘긴 선택자와 일치하는 요소 객체가 담긴 NodeList를 가져올 수 있다.  
    사용 방법은 아래와 같다.  
    ```javascript
      document.querySelectorAll("선택자");
    ```
    메서드를 호출한 시점에 일치한 요소를 선택하여 NodeList로 반환한다.  
    
    querySelector 메서드는 지정한 선택자와 일치하는 요소 객체 중에서 문서 위치가 첫 번째인 요소 객체를 반환한다.  
    사용 방법은 아래와 같다.  
    ```javascript
      document.querySelector("선택자");
    ```
