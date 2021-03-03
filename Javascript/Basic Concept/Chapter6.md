## 6. 웹 브라우저에서의 입출력
### 6.1 대화상자
  - 대화상자? 입력을 하거나 메시지를 확인하기 위해 별도로 여는 창  
    모달 창이기 때문에, 대화상자가 떠 있는 중에는 부모 창을 조작할 수 없음.
    |메서드|설명|
    |:---:|:---|
    |window.alert|경고 대화상자를 표시|
    |window.prompt|사용자의 문자열 입력을 받는 대화상자를 표시|
    |window.confirm|확인버튼과 취소 버튼이 있는 대화상자를 표시|
    
    Window 객체의 메서드는 window 부분을 생략하고 호출할 수 있기 때문에, alert, prompt, confirm으로 호출 가능함  
    ```javascript
    alert("Hello");
    var name = prompt("Enter your name"); //입력받은 문자열이 반환됨
    var flag = confirm("Would you like to proceed?"); // 확인 버튼을 누르면 true, 취소 버튼을 누르면 false가 반환됨
    ```
  
### 6.2 console
  - Console 객체의 주요 메서드
    |메서드|설명|
    |:----|:---|
    |console.dir|객체의 대화형 목록을 출력|
    |console.error|오류 메시지를 출력|
    |console.info|메시지 타입 로그를 출력|
    |console.log|일반 로그를 출력|
    |console.time|처리 시간 측정용 타이머를 시작|
    |console.timeEnd|처리 시간 측정용 타이머를 정지시키고 타이머를 시작한 후에 흐른 시간을 밀리초 단위로 출력|
    |console.trace|스택 트레이스를 출력|
    |console.warn|경고 메시지를 출력|
    
<!--20201228 기록 끝
    오랜만에 조금 오래 앉아있었다.-->
<!--20201229 기록 시작-->
### 6.3 이벤트 처리기와 타이머
  - 이벤트 처리기 : 이벤트가 발생했을 때 실행되는 함수  
    웹 브라우저에서 동작하는 프로그램은 기본적으로 **이벤트 주도형 프로그램**임  
      - 이벤트 주도형 프로그램(event driven program)? 이벤트가 발생할 때까지 기다렸다가 이벤트가 발생하면 미리 등록해 둔 작업을 수행하는 프로그램 
    
    함수를 이벤트 처리기로 등록하는 방법
      - HTML 요소의 속성으로 등록하는 방법
      - DOM 요소의 프로퍼티로 등록하는 방법
      - add EventListener 메서드를 사용하는 방법 (chapter 15에서 다룸)
    
  - HTML 요소의 속성에 이벤트 처리기 등록
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset = "UTF-8">
            <title></title>
            <script>
            function displayTime(){
              var now = new Date();
              console.log("현재 시각은 "+now.toLocaleString()+" 입니다.");   
            }
            </script>
        </head>
        <body>
            <input type = "button" value = "Click" onclick = "displayTime()">
        </body>
    </html>
    ```
    위 예제는 Click 버튼을 누르면 콘솔에 현재 시각을 표시하는 프로그램임  
    onclick = "displayTime()" 부분이 이벤트 처리기 속성이며, onclick 부분을 이벤트 처리기 이름이라고 함 
    
    주요 이벤트 처리기 이름은 다음과 같음
    |이벤트 처리기 이름|이벤트 종류|
    |:----------------|:----------|
    |onclick|마우스로 클릭했을 때|
    |ondblclick|마우스로 더블클릭했을 때|
    |onmousedown|마우스 버튼을 눌렀을 때|
    |onmouseup|마우스 버튼에서 손가락을 떼었을 때|
    |onmousemove|마우스 포인터가 HTML 요소 위에서 움직일 때|
    |onmouseout|마우스 포인터가 HTML 요소를 벗어났을 때|
    |onmouseover|마우스 포인터가 HTML 요소 위에 놓여 있을 때|
    |onkeydown|키보드의 키를 눌렀을 때|
    |onkeypress|키보드의 키를 누르고 손가락을 떼었을 때|
    |onkeyup|키보드의 키에서 손가락을 떼었을 때|
    |onchange|input 요소의 값이 바뀌었을 때|
    |onblur|input 요소가 포커스를 잃었을 때|
    |onfocus|input 요소에 포커스를 맞추었을 때|
    |onselect|텍스트 필드 등의 텍스트를 선택했을 때|
    |onsubmit|폼 제출 버튼을 눌렀을 때|
    |onload|HTML을 모두 읽어 들였을 때|
    |onunloadWeb|웹 페이지가 메모리에서 내려갈 때(예: 다른 페이지로 전환할 때)|
    |onabort|페이지나 이미지 읽어 들이기가 중단되었을 때|
    |onerror|페이지나 이미지를 읽어 들이는 동안 오류가 발생했을 때|
    |onresize|HTML 요소의 크기가 바뀌었을 때|
    
    <!--20201229 기록 마침
        이벤트 처리기에 대해 다시 한 번 정리하는 기회를 가졌다.-->
    <!--20201230 기록 시작-->
    
  - DOM에서 가져온 HTML 요소에 이벤트 처리기 등록  
    DOM(Document Object Model)? 자바스크립트 등의 프로그램이 HTML 요소를 조작할 수 있게 하는 인터페이스    
    - DOM 주요 객체  
      - window : Window 객체라고 부르며 웹 브라우저 윈도우 하나 또는 탭 하나를 가리킴  
      - document : Document 객체라고 부르며 HTML 문서 전체를 가리킴. HTML 문서에서 HTML 요소를 가져오거나 HTML 요소를 새로만드는 등 HTML 문서 전반에 걸친 기능을 제공  
      - 요소 객체 : HTML 문서의 요소를 가리키는 객체  
      
    - DOM을 사용해서 이벤트 처리기 등록하기  
      ```html
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset = "UTF-8">
            <title></title>
            <script>
                function displayTime(){
                    var d = new Date();
                    console.log("현재 시각은 "+d.toLocaleString()+" 입니다.");
                }
                // Window 객체의 onload 프로퍼티에 함수를 저장
                window.onload = function(){
                    // input 요소의 객체 가져오기
                    var button = document.getElementById("button");
                    // 이벤트 처리기 등록
                    button.onclick = displayTime;
                }
            </script>
        </head>
        <body>
            <input type = "button" value = "Click" id = "button">
        </body>
        </html>

      ```
      - 자바스크립트 코드가 실행되는 시점  
        웹 브라우저는 HTML 문서를 위에서부터 해석하며 표시함. 해석하다 script 요소를 발견하면 안에 있는 코드를 실행한 다음 HTML 요소를 해석함.
        script 요소는 동기실행(블로킹 실행)임.
  
    - 이벤트 처리기 제거  
      이벤트 처리기가 등록되어 있지 않으면 프로퍼티에는 기본적으로 null이 담겨있음    
      그래서 이벤트 처리기를 제거할 때는 아래와 같이 null을 대입해주면 됨    
      ```javascript
        button.onclick = null;
      ```
  - 타이머  
    - setTimeout : 일정 시간이 흐른 후에 한 번 호출되는 함수를 등록할 수 있음
    ```javascript
      var timer = setTimeout(function(){
        console.log(new Date());
        },2000); //2초 후에 콘솔에 날짜가 표시됨
      
      clearTimeout(timer); //함수 실행이 취소됨
    ```
     setTimeout의 첫 번째 인수는 실행하고자 하는 함수의 참조, 두 번째 인수는 지연 시간을 밀리초 단위로 지정함  
     setTimeout이 반환한 값을 clearTimeout에 인수로 넘기면 함수 실행이 취소됨
     
     - setInterval : 일정한 시간 간격에 따라 반복해서 실행하는 함수를 등록할 수 있음
     ```javascript
      var timer = setInterval(function(){
                    console.log(new Date());
                    },2000); //2초마다 콘솔에 날짜가 표시됨
      
      clearInterval(timer);//함수 실행이 취소됨
      
     ```
      - setTimeout()과 setInterval()의 첫 번째 인수로 아래와 같이 문자열을 넘길 수 있음. 이때 문자열은 eval()로 평가된 후 실행됨.
        ```javascript
          setTimeout("console.log(new Date())",2000);
        ```
   <!--20201230 기록 마침
       6장 끝도 머지 않았다. 꾸준히 하자.-->
  <!--20201231 기록 시작-->
### 6.4 HTML 요소를 동적으로 읽고 쓰기
   - HTML 요소의 innerHTML 프로퍼티로 읽고 쓰기
    
     ```javascript
      <!DOCTYPE html>
        <html>
          <head>
              <meta charset = "UTF-8">
              <title></title>
              <script>
                  window.onload = function(){
                      var startButton = document.getElementById("startButton"); 
                      var stopButton = document.getElementById("stopButton");
                      stopButton.disabled = true;
                      var display = document.getElementById("display");
                      var timer;
                      startButton.onclick = start;

                      function start(){
                          var startTime = new Date(); //현재 시간 기록
                          startButton.onclick = null;
                          startButton.disabled = true;
                          stopButton.onclick = stop;
                          stopButton.disabled = false;

                          timer = setInterval(function(){
                              display.innerHTML = ((new Date()-startTime)/1000).toFixed(2); 
                          },10);            
                      };

                      function stop(){
                          clearInterval(timer);
                          startButton.onclick = start;
                          startButton.disabled = false;
                          stopButton.disabled = true;
                      };

                  }
              </script>
          </head>
          <body>
              <p id="display">0.00</p>
              <input type = "button" id = "startButton" value = "start">
              <input type = "button" id = "stopButton" value = "stop">
          </body>
        </html>
      
      ```

### 6.5 Canvas를 활용한 컴퓨터 그래픽스  
  - Canvas의 특징  
      - 저수준  
        canvas는 기본적인 그리기 기능만 제공하므로 그리는 속도가 빠름. 저수준 API란 기본적인 기능만 제공하는 API라는 뜻으로, 더욱 복잡한 그림은 저수준 API를 활용한 애플리케이션으로 그림  
      - 즉시 실행형  
        Canvas의 그리기 명령은 호출하는 즉시 실행됨  
  - Canvas 기본 사용법
      ```html
      <!DOCTYPE html>
      <html>
          <head>
              <meta charset = "UTF-8">
              <title></title>
              <script>
                  window.onload = function(){
                      var mycanvas = document.getElementById("mycanvas");
                      var ctx = mycanvas.getContext("2d"); 
                      //렌더링 컨텍스트 가져오기. Canvas로 그림을 그리려면 canvas 요소에서 렌더링 컨텍스트라는 객체를 가져와야함.
                      //2차원 컴퓨터 그래픽스는 '2d', 3차원 컴퓨터 그래픽스는 'webgl'을 사용.
                      ctx.strokeRect(10,60,200,100); //좌표가 (10,60)에 너비가 200이고 높이가 100인 사각형 테두리를 그린다
                      //Canvas 좌표는 왼쪽 윗부분이 원점(0,0)
                  };
              </script>
          </head>
          <body>
              <canvas id = "mycanvas" width="600" height="400"></canvas>
          </body>
      </html>

      ```
     <!--20201231 기록 마침
        공부하는 것보다 기록하는 것이 시간이 많이 걸리는 것 같다. 그래도 매일 매일 조금씩 해나가자.--> 
     <!--20210101 기록 시작-->
  - Canvas 기본 메서드
      |메서드 사용 예|설명|
      |:------------|:--|
      |strokeRect(x,y,width,height)|좌표(x,y)에 너비가 width, 높이가 height인 사각형 테두리를 그린다|
      |fillRect(x,y,width,height)|좌표(x,y)에 너비가 width, 높이가 height인 사각형을 채운다|
      |clearRect(x,y,width,height)|좌표(x,y)에 너비가 width, 높이가 height인 사각형 영역을 삭제한다|
      |beginPath()|렌더링 컨텍스트 패스를 기록하기 시작한다(지금까지 정의한 패스가 초기화됨)|
      |moveTo(x,y)|지정된 좌표까지 이동한다|
      |lineTo(x,y)|지정된 좌표까지 선을 그린다|
      |closePath()|패스의 마지막 점과 시작점을 직선으로 연결하고 패스를 닫는다|
      |stroke()|패스를 그린다|
      |fill()|패스로 둘러싼 영역을 채운다|
      
  - 그래픽스 속성  
      선 색상, 채우기 색상, 투명도, 선 스타일 등을 설정할 수 있다. 사각형을 그리기 전이나 stroke와 fill 메서드로 패스를 그리기 전에 설정하면 그림에 반영된다.
      |속성 명|설명|
      |:------|:---|
      |strokeStyle|선 색상 설정|
      |fillStyle|채우기 색상 설정|
      |globalAlpha|도형의 투명도 설정(Canvas 위에 그려진 모든 도형에 대한, 0~1 값으로 설정 가능)|
      |lineWidth|stroke와 strokeRect 메서드로 그리는 선 두께 설정|
      |lineCap|열린 패스 종단점 모양을 설정("butt", "square", "round" 으로 설정 가능)|
      |lineJoin|패스의 정점 모양을 설정("miter", "round", "bevel" 으로 설정 가능)|
      
      <!--20210101 기록 끝
        6장도 끝이 보인다. 조금만 힘내자!-->
      <!--20210102 기록 시작-->
  - 그림 읽어 들이기
      ```html
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title></title>
                <style>
                    canvas {border : 2px solid gray;}
                </style>
                <script>
                    window.onload = function(){
                        var canvas = document.getElementById("mycanvas");
                        var ctx = canvas.getContext("2d");
                        var img = new Image(); //image 객체 생성하기
                        img.onload = function(){ //image를 읽어 들인 후 canvas에 그리기
                            ctx.drawImage(img,0,0);
                        };
                        img.src = "./img.png"; //이 문장이 실행된 후 drawImage가 호출됨
                    };

                </script>
            </head>
            <body>
                <canvas id = "mycanvas" width = "600" height = "400"></canvas>
            </body>
        </html>

      ```
      - drawImage 메서드의 다양한 사용법  
          - drawImage(image,x,y)   
            : 좌표 점(x,y)를 왼쪽 위 꼭짓점으로 삼아 image를 읽어 들인다.  
          - drawImage(image,x,y,width,height)  
            : 좌표 점(x,y)를 왼쪽 위 꼭짓점으로 삼아 image를 읽어 들인다. 이때 이미지 너비는 width 값, 높이는 height 값을 따른다.(width,height 생략 가능)  
          - drawImage(image,sx,sy,sw,sh,x,y,width,height)  
            : 원래 이미지에서 (sx,sy)를 왼쪽 위 꼭짓점으로 삼아 너비는 sw, 높이는 sh만큼 잘라낸다. 그리고 canvas 요소에서 왼쪽 위 꼭짓점이 (x,y)인 지점에 위치하도록 하고 너비가 width, 높이가 heigh인 사각형 영역안에 자른 이미지를 그린다.
  <!--20200103 기록 시작--> 
  - 픽셀 제어하기  
    - getImageData : Canvas 이미지의 픽셀 값(RGBA 값)을 제어할 수 있는 imageData 객체를 가져올 수 있음  
    - createImageData : 새로운 imageData 객체를 생성할 수 있음
    - putImageData : imageData를 렌더링 컨텍스트에 그림
    
 <!--20200103 기록 끝
      오늘은 갑자기 산책 약속 시간이 당겨져 기록을 일찍 마친다.-->     
<!--20200104 기록 시작-->
   ```html
   <!DOCTYPE html>
   <html>
      <head>
          <meta charset="UTF-8">
          <title></title>
          <script>
              window.onload = function(){
                  var canvas = document.getElementById("mycanvas");
                  var ctx = canvas.getContext("2d");

                  var img = new Image();
                  img.onload = function(){
                      ctx.drawImage(img,0,0);
                      //canvas 요소의 너비와 높이는 canvas.width와 canvas.height로 가져올 수 있음
                      var imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
                      imageData.getRGBA = function(m,n,i){
                          return this.data[this.width*4*n+4*m+i];
                      };
                      var rgb = document.getElementById("rgb");

                      canvas.onclick = function(event){
                          var x = parseInt(event.offsetX); //offsetX, offsetY 값이 정수가 아닐때가 있어서 정수로 변환해줌
                          var y = parseInt(event.offsetY);

                          rgb.innerHTML = " R:"+imageData.getRGBA(x,y,0)
                                          +" G:"+imageData.getRGBA(x,y,1)
                                          +" B:"+imageData.getRGBA(x,y,2);
                      };
                  };
                  img.src = "./img.png";
              };
          </script>
      </head>
      <body>
          <canvas id = "mycanvas" width = "600" height = "400"></canvas>
          <div><output id="rgb"></output></div>
      </body>
  </html>


  ```
