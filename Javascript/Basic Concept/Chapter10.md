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
        
      - splice 메서드  
        splice 메서드는 
        
        <!--중간커밋-->
