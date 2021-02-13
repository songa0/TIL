## 10. 배열의 다양한 기능    
### 10.1 배열의 메서드  
    배열의 메서드에 대한 자세한 내용은 다음 링크를 참고한다.  
    영어 버전 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  
    한글 버전 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array  
    
    주요 메서드에 대해서만 알아보자  
    - 수정 메서드  
      - push 메서드  
        push 메서드는 배열 마지막에 하나 이상의 요소를 추가한 다음 그 배열의 길이를 반환함  
         ```javascript
          var a = [1,2,3];
          a.push(4,5,6);
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
          a.shift(); //3
          console.log(a); //[2, 3]
        ```
        
      - unshift 메서드  
        unshift 메서드는 배열 앞부분에 요소를 한 개 이상 추가한 후 모든 배열 요소를 오른쪽으로 이동 시킴(반환 값은 그 배열의 길이)
        ```javascript
          var a = [1,2,3];
          a.unshift(0);
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
      
      <!--20210213 기록 마침-->
