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
      
      
