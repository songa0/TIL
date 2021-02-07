## 8. 함수
### 8.1 함수 정의
  - 함수 정의 방법  
    - 함수 선언문으로 정의하기  
      function square(x){return x*x;}
    - 함수 리터럴로 정의하기  
      var square = function(x){return x*x;}
    - Function 생성자로 정의하기  
      var square = new Function("x","return x*x");
    - 화살표 함수 표현식으로 정의하기  
      var square = x => x*x;
      
  - 중첩 함수  
    특정 함수의 내부에 선언된 함수를 가리켜 그 함수의 중첩 함수라고 함  
   
    ```javascript
      function norm(x) {
        var sum2 = sumSquare();
        return Math.sqrt(sum2);
        function sumSquare(){
          sum = 0;
          for(var i =0; i<x.length; i++) sum+= x[i]*x[i];
          return sum;
        }
      }
      
      var a = [2,1,3,5,7];
      var n = norm(a);
      console.log(n);
    ```
    중첩 함수의 참조는 그 중첩 함수를 둘러싼 외부 함수의 지역 변수에 저장되므로 외부 함수의 바깥에서는 읽거나 쓸 수 없음  
    중첩 함수는 자신을 둘러싼 외부 함수의 인수와 지역 변수에 접근 가능함
 <!--20210105 기록 마침
     앞에서 다뤘던 내용을 더 자세하게 다룰 것 같아서 조금 기대가된다.-->
     
  <!--20210106 기록 시작-->  
### 8.2 함수 호출  
  - 함수 호출 방법
    - 함수 호출  
      함수의 참조가 저장된 변수 뒤에 그룹연산자 '()' 을 붙여서 함수를 호출함  
      var s = square(5);  
      
    - 메서드 호출  
      메서드? 객체의 프로퍼티에 저장된 값이 함수 타입일 때 그 프로퍼티를 메서드라고 함  
      그룹연산자 '()'을 붙여서 호출  
      obj.f = function(){};  
      obj.f();  
      
    - 생성자 호출  
      함수의 참조를 저장한 변수 앞에 new 키워드를 추가하면 함수가 생성자로 동작함  
      var obj = new Object();  
     
    - call, apply를 이용한 간접 호출  
      아래 링크에 call, apply에 대해 간단하게 다루었음(javascript chapter9에서 자세히 다룰 예정)  
      https://github.com/songa0/TIL/blob/main/Node.js/Basic%20Concept/Chapter2.md#214-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98
      
  - 즉시 실행 함수
    - 익명 함수의 참조를 할당한 변수에 그룹 연산자를 붙여 실행  
      var f = function(){};  
      f();  
    
    - 즉시 실행 함수 구문 사용  
      - (function(){})();  //그룹 연산자 안에 인수를 넘길 수 있음
      - (function(){}());
      - +function(){}();
    
### 8.3 함수의 인수
  - 인수의 생략  
    함수 정의식에 작성된 인자 개수보다 인수를 적게 전달하면 생략한 인자는 undefined가 됨  
    이 성질을 이용하여 인수를 생략할 수 있는 함수를 정의할 수 있음  
    ```javascript
    function multiply(a,b){
      a = a||1;
      b = b||1;
      return a*b;
    }
    multiply(3,5); //15
    multiply(2); //2
    multiply(); //1
    ```
<!--20210106 기록 마침
    인수가 제대로 전달되었는지 확인할 때 인수 값이 "", undefined 인지 검사했었는데, 단지 if 괄호 안에 인수만 쓰면 된다는 것을 알게 되었다 -->
 <!--20210107 기록 시작-->
 - 가변 길이 인수 목록(Arguments 객체)  
   arguments 변수는 모든 함수에서 사용할 수 있는 지역 변수로, arguments 변수의 값은 Arguments 객체임  
   함수에 인수를 n개 넘겨서 호출하면 arguments[0]에는 첫 번째 인수 값,arguments[1]에는 두 번째 인수 값....이 저장됨  
   - Arguments 객체의 프로퍼티  
      - length : 인수 개수  
      - callee : 현재 실행되고 있는 함수의 참조  
     
     ```javascript
      function f(x,y){
        console.log(arguments[0],arguments[1]);
      }
      f(2,3); //2 3
     ```
 
### 8.4 재귀함수
  재귀 호출 : 함수가 자기 자신을 호출하는 행위  
  재귀 함수 : 재귀 호출을 수행하는 함수  
  
  - 재귀 함수의 기본
    ```javascript
      function fact(n){
        if(n==1) return 1;
        return n*fact(n-1);
      }
      
      fact(10); //3628800
    ```
    ```javascript 
    //익명 함수의 재귀 호출
      var fact = function(n){
                  if(n==1) return 1;
                  return n*arguments.callee(n-1); //arguments.callee는 실행 중인 함수를 가리킴
                }
    
     ```
### 8.5 프로그램의 평가와 실행 과정
  - 실행 가능한 코드  
    자바스크립트 엔진이 실행 가능한 코드를 만나면 그 코드를 평가해서 실행 문맥으로 만듦  
    
    실행 가능한 코드 유형  
      - 전역함수 (전역 객체 Window 아래에 정의된 함수)   
      - 함수 코드   
      - eval 코드 (eval 함수) : 렉시컬 환경이 아니라 별도의 동적 환경에서 실행(책에서 다루지 않음)  
      
   - 실행 문맥의 구성  
     실행 문맥은 실행 가능한 코드가 실제로 실행되고 관리되는 영역으로 실행에 필요한 모든 정보를 컴포넌트 여러 개가 나누어 관리하도록 만들어짐  
     
     주요 컴포넌트 
     - 렉시컬 환경 컴포넌트(Lexical Environment) - 렉시컬 환경 타입의 컴포넌트
     - 변수 환경 컴포넌트(Variable Environment) - 렉시컬 환경 타입의 컴포넌트
     - 디스 바인딩 컴포넌트(This Binding)
  
  - 렉시컬 환경 컴포넌트의 구성
    - 렉시컬 환경 컴포넌트  
        - 자바스크립트 엔진이 자바스크립트 코드를 실행하기 위해 자원을 모아둔 곳  
          함수 또는 블록의 유효 범위 안에 있는 식별자와 그 결괏값이 저장되는 곳    
        - 환경 레코드와 외부 렉시컬 환경 참조 컴포넌트로 구성되어 있음
            - 환경 레코드(Environment Record) : 유효 범위 안에 포함된 식별자를 기록하고 실행하는 영역  
                            자바스크립트 엔진이 유효 범위 안에 있는 식별자와 그 식별자가 가리키는 값을 키와 값의 쌍으로 바인드해서 환경 레코드에 기록
            - 외부 렉시컬 환경 참조(Outer Lexical Environment Reference) : 함수를 둘러싸고 있는 코드가 속한 렉시컬 환경 컴포넌트의 참조가 저장됨  
                                      중첩된 함수 안에서 바깥 코드에 정의된 변수를 읽거나 써야할 때, 자바스크립트 엔진은 외부 렉시컬 환경 참조를 따라 한 단계씩 렉시컬 환경을 거슬러 올라가서 그 변수를 검색함<!--20210107 기록 마침
       node js를 공부하며 렉시컬이라는 용어에 대해 들어봤었는데, 이번 기회에 자세히 공부할 수 있을 것 같다-->     
     - 환경 레코드의 구성  <!--20210108 기록 시작 -->
       - 렉시컬 환경 안의 식별자와 그 식별자가 가리키는 값의 묶음이 실제로 저장되는 영역  
       - 선언적 환경 레코드와 객체 환경 레코드로 구성되어 있음  
          - 선언적 환경 레코드(Declarative Environment Record) : 실제로 함수와 변수, catch문의 식별자와 실행 결과가 저장되는 영역(식별자와 그 실행 결과를 키와 값의 쌍으로 관리)  
          - 객체 환경 레코드(Object Environment Record) : 실행 문맥 외부에 별도로 저장된 객체의 참조에서 데이터를 읽거나 씀  
   
  - 전역 환경과 전역 객체의 생성  
    - 자바스크립트 인터프리터는 시작하자마자 렉시컬 환경 타입의 전역 환경을 생성함  
    - 웹 브라우저에 내장된 자바스크립트 인터프리터는 새로운 웹 페이지를 읽어 들인 후 전역 환경, 전역 객체를 생성하고 전역 환경의 객체 환경 레코드에 전역 객체의 참조를 대입함  
    - 최상위 레벨의 this는 전역 객체를 가리킴  
    - 웹 브라우저 자바스크립트 실행 환경에서는 **객체 환경 레코드**의 bindObject 프로퍼티에 전역 객체 Window의 참조가 할당됨  
    - 전역 환경 외부에는 다른 렉시컬 환경이 없으므로 **외부 렉시컬 환경 참조**에는 null이 할당됨  
    - 전역 실행 문맥의 **디스 바인딩 컴포넌트**에도 Window 참조가 할당됨  
  
  <!--20210108 기록 마침 
      오늘 너무 피곤한 나머지 저녁에 잠들어서 공부를 제대로 못했다.. 어려운 내용이다보니 공부가 조금 더 필요할 것 같다.-->
  <!--20210109 기록 시작-->
  - 프로그램 평가와 전역 변수 (전역 환경과 전역 객체를 생성한 후, 자바스크립트 프로그램을 읽어들이고 평가함)
      - 최상위 레벨에 var문으로 작성한 전역 변수 : 전역 환경의 환경 레코드(객체 환경 레코드)의 프로퍼티로 추가됨. 그 프로퍼티 이름은 식별자 이름이 되고, 프로퍼티 값은 undefined가 됨  
      - 최상위 레벨에 작성된 함수 선언문 : 함수 객체로 생성해서 전역 환경의 환경 레코드(객체 환경 레코드)에 프로퍼티로 기록  <!--20210109 기록 마침 --><!--20210110 기록 시작-->  
        (var문과 함수 선언문으로 선언한 전역 변수는 [[Configuable]] 속성이 false로 설정되어 있어서 delete 연산자로 삭제할 수 없음)
 
  - 프로그램 실행과 실맹 문맥 (프로그램이 평가된 후에 프로그램이 실행되며, 프로그램은 실행 문맥 안에서 실행됨)  
    - 실행 문맥은 **스택**이라는 구조로 관리됨  
      가장 먼저 실행하는 코드는 전역 코드이며, 이 때문에 스택의 맨 아랫부분에는 전역 코드를 실행하기 위한 실행 문맥이 있음  
      전역 코드 안에서 함수를 실행하면 실행 문맥을 push하고, 작업이 끝나고 함수를 호출한 부분으로 제어권이 돌아오면 스택에서 pop함  
        - 이때 실행하는 함수가 중첩 함수이면 중첩 함수의 실행 문맥을 새로 만들어서 스택에 push함
        - 재귀 호출한 함수도 호출될 때마다 스택에 push 됨
   
   - 자바스크립트는 싱글 스레드
     자바스크립트는 작업을 싱글 스레드로 처리함  
      - 싱글 스레드 : 프로그램 한 개의 처리 흐름으로 프로그램을 순차적으로 실행하는 방법    
      - 멀티 스레드 : 프로그램 여러 개의 처리 흐름으로 동시에 작업을 여러 개 병렬로 실행하는 방법  
     자바스크립트에서는 호출 스택에 쌓인 실행 문맥을 위에서부터 아래로 차례차례 실행해 나가며, 실행 문맥 하나의 작업이 끝나고 나면 pop을 하고 다음 실행 문맥을 실행함  
     실행 문맥 단위의 작업을 차례대로 실행하므로 실행 문맥 하나의 작업이 끝날 때까지 또 다른 실행 문맥의 작업을 실행하지 않음
  <!--20210110 기록 마침-->    <!--20210111 기록 시작-->
  
   - 환경 레코드와 지역 변수
      함수를 호출하면 현재 실행 중인 코드의 작업을 멈추고 실행 문맥 영역을 생성함 -> 프로그램의 실행 흐름이 그 실행 문맥으로 이동 -> 함수 실행 문맥이 호출 스택에 push 되고 실행문맥 안에 렉시컬 환경 컴포넌트를 생성(렉시컬 환경 컴포넌트는 환경 레코드를 가지고 있으며, 환경 레코드 안에 그 함수 안에서 선언된 중첩 함수의 참조와 변수 기록) -> 디스 바인딩 컴포넌트에 그 함수를 호출한 객체의 잠초를 저장하고 this 값으로 결정 -> 함수 안의 코드가 순서대로 실행됨 -> 함수가 종료되어 제어권이 호출한 코드로 돌아가면 일반적으로 실행 문맥과 함께 그 안에 있는 렉시컬 환경 컴포넌트가 메모리에서 지워짐  
   
   - this 값
      함수가 호출되어 실행되는 시점에 this 값이 결정됨  
      
      ```javascript
      var tom = {
                  name : "Tom",
                  sayHello : function(){
                    console.log("Hello! "+ this.name);
                  }
                }
      tom.sayHello(); //Hello! Tom
      
      var hyuk = {name : "Hyuk"};
      hyuk.sayHello = tom.sayHello; //함수를 이름으로 참조해서 실행함. this는 hyuk을 가리키고 있음
      
      hyuk.sayHello(); //Hello! Hyuk
      ```
  <!--20210111 기록 마침
      오늘 드디어 앞의 Lexical Environment 내용을 복습했다. 한번 더 읽어보니 정리가 되는 느낌이었다.-->    
  <!-- 20210112 기록 시작-->
  - 식별자 결정 (유효 범위 체인)  
    식별자 결정? 변수가 어디에서 선언된 변수인지 결정하는 작업 (규칙으로는 좀 더 안쪽 코드에 있는 변수를 사용함)  
                      
    ```javascript
      var a = "A";
      function f(){
        var b = "B";
        function g(){
          var c = "C";
          console.log(a+b+c);
        } 
        g();
      }
     f(); //ABC
    ```
    배경 지식 정리
    - 속박 변수 : 함수의 인수와 지역 변수  
    - 자유 변수 : 속박 변수 외의 변수
    - 닫힌 함수 : 속박 변수만 포함한 함수
    - 열린 함수 : 자유 변수를 가지고 있는 함수
    
    함수 g안에서 변수 a,b,c의 식별자를 찾는 방법
    - 속박 변수 c  
      변수 c는 함수 g안에서 선언된 속박 변수이므로 함수 g의 환경 레코드에서 찾을 수 있음. 따라서 변수 c는 이것으로 결정함  
    - 자유 변수 b  
      변수 b는 함수 g의 밖에서 선언된 자유 변수로, 변수 b는 함수 g가 속한 실행 문맥의 환경 레코드 안에서 찾을 수 없음->  
      실행 문맥 속에 있는 외부 렉시컬 환경 참조를 따라 함수 g를 호출한 함수인 f가 속한 실행 문맥의 환경 레코드를 검색함 -> 변수 b를 찾고 식별자를 이것으로 결정함  
    - 자유 변수 a  
      변수 a는 함수 g의 밖에서 선언된 자유 변수로, 변수 a는 g가 속한 실행 문맥의 환경 레코드 안에서 찾을 수 없음->  
      실행 문맥 속에 있는 외부 렉시컬 환경 참조를 따라 함수 g를 호출한 함수인 f의 환경 레코드 내부를 검사함(못찾음)->  
      외부 렉시컬 환경 참조를 따라 한 단계 더 거슬러 올라가 함수 f의 전역 실행 문맥 소겡 있는 환경 레코드 내부를 검색 -> 변수 a를 찾고 식별자를 이것으로 결정함  
    
    정리
    - 식별자 결정 : 현재의 유효 범위 안에 없는 식별자를 찾을 때 호출자의 렉시컬 환경에 속한 외부 렉시컬 환경의 참조를 따라 찾아가는 방식  
                    (이러한 논리적인 연결고리를 ECMAScript 3 기준에서는 스코프 체인이라고 함)
    <!--20210112 기록 마침
        외부 렉시컬 환경의 참조가 존재하는 이유에 대해서 알게 되었다.-->
    <!--20210113 기록 시작-->
  - 가비지 컬렉션(garbage collection)  
    가비지 컬렉션 : 사용하지 않는 객체의 메모리 영역을 가비지 컬렉터가 자동으로 해제하는 것  
                    사용하지 않는 객체는 다른 객체의 프로퍼티와 변수가 참조하지 않는 객체를 말함  
    ```javascript
    var p = {x:1, y:2};
    p = null; // p가 객체를 참조하지 않게 됨. 가비지 컬렉터는 객체 {x:1, y:2}를 메모리에서 해제함
    ```
    예전엔 가비지 컬렉션에 참조 카운터 방식을 사용하였지만, 현재는 마크 앤 스윕 알고리즘을 사용함  
      - 참조 카운터 방식 : 참조하는 객체 개수를 세어 참조하는 객체 개수가 0이 되었을 때 메모리에서 해제하는 방식  
                      이 방식은 고립된 순환 참조가 발생했을 때 메모리 누수가 발생한다는 단점이 있음  
      - 마크 앤 스윕 알고리즘 : 전역 객체가 참조할 수 없는 객체를 검색하고 해당하는 객체가 있다면 필요없는 객체라고 판단하여 메모리에서 해제하는 방식
  <!--20210113 기록 마침
      가비지 컬렉션 동작 방법에 대해 알게되었다-->
      
  <!--20210114 기록 시작-->
### 8.6 클로저  
  - 클로저 : 자기 자신이 정의된 환경에서 함수 안에 있는 자유 변수의 식별자 결정을 실행하는 함수와 그 기능을 구현한 자료 구조의 모음    
  
  - 아래 예제를 이해하기 위한 포인트  
      1. 외부 함수 makeCounter 는 중첩 함수 f의 참조를 반환함  
      2. 중첩 함수 f는 외부 함수 makeCounter의 지역 변수 count를 참조함  
    
      ```javascript
        function makeCounter(){
          var count = 0;
          return f;
          function f(){
            return count++;
          }
        }
        var counter = makeCounter();
      ```
     1로 인해 f의 함수 객체를 전역변수 couter가 참조함
     2로 인해 makeCounter의 렉시컬 환경 컴포넌트를 f의 함수 객체가 참조하고,  
     그 결과 makeCounter의 렉시컬 환경 컴포넌트를 전역 변수 counter가 간접적으로 참조하게 되어 가비지 컬렉션 대상이 되지 않음  
  
     - 클로저는 캡슐화된 객체?  
        위의 예에서 변수 count는 클로저의 내부 상태로서 저장되고, 지역 변수이기 때문에 함수 바깥에서 읽거나 쓸 수 없음  
        함수 f가 클로저의 내부 상태를 바꾸는 메서드 역할을 하고 있음 

      ```javascript
        var counter1 = makeCounter();
        var counter2 = makeCounter();

        console.log(counter1()); //0
        console.log(counter2()); //0
      ```

      makeCounter()를 호출할 때마다 makeCounter의 렉시컬 환경 컴포넌트가 새로 생성되기 때문에 콘솔에 찍히는 counter1(), counter2()값이 모두 0이다.
  <!--20210114 기록 마침 클로저는 조금 더 공부가 필요할 것 같다-->
  <!--20210115 기록 시작-->
### 8.7 이름 공간
- 이름 공간? 변수 이름과 함수 이름을 한 곳에 모아 두어 이름 충돌을 미리 방지하고, 변수와 함수를 쉽게 가져다 쓸 수 있게 만든 메커니즘  

- 전역 이름 공간의 오염  
  전역 변수와 전역 함수를 전역 객체에 선언하는 행위를 가리켜 '전역 유효 범위를 오염시킨다'고 함. 전역 유효 범위가 오염되면 변수 이름과 함수 이름이 겹칠 수 있음  
  전역 유효 범위 안에서 이름이 같은 변수나 함수를 선언하면 자바스크립트 엔진이 그 프로그램의 위로 끌어올려서 변수 또는 함수를 하나만 생성함 -> 프로그램 에러 유발함  

- 전역 변수의 오염을 방지하기 위한 기법
    - 객체를 이름 공간으로 활용하기
      객체를 값으로 가지는 전역 변수를 하나 생성하고, 그 객체에 프로그램 전체에서 사용하는 모든 변수와 함수를 프로퍼티로 정의함
      ```javascript
        var obj1 = obj1||{};
        
        obj1.name = "Amy";
        obj.printName = function(){..};
       ```
      위와 같이 작성하면 obj1이 이미 정의되어 있을 때는 그것을 사용하고, 그렇지 않으면 객체를 obj1에 할당함  
     
     - 함수를 이름 공간으로 활용하기  
       함수 안에 선언된 변수의 유효 범위가 함수 내부라는 점을 활용하면 함수를 이름 공간으로 활용 가능함  
       ```javascript
        var x = "global x";
        (function(){
          var x = "local x";
          var y = "local y";
        })();
        
        console.log(x);// global x
        console.log(y);// y is not defined
       ```
       즉시 실행 함수 내부에서 선언한 변수인 x와 y는 지역 변수 이므로 전역 변수와 이름이 충돌하지 않음  
       일시적인 처리를 수행할 때 즉시 실행 함수를 사용하면 전역 유효 공간을 오염시키지 않고 실행 가능함(라이브러리나 모듈을 즉시 실행 함수로 정의하면 충돌을 피할 수 있음)  
  
### 8.8 객체로서의 함수
- 함수는 객체
  자바스크립트 함수는 객체이며, 다른 객체와 마찬가지로 다음과 같은 특징이 있음
    - 함수는 변수나 프로퍼티나 배열 요소에 대입할 수 있음  
    - 함수는 함수의 인수로 사용할 수 있음  
    - 함수는 함수의 반환값으로 사용할 수 있음  
    - 함수는 프로퍼티와 메서드를 가질 수 있음  
    - 함수는 이름 없는 리터럴로 표현할 수 있음(익명 함수)   
    - 함수는 동적으로 생성할 수 있음   
  위와 같은 작업이 가능한 객체를 일급 객체라 하며, 일급 객체인 함수는 일급 함수라고 함  
 
- 함수의 프로퍼티  
  |프로퍼티 이름|설명|
  |:------------|:--|
  |caller|현재 실행 중인 함수를 호출한 함수|
  |length|함수의 인자 개수|
  |name|함수를 표시할 때 사용하는 이름|
  |prototype|프로토타입 객체의 참조|
  
  Function.prototype의 프로퍼티  
  함수는 Function 생성자의 prototype 객체의 프로퍼티를 상속 받아 사용함   
  |프로퍼티 이름|설명|
  |:------------|:--|
  |apply()|선택한 this와 인수를 사용하여 함수 호출. 인수는 배열 객체|
  |bind()|선택한 this와 인수를 적용한 새롱누 함수를 반환|
  |call()|선택한 this와 인수를 사용하여 함수 호출. 인수는 쉼표로 구분한 값|
  |constructor|Function 생성자의 참조|
  |toString()|함수의 소스 코드를 문자열로 만들어 반환|
  <!--20210115 기록 마침 진도가 잘 나가지 않아 답답하다..-->  
 
 <!--20210116 기록 시작-->
- apply와 call 메서드  
  apply와 call 메서드는 this값과 함수의 인수를 사용하여 함수를 실행하는 메서드이며, 둘의 동작은 본질적으로 같음  
  차이점은 함수에 인수를 넘길때 apply는 배열로 넘기고, call은 쉼표로 구분한 인수를 넘김  
  ```javascript
    function say(greetings, honorifics){
      console.log(greetings+ " " + honorifics + this.name);
    }
    var amy = {name : "Amy"};
    
    say.apply(amy, ["Hello","Ms."]); //Hello Ms.Amy
    say.call(amy, "Hello", "Ms."); //Hello Ms.Amy
  ```
  참고 : apply 메서드의 두번째 인수에 유사 배열 객체를 넘겨도 동작함   

- bind 메서드  
  객체에 함수를 바인드함  
 ```javascript
  function say(greetings, honorifics){
      console.log(greetings+ " " + honorifics + this.name);
  }
  var amy = {name : "Amy"};
  var sayToAmy = say.bind(amy);
  sayToAmy("Hello", "Ms."); //Hello Ms.Amy
 ```
 sayToAmy 함수를 호출하면 this는 항상 객체 amy를 가리킴  
 say.bind(amy)는 amy 객체를 함수 say의 this로 설정한 새로운 함수를 만들어 반환함  
 
### 8.9 고차 함수
  - 고차 함수? 함수를 인수로 받는 함수 또는 함수를 반환하는 함수. 처리 패턴이 같은 작업을 추상화하여 하나로 합칠 수 있음  
  
  - 패턴이 같은 작업을 고차 함수로 정리하는 예
    
    - 수열을 표시하는 프로그램  
      ```javascript
        digits = "";
        for(var i =0; i<10; i++){
          digits+=i; 
        }
        console.log(digits);
      ```
    - 무작위 알파벳 문자열을 표시하는 프로그램
      ```javascript
        randomChars = "";
        for(var i =0; i<8; i++){
          randomChars+= String.fromCharCode(Math.floor(Math.random()*26)+"a".charCodeAt(0));
        }
        console.log(randomChars);
      ```
    - 위 두 함수와 같은 작업을 하는 고차 함수 생성하기  
      ```javascript
        function joinStrings(n,f){
          var s = "";
          for(var i =0; i<n; i++){
            s+=f(i);
          }
          return s;
        }
        
        var digits = joinStrings(10, function(i){return i;});
        var randomChars = joinStrings(8, function(i){return String.fromCharCode(Math.floor(Math.random()*26)+"a".charCodeAt(0));});
        
        console.log(digits);
        console.log(randomChars);
      ```
- 메모이제이션  
  메모이제이션? 함수를 호출했을 때의 인수와 반환값을 한쌍으로 만들어 저장해두는 기법   
                한 번 건네받은 이력이 있는 인수의 결괏값으로 저장해 둔 결과를 반환하여 추가적인 계산을 생략할 수 있음           
   <!--20210116 기록 마침 자바스크립트로 고차 함수까지 구현해 볼 생각도 하지 않았었는데 좋은 경험인 것 같다-->
   <!--20210117 기록 시작--> 
    ```javascript
     function memorize(f){
        var cache = {};
        return function(x){
          if(cache[x]==undefined) cache[x] = f(x);
          return cache[x];
        };
      }
     var fibonacci = memorize(function(n){
        if(n<2) return n;
        return fibonacci(n-1)+fibonacci(n-2);
     });
     
     for(var i =0; i<=20; i++){
      console.log(fibonacci(i));
     }
      
    ```
    메모이제이션 함수 memorize는 피보나치수열을 구하는 등의 재귀 함수를 대상으로 처리 속도를 높일 때 유용하게 사용할 수 있음  
  
- 함수의 합성   
  함수 f(x)와 g(x)가 있을 때 함수 f(g(x))를 f와 g의 합성 함수라고 함  
  ```javascript
    function compose(f,g){
      return function(x){
        return f(g(x));
      };
    }
    
    var square = function(x){return x*x;};
    var add1 = function(x){return x+1;};
    var c = compose(square,add1);
    console.log(c(3)); //16
  ```

- 부분 적용  
  인수를 여러 개 받는 함수의 몇몇 인수를 상수로 지정해서 새로운 함수를 생성하는 기법  
  ```javascript
    function product(x,y){return x*y;}
    
    product2 = function(y){ return product(2,y);}; //bind메서드를 사용하여 product2 = product.bind(null,2)로 바꿔쓸 수 있음
    product2(3); //6
    
  ```
  bind 함수를 사용하여 product2를 product.bind(null,2)로 바꿔 쓸 수 있음. 이 때 bind 메서드의 두 번째 이후 인수가 원래 함수의 인수에 왼쪽부터 할당됨  
  
  - 부분 적용된 함수를 반환하는 함수
    ```javascript
      function partial(f){
        var args = arguments;
        return function(){
          var a = Array.prototype.slice.call(args,1);
          for(var i =0, j=0; i<a.length; i++){
            // 외부 함수의 두 번째 인수가 undefined면 이 함수의 arguments를 사용한다
            if(a[i] == undefined) a[i] = arguments[j++]; 
          }
          return f.apply(this,a);
        };
      }
      var square = partial(Math.pow,undefined,2);
      square(3);//9
    ```
  <!--20210117 기록 마침 위의 예제에 대해 조금 더 공부해야겠다-->
<!--20210118 기록 시작-->
- 커링  
  인수를 두 개 이상 받는 함수를 분해하여 인수가 하나인 함수의 중첩 함수로 변환하는 작업  
  ```javascript
    var pow = function(exponent){
      return function(base){
        return Math.pow(base,exponent);
      };
    };
    
    var square = pow(2);
    var sqrt = pow(.5);
  ```
  커링된 함수의 가장 큰 장점은 부분 적용한 함수를 쉽게 만들어 낼 수 있다는 점  
  
- 콜백 함수  
  다른 함수에 인수로 넘겨지는 함수  
  
- ECMAScript 6부터 추가된 함수의 기능  
  화살표 함수, 나머지 매개변수, 인수의 기본값, 이터레이터, 제너레이터, 템플릿 리터럴의 태그 함수  
  
  - 화살표 함수 표현식으로 함수 정의  
    - 화살표 함수 표현식은 함수 리터럴(익명 함수)의 단축 표현  
      ```javascript
        //기존의 함수 리터럴로 함수 정의
        var square = function(x){return x*x;};
        //화살표 함수 표현식
        var square = (x)=> {return x*x;};

      ```
    
    - 인수가 여러 개 있으면 인수와 인수를 쉼표로 구분함. 인수가 하나만 있으면 인수를 묶는 괄호를 생략할 수 있으며, 인수가 없는 경우엔 괄호를 생략할 수 없음  
      ```javascript
        var f = (a,b,c) => {return a*b*c;};

        var square = x => {return x*x;};

        var f = () =>{};
      ```
    
    - 함수 몸통 안의 문장이 return 뿐이면 중괄호와 return 키워드 생략 가능  
       ```javascript
        var square = x => x*x;
         
        //return 문장만 있더라도 반환 값이 객체 리터럴이면 객체 리터럴을 그룹 연산자인 ()로 묶어야 함
        var f = (a,b) => ({x : a, y :b});
       ```
    
    - 화살표 함수도 즉시 실행 함수로 사용할 수 있음  
      ```javascript
        (x=> x*x)(3) //9
      
      ```
  - 함수 리터럴과 화살표 함수의 차이점  
    - this의 값이 함수를 정의할 때 결정됨  
      함수 리터럴로 정의한 함수의 this 값은 함수를 호출할 때 결정됨  
      화살표 함수의 this 값은 함수를 정의할 때 결정됨. 즉, 화살표 함수 바깥의 this 값이 화살표 함수의 this 값이 됨    
      ```javascript
        var obj = {
                    say : function(){
                      console.log(this);
                      var f = function(){console.log(this)};
                      f();
                      var g = ()=> console.log(this);
                      g();
                    }
                  };
         obj.say();         
      
      ```
      화살표 함수는 call이나 apply 메서드를 사용하여 this를 바꾸어 호출해도 this 값이 바뀌지 않는다  
      
    - arguments 변수가 없음  
      화살표 함수 안에는 arguments 변수가 정의되어 있지 않으므로 사용할 수 없음  
    
    - 생성자로 사용할 수 없음  
      화살표 함수 앞에 new 연산자를 붙여서 호출할 수 없음  
    
    - yield 키워드를 사용할 수 없음  
      화살표 함수 안에서는 yield 키워드를 사용할 수 없음. 따라서 제너레이터로 사용할 수 없음  
<!--20210118 기록 마침 함수 리터럴은 함수가 호출될 때 this 값이 결정된다는 것을 앞에서 봤을 때는 당연하게 생각하고 넘어갔었는데, 화살표 함수에서 다시 보니 새롭다..--> 

<!--20210119 기록 시작-->
- 인수에 추가된 기능  
  - 나머지 매개변수  
    ECMAScript 6부터는 함수의 인자가 들어가는 부분에 ...을 입력하면 그만큼의 인수를 배열로 받을 수 있음. 이 방법을 사용하면 화살표 함수에서도 가변 인수 이용 가능함    
    ... 으로 표현한 인자를 가리켜 나머지 매개변수라고 부름    
    
    ```javascript
      function f(a,b,...args){
        console.log(a,b, args);
      }
      
      f(1,2,3,4,5,6,7); //1 2 [3,4,5,6,7]
    ```
     
  - 인수의 기본값  
    ECMAScript 6부터는 함수의 인자에 대입 연산자를 사용해서 기본값을 설정할 수 있음  
    ```javascript
      function multiply(a, b=1){
        return a*b;
      }
      multiply(3); //3
      multiply(3,2); //6
      
      function add(a, b=a+1){
        return a+b;
      }
      add(1); //3
      add(2,1); //3
      
    ```
    
- 이터레이터와 for/of 문  
  - 이터레이션  
    반복 처리라는 뜻으로 데이터 안의 요소를 연속적으로 꺼내는 행위  
    
  - 이터레이터  
    반복 처리가 가능한 객체  
      - 일반적으로 다음 두 가지 항목을 만족하는 객체  
        : next 메서드를 가짐  
        : next 메서드의 반환값은 value, done 프로퍼티를 가짐 (value는 꺼낸 값이 저장되고 done에는 반복이 끝났는지를 뜻하는 논리값이 저장됨)  
    
    ```javascript
      //참고. 배열의 Symbol.iterator 메서드는 이터레이터를 반환하는 함수
      var a = [5,4,3];
      var iter = a[Symbol.iterator]();
      
      console.log(iter.next()); // {value : 5, done : false}
      console.log(iter.next()); // {value : 4, done : false}
      console.log(iter.next()); // {value : 3, done : false}
      console.log(iter.next()); // {value : undefined, done : true}
      console.log(iter.next()); // {value : undefined, done : true}
    
    ```
    iter의 next 메서드를 호출할 때마다 iterator result라는 객체가 반환됨(iterator result는 value와 done 프로퍼티를 갖는 객체)  
    참고. Array, String, TypedArray, Map, Set 생성자로 생성한 내장 객체는 처음부터 Symbol.iterator 메서드를 내장하고 있음  
    
  - 반복 가능한 객체와 for/of 문  
    이터레이터를 사용해서 이터레이션을 하려면 개발자가 직접 처리를 해줘야할 부분이 있음 (iterator result의 done 프로퍼티가 true이면.. 등등의 처리)  
    for/of 문을 사용하면 자동으로 반복 처리하도록 할 수 있음  
    
    - iterator 사용
      ```javascript
        var a = [3,2,1];
        var iter = a[Symbol.iterator]();
        while(true){
          var iteratorResult = iter.next();
          if(iteratorResult.done) break;
          var v = iteratorResult.value;
          console.log(v);
        }
      ```
    
    - for/of 문 사용
      ```javascript
        var a = [3,2,1];
        for(var v of a) console.log(v);
      ```
    for/of 문은 a 이터레이터의 next 메서드를 순회할 때마다 매번 호출함. iterator result의 done 프로퍼티 값이 false가 아닌 동안은 value 프로퍼티 값을 변수 v에 대입함  
    - 일반적으로 for/of 문은 다음 두 가지 조건을 만족하는 객체를 처리함  
      : Symbol.iterator 메서드를 가지고 있음  
      : Symbol.iterator 메서드는 반환값으로 이터레이터를 반환함  
   <!--20210119 기록 마침 js에도 iterator가 있다는 걸.. 알게되었다-->
   
   <!--20210120 기록 시작-->
- 제너레이터  
  : 반복 가능한 이터레이터를 값으로 반환하는 함수    
  : 작업의 일시 정지와 재시작이 가능하며 자신의 상태를 관리하는 함수  
  
  - 제너레이터의 정의와 실행  
    제너레이터는 function* 문으로 정의한 함수이며, 하나 이상의 yield 표현식을 포함함  
    
    ```javascript
      function* gen(){
        yield 1;
        yield 2;
        yield 3;
      }
      var iter = gen();
      console.log(iter.next()); // {value: 1, done: false}
      console.log(iter.next()); // {value: 2, done: false}
      console.log(iter.next()); // {value: 3, done: false}
      console.log(iter.next()); // {value: undefined, done: true}
    
    ```
    - 제너레이터 함수인 gen은 호출해도 바로 실행되지 않고, 이터레이터를 반환함  
    - 이터레이터의 next 메서드가 호출되면 함수의 첫 번째 yield 연산자의 위치까지 실행하며 결괏값으로 Iterator Result를 반환함   
      Iterater Result의 value 프로퍼티 값으로 yield 표현식에 지정한 값을 저장하고, done 프로퍼티 값으로 제너레이터 함수 끝까지 실행했는지 저장함  
    - 또 next 메서드가 호출되면 일시 정지한 위치에 있는 처리를 재개하고, 다음 번 yield 연산자의 위치까지 실행함  
      마찬가지로 Iterator Result를 반환하고 처리를 일시정지함
   
   즉, 제너레이터 함수의 yield는 프로그램이 일시적으로 정지하는 위치임. 제너레이터로 생성한 이터레이터의 next 메서드는 제너레이터 함수의 상태를 일시 정지 상태에서 실행 상태로 바꾸는 역할을 함  
   
  - 제너레이터 종료하기  
    제너레이터로 생성한 이터레이터의 return 메서드를 실행하면 인수 값을 반환한 후에 제너레이터를 종료함  
     ```javascript
        function* g(){
          yield 1;
          yield 2;
          yield 3;
        }
        
        var iter = g();
        iter.next(); // {value: 1, done: false}
        iter.return(10); // {value: 10, done: true}
        iter.next(); // {value: undefined, done: false}
     ```
    <!--20210120 기록 마침-->
    <!--20210121 기록 시작-->
    
  - 제너레이터에 예외 던지기  
    제너레이터로 생성한 이터레이터의 throw 메서드를 실행하면 예외를 제너레이터에 던질 수 있음. 제너레이터 예외는 일반적으로 try/catch문으로 받아서 처리함  
    
    ```javascript
      function* idMaker(){
        var count = 0;
        while(true){
          try{
            yield count++;
          } catch(e){
            console.log("Error");
          }
        }
      }
      
      var iter = idMaker();
      console.log(iter.next()); // {value: 0, done: false}
      console.log(iter.next()); // {value: 0, done: false}
      iter.throw(new Error());  // Error
                                 // {value: 3, done: false}
    
    ```
    
    <!--20210121 기록 마침-->
  <!--20210122 기록 시작-->
  - 반복 가능한 객체에 위임하기
    제너레이터 함수 안에서는 yield 표현식 외에도 yield* 표현식을 사용 가능함  
    yield* 에는 반복 가능한 객체를 지정하여 반복 가능한 객체에서 순차적으로 값을 꺼내 각각의 값에 yield를 적용함  
    ```javascript
      function* f(){
        yield "X";
        yield "Y"; 
      }
      function* g(){
        yield 0;
        yield* [2,4];
        yield* "AB";
        yield* f();
      }
      var iter = g();
      for(var v of iter) console.log(v);
      //0
      //2
      //4
      //A
      //B
      //X
      //Y
    
    ```
    <!--20210122 기록 마침-->
  <!--20210123 기록 시작--> 
- 템플릿 리터럴의 태그 함수    
  - 태그가 지정된 템플릿 리터럴   
    템플릿 리터럴 앞에 함수 이름을 적으면 템플릿 리터럴의 내용을 인수로 받는 함수를 호출할 수 있음  
     ```javascript
      func `${a}+${b} = ${a+b}`
     ```
     func 부분을 태그 함수라고 함   
     태그 함수의 첫 번째 인수는 문자열을 요소로 담은 배열이며, 이 배열의 요소는 템플릿 리터럴 안의 문자열을 ${...}를 기준으로 분할한 문자열임  
     두 번째 이후 인수로는 각 ${...} 안에 지정된 표현식을 평가한 값이 순서대로 들어감  
     ```javascript
      function list(){return arguments;}
      var t = list `a${1}b${2}c${3}`;
      console.log(t); // [["a","b","c",""],1,2,3]
     ```
     템플릿 리터럴의 시작 부분이 ${...}면 태그 함수의 첫 번째 인수인 배열의 첫 번째 요소로 빈 문자열이 들어옴. 끝 부분이 ${...}로 끝나면 태그의 첫 번째 인수인 배열의 마지막 요소로 빈 문자열이 들어옴  
  
  - 태그 함수의 첫 번째 인수  
    태그 함수의 첫 번째 인수는 callSite 객체라고 하며 다음과 같은 특징이 있음  
      - 동결되어 있음  
        첫 번째 인수는 동결된 객체로 읽기만 할 수 있음  
      - callSite 객체는 캐시됨  
        태그 함수는 이전에 처리했던 템플릿 리터럴 문자열을 만나면 캐시된 callSite 객체를 첫 번째 인수로 넘김  
      - raw 프로퍼티가 있음  
        raw 프로퍼티 값은 배열이며, 그 요소는 첫 번째 인수의 배열과 마찬가지로 템플릿 리터럴을 ${...}로 분할한 문자열임  
        첫 번째 인수의 배열에는 이스케이프된 문자열일 들어오지만 raw 프로퍼티에는 이스케이프되지 않은 문자열이 들어옴  
        ```javascript
          function tag(strings, ... values){
            console.log(strings); //["a↵", "b↵", "c", "", raw: Array(4)]
            console.log(strings.raw); //["a\n", "b\n", "c\n", ""]
          }
          
          tag `a\n${1}b\n${2}c\n${3}`;
        ```
       <!--20210123 기록 마침 드디어 8강이 끝났다...--> 
       
