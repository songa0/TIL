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
  
  - Document 객체의 프로퍼티  
    DOM을 표준화하기 이전의 DOM을 가리켜 DOM Level 0이라고 한다. DOM Level 0에는 위와 같은 노드를 가져오는 메서드가 없었다.  
    그 대신 특정 요소 객체를 읽고 쓰는 수단이 Document 객체의 프로퍼티로 마련되어 있었다. 이 프로퍼티는 DOM의 최신 버전(DOM Level 3)에도 남아 있고 사용 가능하다.    
    Document 객체의 요소를 읽고 쓰기 위해 마련된 프로퍼티는 아래 표를 참고하자. 
    |프로퍼티|설명|
    |:------|:---|
    |document.documentElement|문서의 루트 요소 객체의 참조|
    |document.head|문서의 head 요소 객체의 참조|
    |document.body|문서의 body 요소 객체의 참조|
    |document.forms[]|문서 안의 form 요소 객체의 참조를 저장한 유사 배열 객체|
    |document.images[]|문서 안의 images 요소 객체의 참조를 저장한 유사 배열 객체|
    |document.anchors[]|문서 안의 anchors 요소 객체의 참조를 저장한 유사 배열 객체|
    |document.applets[]|문서 안의 applets 요소 객체의 참조를 저장한 유사 배열 객체|
    |document.links[]|문서 안의 links 요소 객체의 참조를 저장한 유사 배열 객체|
    |document.embeds[]|문서 안의 embeds 요소 객체의 참조를 저장한 유사 배열 객체|
    |document.plugins[]|문서 안의 plugins 요소 객체의 참조를 저장한 유사 배열 객체|
    |document.scripts[]|문서 안의 scripts 요소 객체의 참조를 저장한 유사 배열 객체|
    
    위의 표에서 document.forms[] 부터 그 밑에 나오는 프로퍼티들은 HTMLCollection 객체이다. HTMLCollection 객체는 유사 배열 객체이며 읽기 전용이다.  
    
### 14.3 속성 값의 읽기와 쓰기  
  - 요소 객체의 프로퍼티로 요소의 속성을 읽고 쓰기  
    요소 객체에는 요소의 일반적인 속성을 표현하기 위한 프로퍼티가 정의되어 있다. 요소 객체에는 일반적인 HTML 속성(id, class, name...)과 이벤트 처리기 프로퍼티(onclick, onmousedown,...) 등이 정의되어 있다. 일반적인 속성의 이름은 다음과 같이 표기한다.  
    ```javascript
      요소객체.속성이름
    ```
    이 프로퍼티는 읽기와 쓰기가 가능하다. 
    ```html
      <!DOCTYPE>
      <html>
        <head>
        </head>
        <body>
          <a id="portalSite" href ="http://www.naver.com">포털 사이트</a>
          <script>
            var anchor = document.getElementById("portalSite");
            console.log(anchor.href);
            
            anchor.href = "http://www.google.com";
            console.log(anchor.href);
          </script>
        </body>
      </html>

    ```
    위 예제와 같이 속성 프로퍼티는 쓰기가 가능하며 속성 값을 설정할 수 있다.  
    HTML 요소의 속성 이름은 대소문자를 구분하지 않지만 자바스크립트 요소 객체의 속성 프로퍼티는 대소문자를 구분한다.  
    또한 몇몇 HTML 속성 이름은 자바스크립트에서 예약어로 사용하고 있는 이름이다. 따라서 이런 경우에는 속성 이름 앞에 html을 덧붙인다.  
    예를 들어 label 요소의 for 속성을 설정할 때 자바스크립트에서는 htmlFor를 사용하는 식이다. 단, class 속성은 자바스크립트에서는 className 프로퍼티를 사용한다.  
    
<!--20210309 기록 마침--><!--20210312 기록 시작-->
  - 속성 값 가져오기  
    getAttribue 메서드는 요소의 속성을 가져온다. 해당하는 속성이 없을 때는 null 또는 빈 문자열을 반환한다.  
    ```javascript
      요소 객체.getAttribute(속성의 이름)
    ```
    
  - 속성 값 설정하기  
    setAttribute 메서드는 요소의 속성을 설정한다. 해당하는 속성이 없을 때는 그 속성을 새롭게 추가한 후에 설정한다.  
    ```javascript
      요소 객체.setAttribute(속성 이름, 속성 값)
    ```
    
  - 속성이 있는지 확인하기  
    hasAttribute 메서드는 속성 이름을 받아서 그 이름을 가진 속성이 있는지 알려주는 논리 값을 반환한다.  
    ```javascript
      요소 객체.hasAttribute(속성 이름)
    ```
    
  - 속성 삭제하기  
    removeAttribute 메서드는 속성 이름을 받아서 그 이름을 가진 속성을 삭제한다.  
    ```javascript
      요소 객체.removeAttribute(속성 이름)  
    ```
    
  - 전체 속성의 목록 가져오기  
    요소 객체에는 attributes 프로퍼티가 정의되어 있고, 이 프로퍼티는 NamedNodeMap 객체로 그 요소에 설정된 모든 속성의 속성 노드 객체가 담겨 있다.  
    NamedNodeMap 객체의 요소인 속성 노드 객체의 name 프로퍼티에는 속성 이름이 담겨 있으며, value 프로퍼티에는 속성 값이 담겨 있다.  
    (NamedNodeMap 객체는 유사 배열이며 읽기 전용)
    
## 14.4 HTML 요소의 내용을 읽고 쓰기  
  - innerHTML 프로퍼티  
    innerHTML 프로퍼티는 요소 안의 HTML 코드를 가리킨다. innerHTML 프로퍼티를 사용해서 요소 안의 코드를 읽거나 쓸 수 있다.  
    ```html
      <!DOCTYPE html>
      <html lang="ko">
          <head>
          </head>
          <body>
            <p id = "card">&hearts; 하트는 <strong>승려</strong>라는 뜻입니다.</p>
            <script>
              var para = document.getElementById("card");
              para.innerHTML = "&diams; 다이아는 <strong>상인</strong>이라는 뜻입니다.";
            </script>

          </body>
        </html>
    ```
<!--20210314 기록 시작-->  
  - textContent와 innerText 프로퍼티  
    textContent 프로퍼티는 요소의 내용을 웹 페이지에 표시했을 때의 텍스트 정보를 표시한다.  
    textContent 프로퍼티 값은 지정한 요소의 자식 노드인 모든 텍스트 노드를 연결하 값이다.  
    ```html
      <!DOCTYPE html>
      <html lang="ko">
          <head>
          </head>
          <body>
            <p id = "card">&hearts; 하트는 <strong>승려</strong>라는 뜻입니다.</p>
            <script>
              var para = document.getElementById("card");
              console.log(para.textContent); <!--♥ 하트는 승려라는 뜻입니다.-->
            </script>
          </body>
       </html>
    ```
    또한 textContent 프로퍼티에 텍스트를 대입하면 요소의 내용을 텍스트로 변환할 수 있다. 아래 예제를 통해 확인해보자.  
     ```html
      <!DOCTYPE html>
      <html lang="ko">
          <head>
          </head>
          <body>
            <p id = "card">&hearts; 하트는 <strong>승려</strong>라는 뜻입니다.</p>
            <script>
              var para = document.getElementById("card");
              para.textContent = "&diams; 다이아는 <strong>상인</strong>이라는 뜻입니다.";
              console.log(para.innerHTML); <!--&amp;diams; 다이아는 &lt;strong&gt;상인&lt;/strong&gt;이라는 뜻입니다.-->
              console.log(para.textContent); <!--&diams; 다이아는 <strong>상인</strong>이라는 뜻입니다.-->
            </script>
          </body>
       </html>
    ```
    위의 예제에서 알 수 있듯이 textContent에 텍스트를 대입하면 요소의 내용을 바꿀 수 있따. 이 때 HTML 특수문자가 이스케이프되어 HTML로 표시할 수 있는 문자열로 바뀐다.  
    (textContent 프로퍼티는 IE9 이전 버전에서는 사용할 수 없다. 대신 IE9 이전 버전에서는 innerText 프로퍼티를 사용한다)  
   
 ## 14.5 노드 생성/삽입/삭제하기  
  - 노드 생성하기  
    새로운 요소 노드 객체를 생성할 때는 createElement 메서드를 사용하고, 새로운 텍스트 노드를 생성할 때는 createTextNode 메서드를 사용한다.  
    ```javascript
      var element = document.createElement(요소의 이름);
      var newText = document.createTextNode(텍스트);
    ```
    
    아래의 예제를 보면 생성한 요소 객체의 parentNode, childNode가 비어있는 것을 확인할 수 있다. DOM 트리의 계층 구조를 뜻하는 프로퍼티 값이 비어있다.  
    즉, 생성한 노드 객체는 메모리에 생성되어 있을 뿐 문서의 DOM 트리와는 아무런 관계가 없다는 것을 유의하자.  
    ```javascript
      var headline = document.createElement("h1");
      
      console.log(headline.parentNode); //null
      console.log(headline.childNode); //undefined
    ```
   
   노드 객체를 생성하는 주요 메서드  
   |메서드|생성하는 노드 객체|
   |:-----|:---------------|
   |document.createElement(요소 이름)|요소 노드 객체|
   |document.createAttribute(속성 이름)|속성 노드 객체|
   |document.createTextNode(텍스트)|텍스트 노드 객체|
   |document.createComment(텍스트)|주석 노드 객체|
   |document.createDocumentFragment()|도큐먼트 프래그먼트|
   |document.importNode(다른 문서의 노드, deep)|다른 문서에 있는 노드를 복사한다. deep을 true로 설정하면 자식 노드까지 복사하고 false로 설정하면 얕은 복사를한다.|
   |node.cloneNode(deep)|노드를 복사한다. deep을 true로 설정하면 자식 노드까지 복사하고, false로 설정하면 얕은 복사를 한다.|
   
    
    
