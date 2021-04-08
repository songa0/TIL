## 15. 이벤트 처리  
### 15.1 이벤트 처리기 등록  
  - 이벤트 처리기 등록하기  
    이벤트 주도형 프로그램에서는 이벤트가 발생했을 때 실행할 함수를 등록해 둔다.  
    이벤트가 발생했을 때 실행되는 함수를 이벤트 처리기 또는 이벤트 리스너라고 한다. 이벤트를 다음 세 가지 방법으로 등록할 수 있다.  
    - HTML 요소의 이벤트 처리기 속성에 설정하는 방법  
      ```javascript
        <input type = "button" onClick="changeColor();"/>
      ```
    - DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정하는 방법  
      ```javascript
        var btn = document.getElementById("button");
        btn.onClick = changeColor();
      ```
    - addEventListener 메서드를 활용하는 방법  
      ```javascript
        var btn = document.getElementById("button");
        btn.addEventListener("click", changeColor);
      ```
   
  - 이벤트 처리기의 문제점  
    HTML 요소에 설정하는 방법 : 가독성, 유지보수성 떨어짐. 특정 요소의 특정 이벤트에 대해서 이벤트 처리기를 단 하나만 등록할 수 있음   
    DOM 요소에 설정하는 방법 : 특정 요소의 특정 이벤트에 대해서 이벤트 처리기를 단 하나만 등록할 수 있음  
    
  - 이벤트 리스너를 등록/삭제하기  
    - addEventListener 메서드로 이벤트 리스너 등록하기  
      addEventListener로 등록한 함수는 이벤트 리스너라는 이름으로 부른다. addEventListener 메서드를 이용하면 같은 요소의 같은 이벤트에 이벤트 리스너를 여러 개 등록할 수 있다.  
      ```javascript
        target.addEventListener(type, listener, useCapture);
      ```
      target : 이벤트 리스너를 등록할 DOM 노드  
      type : 이벤트 유형을 뜻하는 문자열  
      listener : 이벤트가 발생했을 때 처리를 담당하는 콜백 함수의 참조  
      useCapture : 이벤트 단계 (true : 캡처링 단계, false : 버블링 단계(default))  
    
    
      
