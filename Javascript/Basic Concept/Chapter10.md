## 10. 배열의 다양한 기능    
### 10.1 배열의 메서드  
  배열의 메서드에 대한 자세한 내용은 다음 링크를 참고한다.  
    영어 버전 : <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>    
    한글 버전 : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array>  
    
  주요 메서드에 대해서만 알아보자  
  - 수정 메서드  
    - push 메서드  
      push 메서드는 배열 마지막에 하나 이상의 요소를 추가한 다음 그 배열의 길이를 반환함   
        ```javascript
          var a = [1,2,3];
          a.push(4,5,6); //6
          console.log(a);// [1, 2, 3, 4, 5, 6]
        ```      
     - pop 메서드  
        pop 메서드는 배열의 마지막 요소를 잘라내어 반환함  
        ```javascript
          var a = [1,2,3];
          a.pop(); // 3
          console.log(a); // [1, 2]
        ```
      
     - shift 메서드  
        shift 메서드는 배열의 첫 번째 요소를 제거한 후 모든 배열 요소를 왼쪽으로 이동 시킴(반환 값은 삭제된 요소의 값임)  
        ```javascript
          var a = [1,2,3];    
          a.shift(); //1
          console.log(a); //[2, 3]
        ```
        
      - unshift 메서드  
        unshift 메서드는 배열 앞부분에 요소를 한 개 이상 추가한 후 모든 배열 요소를 오른쪽으로 이동 시킴(반환 값은 그 배열의 길이)
        ```javascript
          var a = [1,2,3];
          a.unshift(0); //4
          console.log(a); // [0, 1, 2, 3]
        ```
        <!--중간커밋--><!--20210213 기록 시작-->
        
      - splice 메서드  
        splice 메서드는 특정 인덱스의 배열 요소를 갈아 끼울 때 사용하는 범용 메서드로, 요소를 끼워 넣기만 할 수도 있고 삭제만 할 수도 있음  
         - 첫 번째 인수  
           : 배열을 수정하기 시작할 위치를 가리키는 인덱스. 이 값이 배열 길이보다 크면 배열 마지막을 시작 위치로 하고, 음수이면 이 값에 배열의 길이를 더한 값을 시작 위치로 한다.  
         - 두 번째 인수  
           : 배열에서 삭제할 요소의 개수. 인수 값이 0이면 삭제하지 않고, 아무런 값을 넘기지 않으면 index 이후의 모든 배열 요소를 삭제한다.  
         - 세 번째 이후의 인수  
           : 배열에 삽입할 요소의 값을 쉼표로 구분해서 넘긴다. (생략 가능)  
        
        ```javascript
            var a = [1,2,3,4];
            a.splice(1,2,5,6,7); // [2, 3]  삭제된 요소를 반환  
            console.log(a); // [1, 5, 6, 7, 4]
            
            a.splice(4); // [4]
            console.log(a); //[1, 5, 6, 7]
            
            a.splice(1,0,2,3,4);
            console.log(a); //[1, 2, 3, 4, 5, 6, 7]
            
            a.splice(-3); // [5, 6, 7]
            console.log(a) //[1, 2, 3, 4]
        ```
        
     - sort 메서드  
       sort 메서드는 배열 안의 요소를 정렬함. 인수로는 비교를 담당하는 함수의 참조를 넘기며, 반환 값은 정렬된 배열이다.  
       ```javascript
        var a = [6,8,2,4,3,9,1,5,7];
        a.sort(function(a,b){
            return a-b;
        }); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
       ```
       비교 함수는 다음 규칙을 따라야 한다.  
        - f(a,b) < 0 이면 a를 b보다 작은 인덱스로 정렬  
        - f(a,b) == 0 이면 a와 b의 순서를 바꾸지 않음  
        - f(a,b) > 0 이면 b를 a보다 작은 인덱스로 정렬  
       
       비교 함수를 지정하지 않으면 배열의 요소를 문자열로 변환한 다음 사전 순으로 정렬함  
        
  - 접근자 메서드  
    - join 메서드  
      join 메서드는 배열의 모든 요소 값을 문자열로 바꾼 후에 인수로 받은 문자로 연결해서 반환함(요소 값이 null이나 undefined 인 경우 빈 문자로 간주함)  
       ```javascript
        var a = [1,2,3];
        a.join("*"); //"1*2*3"
       ```         
    
    - concat 메서드  
      concat 메서드는 인수로 받은 값을 그 배열의 요소로 추가해서 새로운 배열을 생성함  
      ```javascript
        var a = [1,2,3];
        a.concat([4,5,6]); //[1, 2, 3, 4, 5, 6]
        a.concat(7,8,[9,10],true); //[1, 2, 3, 7, 8, 9, 10, true] 값을 여러 개 추가할 때는 쉼표로 구분함  
      ```
      concat 메서드는 대상 배열과 인수 값을 연결할 때 얕은 복사를 사용함. 따라서 원본 객체를 수정하면 concat 메서드가 반환한 배열의 요소도 함께 바뀜  
    
    - slice 메서드  
      slice 메서드는 배열의 일부 요소를 제거한 새로운 배열을 반환함  
        - 첫 번째 인수 : 요소를 꺼낼 시작 위치를 뜻하는 인덱스  
        - 두 번째 인수 : 요소를 꺼낼 마지막 위치를 뜻하는 인덱스. 해당 값의 바로 이전까지 잘라낸다.   
                        이 값이 음수이면 배열의 길이를 더한 값을 마지막 위치로 간주함. 생략하면 배열의 끝으로 간주함      
      
      ```javascript
        var a = [1,2,3,4,5];
        a.slice(1,3); // [2, 3]
        a.slice(3); // [4, 5]
        a.slice(1,-1); // [2, 3, 4]
      ```
     
    - indexOf, lastIndexOf 메서드  
      indexOf, lastIndexOf 메서드는 배열 안에서 인수로 지정한 값을 검색해서 가장 먼저 찾은 요소의 인덱스를 반환함  
      indexOf 메서드는 앞에서부터, lastIndexOf 메서드는 뒤에서부터 검색을 시작함  
        - 첫 번째 인수 : 검색할 값  
        - 두 번째 인수 : 검색을 시작할 인덱스. 생략하면 0으로 간주하고, 배열의 길이가 넘는 값을 입력하면 검색하지 않는다.  
                        값이 음수이면 배열의 길이를 더한 값을 시작 위치로 간주한다.  
      ```javascript
        var a = [1,2,3,4,3,2,1];
        a.indexOf(3); //2
        a.lastIndexOf(3); //4
      ```
       
    - toString, toLocaleString 메서드  
      toString, toLocaleString 메서드는 배열의 요소를 문자열로 변환하여 쉼표로 연결한 문자열을 반환함  
      toLocaleString 메서드는 해당 지역에 맞는 언어로 번역한 문자열로 반환함  
      ```javascript
        [1,2,3, date].toString(); //"1,2,3,"
        console.log([1,2,3, date].toString()); //1,2,3,Sat Feb 13 2021 22:03:09 GMT+0900
        console.log([1,2,3, date].toLocaleString()); // 1,2,3,2021. 2. 13. 오후 10:03:09
        
        var date = new Date();
      ```
      
  - 반복 메서드  
    - 반복 메서드의 인수로 전달한 함수는 배열의 요소마다 호출됨  
    - 반복 함수 대부분은 첫 번째 인수로 함수를 받으며, 이 함수에는 인수 세 개가 전달됨
        - 첫 번째 인수 : 현재 처리하고 있는 배열 요소의 값  
        - 두 번째 인수 : 현재 처리하고 있는 배열 요소의 인덱스  
        - 세 번째 인수 : 메서드가 적용되는 배열의 참조  
    
    - forEach 메서드  
      forEach 메서드는 인수로 받은 함수를 배열의 요소별로 한 번씩 실행함. 인수로 받은 함수에는 인수 세 개(value, index, array)가 전달됨  
      ```javascript
        var a = [1,2,3,4,5];
        var sum = 0;
        a.forEach(function(value){
            sum+= value;
        });
        console.log(sum); //15
      ```
    
    - map 메서드  
      map 메서드는 인수로 받은 함수를 배열의 요소별로 한 번씩 실행하며, 마지막에는 그 함수가 반환한 값으로 새로운 배열을 생성함.  
      인수로 넘긴 함수에는 인수 세 개(value, index, array)가 전달됨  
      ```javascript
        var a = [1,2,3,4,5];
        var b = a.map(function(value){
            return 2*value;
        });
        console.log(b); //[2, 4, 6, 8, 10]
        
      ```
   
    - reduce 메서드  
      reduce 메서드는 배열의 첫 번째 요소부터 마지막 요소까지 합성 곱 처리를 함  
      합성 곱 처리? 배열 요소 하나를 함수로 처리한 후에 그 반환 값을 다음 번 요소를 처리할 때 함수의 입력 값으로 사용하는 처리 방법  
      
      <!--20210213 기록 마침--> <!--20210214 기록 시작-->
      - reduce 메서드의 인수  
        callback : 함성 곱을 하는 함수  
        initial : callback이 처음호출되었을 떄의 첫번쨰 인수의 값 (생략 가능)  
        
        - callback 함수의 인수  
          pre : 이전 요소를 처리한 함수의 반환값 또는 initial 또는 첫 번째 요소의 값  
          value : 현재 처리하는 배열 요소의 값  
          index : 현재 처리하는 배열 요소의 인덱스  
          array : 메서드를 적용 중인 배열의 참조
          
        - initial 지정 여부에 따른 callback 인수의 값  
          initial 지정함 : pre는 initial 의 값, value는 배열의 첫 번째 요소, index는 0  
          initial 지정안함 : pre는 배열의 첫 번째 요소의 값, value는 배열의 두 번째 요소의 값, index는 1  
      
      ```javascript
        var a = [1,2,3,4,5];
        a.reduce(function(pre, value){return pre+ value;},0); //15
        a.reduce(function(pre, value){return pre+ value;}); //15
      ```
       - initial을 지정한 경우  
         |횟수|pre|value|index|반환값|
         |:-:|:--:|:---:|:---:|:---:|
         |1회차|0|1|0|1|
         |2회차|1|2|1|3|
         |3회차|3|3|2|6|
         |4회차|6|4|3|10|
         |5회차|10|5|4|15|
         
       - initial을 지정하지 않은 경우  
         |횟수|pre|value|index|반환값|
         |:-:|:--:|:---:|:---:|:---:|
         |1회차|1|2|1|3|
         |2회차|3|3|2|6|
         |3회차|6|4|3|10|
         |4회차|10|5|4|15|
      
      - reduce 함수를 이용한 배열의 모든 순열 구하기  
        ```javascript
          function permutation(a){
            return a.reduce(function(list,element){
              var newList = [];
              list.forEach(function(seq){
                 for(var i = seq.length; i>=0; i--){
                  var newSeq = [].concat(seq);
                  newSeq.splice(i,0,element);
                  newList.push(newSeq);
                 }
              });
              return newList;
            },[[]]);     
          }
     
          var a = [1,2,3];
          permutation(a).forEach(function(value){console.log(value);});
          //(3) [1, 2, 3]
          //(3) [1, 3, 2]
          //(3) [3, 1, 2]
          //(3) [2, 1, 3]
          //(3) [2, 3, 1]
          //(3) [3, 2, 1] 
        
        ```
        |횟수|list|element|반환값|
        |:-:|:----|:----:|:-----|
        |1회차|[[]]|1|[[1]]|
        |2회차|[[1]]|2|[[1,2],[2,1]]|
        |3회차|[[1,2],[2,1]]|3|[[1,2,3],[1,3,2],[3,1,2],[2,1,3],[2,3,1],[3,2,1]]|
 <!--20210216 기록 시작-->       
## 10.2 다차원 배열
  - 2차원 배열의 생성  
    자바스크립트는 다차원 배열을 정의하기 위한 문법은 제공하지 않지만, 배열에 배열을 중첩하면 다차원 배열과 비슷한 기능을 구현할 수 있다.   
    ```javascript
      var x = new Array(3);
      for(var i =0; i<3; i++){
        x[i] = new Array(3);
      }
      
      for(var count=1, i=0; i<3; i++){
        for(var j=0; j<3; j++){
          x[i][j] = count++;
        }
      }
    ```
    위 코드를 배열 리터럴을 사용해 다음과 같이 표현할 수 있다.    
    ```javascript
      var x = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
      ];
    ```
    
## 10.3 유사 배열 객체  
  - 자바스크립트에서 배열이란 Array 타입의 객체를 말하며, Array 타입의 객체는 다음과 같은 성질이 있다.  
    - 0 이상의 정수 값을 프로퍼티 이름으로 갖는다.  
    - length 프로퍼티가 있으며, 요소를 추가하거나 삭제하면 length 프로퍼티 값이 바뀐다.  
      length 프로퍼티 값을 줄이면 배열의 크기가 줄어든다  
    - 프로토타입이 Array.prototype이므로 Array.prototype 메서드를 상속받아 사용할 수 있다  
    
  - 유사 배열 객체란?  
    프로퍼티 이름이 0 이상의 정수이며 length 프로퍼티가 있는 객체  
    ex) 함수의 인수를 저장한 Arguments 객체  
        DOM의 document.getElementsByTagName 메서드, document.getElementByName 메서드 등이 반환하는 NodeList 객체  
    
  - 유사 배열 객체의 생성 예제   
    ```javascript
      var a = {};
      for(var i =0; i<10; i++){
        a[i] = i;
      }
      a.length = 10;
    ```
    위와 같은 유사 배열 객체는 Array.prototype의 메서드를 사용할 수 없으며, 요소의 추가와 삭제 또는 length 프로퍼티 값을 요소의 개수와 연계하는 처리가 배열처럼 동작하지 않는다. 하지만 배열로 참조하거나 대입할 수 있으며 for 문이나 for/in 문으로 반복 처리를 할 수 있다.  
    (Array.prototype 메서드를 사용하고 싶으면 Function.prototype.call 메서드로 간접 호출하면 사용할 수 있다.)  
    
## 10.4 ECMAScript 6의 배열과 새롭게 추가된 기능  
  - 비구조화 할당  
    비구조화 할당이란?  
    배열, 객체, 반복 가능 객체에서 값을 꺼내어 그 값을 별도의 변수에 대입하는 문장  
    
    - 배열의 비구조화 할당  
      - 기본적인 사용법
        ```javascript
          var [a,b] = [1,2]; // var a = 1, b = 2

          var array, first, second;
          array = [first, second] = [1,2,3,4];
          //first = 1, second = 2, array = [1,2,3,4] 
        ```
        좌변 변수의 개수와 우변 값의 개수는 같을 필요는 없다. 변수 개수가 더 많은 경우 남은 변수에는 undefined가 할당되고, 우변의 값의 개수가 더 많은 경우에는 무시된다.  
        
      - 나머지 요소  
        전개 연산자인 ...을 사용하여 나머지 요소를 이용할 수 있다.  
        ```javascript
          [a,b, ...rest] = [1,2,3,4];
          //a = 1, b = 2, rest = [3,4]
        ```
      
      - 요소의 기본값  
        요소의 기본값을 설정할 수 있다. 비구조화 할당하는 좌변의 변수에 undefined가 할당되면 undefined 대신에 기본값을 할당한다.  
        ```javascript
          [a=0, b=1,c=2] = [1,2];
          //a = 1, b = 2, c = 2
        ```
       
      - 함수가 배열로 반환한 값을 비구조화 할당받기  
        함수가 값을 여러 개 반환해야 할 때 반환 값을 배열로 만들면 비구조화 할당을 통해 간결하게 표현할 수 있다.  
        ```javascript
          function rotation(x, y, theta){
            var s = Math.sin(theta), c = Math.cos(theta);
            return [c*x-s*y, s*x+c*y];
          }
          
          var [a,b] = rotation(1,2, Math.PI/3);
        ```
    <!--20210217 기록 시작-->
    - 객체의 비구조화 할당  
      - 기본적인 사용법
        ```javascript
          var{a:x, b:y} = {a:1, b:2};
          //x = 1, y = 2 
          
          {a:x,b:y} = {a:1, c:1};
          //x = 1, y = undefined
          
          {a:x,b:y} = {a:1, b:2, c:3};
          //x = 1, y = 2
          
          var{sin:sin, cos:cos, tan:tan, PI:PI} = Math;
          //var sin = Math.sin, cos = Math.cos, tan = Math.tan, PI = Math.PI
        
        ```
        
      - 프로퍼티의 기본값  
        ```javascript
          {a: x=1, b: y=2, c: z =3} = {a:2, b:4};
          //x = 2, y = 4, z = 3
        ```
        
      - 프로퍼티 이름 생략  
        ```javascript
           var{sin, cos, tan, PI} = Math;
           //var sin = Math.sin, cos = Math.cos, tan = Math.tan, PI = Math.PI
           
           {a=1,b=2,c=3} = {a:2, b:4};
           //a = 2, b = 4, c = 2
        ```
    
    - 반복 가능한 객체의 비구조화 할당  
      우변에 반복 가능한 객체가 있을 때도 비구조화 할당을 할 수 있다.  
      ```javascript
        var [a,b,c] = "ABC";
        function* createNumbers(from, to){
          while(from<= to) yield from++;
        }
        var [a,b,c,d,e] = createNumbers(10, 15);
      ```
      
    - 중첩된 자료의 비구조화 할당  
      ```javascript
        var [a, [b,c]] = [1,[2,3]];
        var {a:x, b:{c:y, d:z}} = {a:1, b:{c:2, d:3}};
             
      ```
      
  -  전개 연산자  
     ...은 전개 연산자라고 한다. 이 전개 연산자는 반복 가능한 객체를 반환하는 표현식 앞에 표기하여 반복 가능한 객체를 배열 리터럴 또는 함수의 인수 목록으로 펼칠 수 있다.  
     ```javascript
      [..."ABC"] // ["A","B","C"]
      f(..."ABC") //f("A","B","C")
      [1, ...[2,3,4],5] // [1,2,3,4,5]
      f(...[1,2,3]) // f(1,2,3)
     ```
     
     다음 예는 제너레이터가 만든 이터레이터를 배열 리터럴 안에 펼치는 예이다.  
     
     ```javascript
      function* createNumbers(from, to){
        while(from<to) yield from++;
      }
      var iter = createNumbers(10, 15);
      [...iter] //[10, 11, 12, 13, 14]
     ```
     
     전개 연산자를 활요하면 배열 두 개를 push 메서드로도 연결할 수 있다.  
     ```javascript
      var a = ["A", "B", "C"];
      a.push(...["D", "E"]); //["A", "B", "C", "D", "E"]
     ```
    <!--20210217 기록 마침-->
