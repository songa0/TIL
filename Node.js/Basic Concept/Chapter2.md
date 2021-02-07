## 2장 알아두어야 할 자바스크립트 (JS 최신 문법에 대한 소개)
 ### 2.1 ES2015+
 2015년을 기점으로 매년 문법 변경 사항이 발표되고 있음. 
    
 #### 2.1.1 const, let
  - var를 const, let 이 대체
  - var : 함수 스코프
  - const,let : 블록 스코프
  - const : 한 번 값을 할당하면 재할당 못함. 초기화 시, 값 할당 필수. 상수라고 부름
 <!--20201215 추가-->
   * 알고가면 좋은 개념(후에 스코프 개념과 함께 자세히 다룰 예정) 
     - 호이스팅 (Hoisting) : 함수 안에 있는 선언들을 모두 끌어 올려서 함수 유효 범위(함수 블록 안에서)의 최상단에 정의하는 것
      - JS parser가 함수 실행 전, 해당 함수를 훑는다.
      - 함수 안에 존재하는 변수/함수선언 정보를 기억하고 있다가 실행한다.
      - 대상 : var 변수/함수의 선언. (할당은 제외. const,let 변수, 함수표현식 제외)  
     출처 : https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html  
   <!--20201215 추가 마침-->      
 
 #### 2.1.2 템플릿 문자열
    
  ``` javascript
  var num1 = 1;
  var num2 = 2;
  var string1 = num1 + ' 더하기 '+ num2 + '= ?';
  ```
 위 코드를 간단하게 아래와 같이 쓸 수 있다.
    
  ```javascript
  const num1 = 1;
  const num2 = 2;
  var string1 = `${num1} 더하기 ${num2} = ?`;
    
  ```
  <!--20201214 끝
     회사에서 js 를 쓰고 있긴 하지만 주먹구구 식으로 쓰고 있었다는 것을 느꼈다. 그때 그때 인터넷에서 찾아서 문제를 해결하다보니 기본 개념을 잘 모르고 넘어갔던 것 같다.
node js를 써보고 싶어서 먼저 공부하고는 있지만, 조만간 js 책도 사서 공부해야겠다.  
오늘 알게된 내용 중 논 블로킹이라는 기법을 실무에 적용해 볼 수 있을 것 같다. 페이지 로딩 시 API를 3번 호출하는데, 첫번째 호출 후 콜백에서 두번째를 호출하는 식으로 되어있다. 이 부분을 내일 한 번 바꿔봐야겠다. 20201215 확인했더니 이미 바껴있었음-->
 
 <!--20201215 기록 시작-->
 #### 2.1.3 객체 리터럴
 
 ``` javascript 
 var sayNode = function(){
  console.log('Node');
 }
 var es = 'ES';
 
 var oldObject = {
  sayJS = function(){
   console.log('JS');
  },
  sayNode : sayNode,
 }
 oldObject[es+6] = 'Fantastic';
 oldObject.sayNode(); //Node
 oldObject.sayJS(); //JS
 console.log(oldObject.ES6);//Fantastic
 
 ```
  oldObject를 아래의 newObejct와 같이 간단하게 쓸 수 있다.
  
  ``` javascript
  const newObject = {
   sayJS() = {
    console.log('JS');
   },
   sayNode,
   [es+6] : 'Fantastic',
  
  };
  newObject.sayNode(); //Node
  newObject.sayJS(); //JS
  console.log(newObject.ES6);//Fantastic
  
  ```
  - sayJS 같은 객체의 메서드에 함수를 연결할 때 콜론, function을 붙이지 않아도 됨.
  - sayNode : sayNode 와 같이 속성명과 변수명이 동일할 때는 한 번만 써도 됨.
  - newObject 안에 [es+6] 속성을 선언한 것과 같이 객체의 속성명은 동적으로 생성 가능. 

#### 2.1.4 화살표 함수
 - function 선언 대신 => 기호로 함수 선언
 - this 바인드 방식이 다름
 
    아래의 add1, add2, add3, add4 함수는 같은 기능을 하는 함수이다
 ```javascript
  function add1(x,y){
   return x+y;
  }
  
  const add2 = (x,y) => {
   return x+y;
  }
  
  const add3 = (x,y) => x+y;
  
  const add4 = (x,y) => (x+y);
 ```
 
 <!--20201215 기록 끝! 
   점심시간에 클래스 쪽을 보다가 프로토타입에 관해 보게되었다.(아직 기록은 못했지만) 정리가 아주 잘되어있는 블로그를 찾았다.
    https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67
   콘솔에 객체 찍어볼 때 _proto_ 를 본 것 같은데, 왜 궁금증을 가지지 않았을까 싶다. 그래도 하나하나 알아가는 것이 즐겁고, 앞으로가 기대된다.
   내일은 this 바인드 방식에 대해 공부해봐야겠다.
-->

<!--20201216 기록 시작-->

   화살표 함수를 사용하면 this 바인드 방식도 달라진다.  
   relationship1 을 relationship2로 바꿔 쓸 수 있다.  
<!--20201217 수정 함. 메서드/함수가 각각 가리키는 this에 대해 헷갈렸음.-->
```javascript

var relationship1 = {
  name : 'gy',
  friends : ['sh','yj','yj'],
  logFriends : function (){
    var that = this; //relationship1을 가리키는 this를 that에 할당. 메서드(객체에 종속적인 함수)의 경우, this는 객체를 가리킴.
    this.friends.forEach(function (friend){
      console.log(that.name, friend); // 함수 내부에서 this는 전역 객체를 가리킴. 따라서 위에서 relationship1을 가리키는 this를 that에 미리 저장함. 
    });
  },
};
relationship1.logFriends();

var relationship2 = {
 name : 'gy',
 friends : ['sh','yj','yj'],
 logFriends(){
   this.friends.forEach(friend =>{
     console.log(this.name, friend); // 화살표 함수 내부에서 this는 전역 객체가 아닌 부모 객체를 가리킴. 이를 lexical this라고 함.
   });
 },
};
relationship2.logFriends();
```
 
화살표 함수는 상위 스코프의 this를 그대로 물려받는다.  

  * this 바인딩    
     : https://wooooooak.github.io/javascript/2018/12/08/call,apply,bind/  
    
    this 바인딩이란 this를 원하는 객체 값으로 바꾸는 것이다. 이를 위해 bind, call, apply 함수를 사용한다.
    
    ```javascript
    const obj = {name : 'Suhyun'};
    const winner = function(subject){
        console.log(`${this.name} won in a ${subject} competition`);
    };
    
    winner('Math'); // won in a Math competition
    winner.call(obj, 'Math'); // Suhyun won in a Math competition
    winner.apply(obj, ['Math']); // Suhyun won in a Math competition
    
    const bindFunc = winner.bind(obj);
    bindFunc('Math'); // Suhyun won in a Math competition
    bindFunc(['Math']);  // Suhyun won in a Math competition
    ```
   - call, apply, bind 함수의 차이점  
      - call 함수 : 함수가 바로 실행됨. 첫번째 인자에는 this에 넣을 객체를 입력. 함수에 필요한 인자는 두번째부터 입력하면 됨.   
      - apply 함수 : 함수가 바로 실행됨. 첫번째 인자에는 this에 넣을 객체를 입력. 함수에 필요한 인자는 배열에 넣어 전달.  
      - bind 함수 : 함수가 바로 실행되지 않음. 함수를 리턴함. 먼저 this에 넣을 객체를 입력한 후, 함수를 리턴 받음. 리턴 받은 함수에 파라미터 세팅.  
      
      <!--20201216 기록 
         중간에 모르는 것이 많아서 진도가 안나간다. 아무래도 javascript에 대한 이해가 부족해서 그런 것 같다. node js 를 빨리 해보고 싶어서 먼저 공부하고 있는데, 끝나고 나면 꼭    javascript 공부를 마저해야겠다. 오늘도 새로운 것들을 많이 알게되어 뿌듯하다-->
         
      <!--20201217 기록 시작 
         오늘은 저녁에 할 일이 있어서 회사에 일찍와서 조금만 기록하려고 한다. -->
#### 2.1.5 구조분해 할당
 - 구조분해 할당을 사용하면 객체와 배열로 부터 속성/요소를 쉽게 꺼낼 수 있다.
   
  ```javscript
   var fruitBasket = {
    status:{
     name : 'Apple',
     count : 5,
    },
    getFruit: function(){
     this.status.count--;
     return this.status.count;
    }
   }
   var getFruit = fruitBasket.getFruit;
   var count = friutBasket.status.count;
   ```
  위를 아래와 같이 간단하게 쓸 수 있다.
  
  ```javascript
  const fruitBasket = {
   status: {
   name : 'Apple',
   count : 5,
   },
   getFruit(){
    this.status.count--;
    return this.status.count;
   }
  }
  
  const {getFruit,status:{count}} = fruitBasket; // count는 다음과 같이 나타낼 수도 있다. const count = fruitBasket.status;
  
  ```
<!--20201217 기록 끝
    삼십분동안 공부할 수 있는 양이 많지가 않다..-->
    
<!--20201218 기록 시작-->

배열에 대한 구조분해 할당 문법도 존재한다.

```javascript
var array = ['Apple','','5',true];

var fruit = array[0];
var obj = array[1];
var bool = array[3];

```
위를 아래와 같이 간단하게 나타낼 수 있다.

```javascript
const array = ['Apple','',5,true];

const [fruit,obj,,bool] = array; /obj와 bool 사이의 요소 5에는 변수명을 지어주지 않았으므로 무시한다.

```

#### 2.1.6 클래스

클래스 문법도 추가되었다. 하지만 여전히 프로토타입 기반이다.  
  
예제
```javascript
var Human = function(type){
 this.type = type || 'human';
};

Human.isHuman = function(human){
 return human instanceof Human;
}

Human.prototype.breathe = function(){
 alert('h-a-a-a-m');
}

var Zero = function(type, firstName, lastName){
 Human.apply(this, arguments);
 this.firstName = firstName;
 this.lastName = lastName;
}

Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero; //상속하는 부분
Zero.prototype.sayName = function(){
 alert(this.firstName+' '+this.lastName);
};
var oldZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(oldZero); //true
```
위를 아래와 같이 나타낼 수 있다.

```javascript
class Human{
 constructor(type='human'){
  this.type = type;
 }
 
 static isHuman(human){
  return human instanceof Human;
 }
 
 breathe(){
  alert('h-a-a-a-m');
 }
}

class Zero extends Human{
 constructor(type, firstName, lastName){
  super(type);
  this.firstName = firstName;
  this.lastName = lastName;
 }
 
 sayName(){
  super.breathe();
  alert(`${this.firstName} ${this.lastName}`);
 }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero); //true
```
위에서 볼 수 있듯이, 생성자 함수는 constructor 안으로 들어갔고, 클래스 함수는 static 키워드로 전환되었다.

#### 2.1.7 프로미스
ES2015부터는 자바스크립트와 노드의 API들이 콜백 대신 프로미스 기반으로 재구성되었다.  
프로미스는 실행은 바로 하되 결괏값은 나중에 받는 객체이다.  다음 예제를 보자

```javascript
const condition = true;
const promise = new Promise((resolve,reject) =>{
 if(condition){
  resolve('Pass');
 }else{
  reject('Fail');
 }
});

promise
 .then((message)=>{
  console.log(message); //성공(resolve)한 경우 실행
 })
 .catch((error)=>{
  console.log(error); //실패(reject)한 경우 실행
 })
 .finall(()=>
  console.log('finally'); //무조건 실행
 });
 
```
위의 new Promise는 바로 실행되지만, 결괏값은 then을 붙였을 때 받게된다.

<!--20201218 기록 끝
 17일까지 기록했던 내용은 이미 두 번정도 읽었던 내용이어서, 기록하기가 더 쉬웠다. 하지만 오늘 기록한 부분은 아직 내가 이해를 제대로 못해서 그런지 예제 그대로 기록하게 되고, 책을 그대로 배끼는 기분이다. 내일은 주말이니 조금 더 공부해서 기록해봐야겠다. -->
