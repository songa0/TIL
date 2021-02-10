<!--20210124 기록 시작-->
## 9. 객체

### 9.1 객체 생성
  - 객체의 생성
    자바스크립트의 객체는 이름과 값을 한 쌍으로 묶은 집합으로, 이름과 값이 한 쌍을 이룬 것을 프로퍼티라고 함   
    값으로는 모든 데이터 타입의 데이터를 저장할 수 있으며, 함수의 참조를 값으로 가진 프로퍼티는 메서드라는 이름으로 부름 
    
    객체 생성 방법
      - 리터럴로 생성
        ```javascript
          var fruit = {name : "apple", count : 3};
        ```
      - 생성자로 생성
        ```javascript
          function Fruit(name, count){
            this.name = name;
            this.count = count;
          }        
          var fruit = new Fruit("apple", 3);
        ```
      - Object.create로 생성
        ```javascript
          var fruit = Object.create(Object.prototype, {
            name : {
              value : "apple",
              writable : true,
              enumerable : true,
              configurable : true
            },
            count : {
              value : 3,
              writable : true,
              enumerable : true,
              configurable : true
            },
                      
          });
        
        ```
  - 프로토타입  
    - 생성자 안에서 메서드를 정의하는 방식의 문제점  
      생성자 안에서 this 뒤에 메서드를 정의하면 그 생성자로 생성한 모든 인스턴스에 똑같은 메서드가 추가되어, 많은 양의 메모리가 소비됨  
      이 문제는 프로토타입 객체에 메서드를 정의하는 방식으로 해결 가능함  
    <!--20210124 기록 마침 토익스피킹 시험이 다가와 js 공부를 오래하지 못하고 있다..-->
    <!--20210125 기록 시작-->
    - 프로토타입 객체  
      함수의 prototype 프로퍼티가 가리키는 객체를 그 함수의 프로토타입 객체라고 함 (프로토타입 객체의 프로퍼티는 읽기만 가능하고 수정이 불가능함)  
      prototype 프로퍼티는 기본적으로 빈 객체를 가리킴   
      
      위에서 언급했던 this 뒤에 메서드를 정의하면, 그 생성자로 생성한 모든 인스턴스에 똑같은 메서드가 추가되는 문제를 해결해보자  
      ```javascript
        function Circle(center, radius){
          this.center = center;
          this.radius = radius;
        }
        
        Circle.prototype.area = function(){
          return Math.PI *this.radius*this.radius;
        };
        
        var c1 = new Circle({x:0,y:0}, 2.0);
        console.log(c1.area()); //12.566370614359172
      
      ```
      이 코드의 인스턴스 c1에는 area 메서드가 존재하지 않지만 area 메서드를 사용할 수 있음. 메서드 안의 this 또한 생성자로 생성한 인스턴스를 가리킴  
      
### 9.2 프로토타입 상속
  - 상속  
    상속? 일반적으로 특정 객체가 다른 객체로부터 기능을 이어받는 것  
    C++나 Java처럼 클래스를 이용하는 객체 지향 언어에서는 클래스를 상속할 수 있지만, 자바스크립트에서는 객체를 상속함  
    
  - 상속을 하는 이유  
    이미 정의된 프로퍼티와 메서드를 재사용할 수 있고, 새로운 기능을 추가해서 확장된 객체를 만들 수 있음  
  
  - 프로토타입 체인   
    프로토타입 체인?  
    : 자신이 가지고 있지 않은 프로퍼티를 \_\_proto\_\_ 프로퍼티가 가리키는 객체를 차례대로 거슬러 올라가며 검색하는데, 이 때 객체의 연결고리를 프로토타입 체인이라고 함
    - 내부 프로퍼티  
      모든 객체는 내부 프로퍼티 [[Prototype]]을 가지고 있음 (함수 객체의 prototype 프로퍼티와는 다른 객체임)  
      ECMAScript 6부터는 \_\_proto\_\_ 프로퍼티에 [[Prototype]]의 값이 저장됨  <!--20210125 기록 마침 개발자도구를 이용할때 항상 보이는 __proto__가 뭔지 궁금했는데 이번 기회에 공부할 수 있을 것 같아 기대된다--> <!--20210126 기록 시작-->
      
    - 프로토타입 체인  
      객체의 \_\_proto\_\_ 프로퍼티는 그 객체에게 상속을 해 준 부모 객체를 가리킴. 객체는 \_\_proto\_\_ 프로퍼티가 가리키는 부모 객체의 프로퍼티를 사용할 수 있음  
      ```javascript
        var objA = {
          name : "Tom",
          sayHello : function(){console.log("Hello " +this.name);}
        };
        var objB = {
          name : "Amy"
        };
        objB.__proto__ = objA;
        objB.sayHello(); //Hello Amy
        
        var objC = {};
        objC.__proto__ = objB;
        objC.sayHello(); //Hello Amy
      ```
      - objC.sayHello 프로퍼티가 동작하는 과정  
        - objC.sayHello()가 호출되면 먼저 objC 자신이 sayHello라는 프로퍼티를 소유하고 있는지 확인함 (찾을 수 없음)  
        - objC.\_\_proto\_\_가 가리키는 objB가 sayHello라는 프로퍼티를 소유하고 있는지 확인함 (찾을 수 없음)  
        - objB.\_\_proto\_\_.\_\_proto\_\_가 가리키는 objA가 sayHello라는 프로퍼티를 소유하고 있는지 확인함 (찾음)  
          따라서 objA.sayHello를 사용함  
      
      - this.name을 검색하는 과정  
        - objC가 name이라는 프로퍼티를 소유하고 있는지 확인함 (찾을 수 없음)  
        - objC.\_\_proto\_\_가 가리키는 objB가 name이라는 프로퍼티를 소유하고 있는지 확인함 (찾음)  
          따라서 objB의 name을 사용함
 
    - 프로토타입 가져오기  
      객체의 프로토타입은 Object.getPrototypeOf 메서드로 가져올 수 있음  
      
      ```javascript
        function F(){}
        var obj = new F();
        console.log(Object.getPrototypeOf(obj)); 
      ```
      ECMAScript 6부터는 객체의 프로토타입을 설정하는 메서드인 Object.setPrototypeOf도 추가됨  
   <!--20210126 기록 마침 토스 시험 끝나고 열심히 해야겠다...-->   
   <!--20210127 기록 시작-->
  - new 연산자의 역할  
    new 연산자가 수행하는 내부적인 작업을 아래 예로 설명하겠다  
    ```javascript
      function Circle(center, radius){
        this.center = center;
        this.radius = radius;
      }
      
      Circle.prototype.area = function(){
        return Math.PI*this.radius*this.radius;
      };
      
      var c = new Circle({x:0,y:0},2);
    
    ```
    new 연산자로 Circle 생성자를 사용하면 내부적으로는 다음과 같은 작업을 수행함  
      - 빈 객체를 생성함  
        var newObj = {};  
      - Circle.prototype을 생성된 객체의 프로토타입으로 설정함  
        newObj.\_\_proto\_\_ = Circle.prototype;  
        이때 Circle.prototype이 가리키는 값이 객체가 아니라면 Object.prototype을 프로토타입으로 설정함   
      - Circle 생성자를 실행하고 newObj를 초기화 함  
        Circle.apply(newObj, arguments);  
      - 완성된 객체를 결괏값으로 반환함  
        return newObj;  
      
  - 프로토타입 객체의 프로퍼티  
    함수를 정의하면 함수 객체는 기본적으로 prototype 프로퍼티를 갖게 됨  
    prototype 프로퍼티는 프로토타입 객체를 가리키며, 이 프로토타입 객체는 기본적으로 constructor 프로퍼티와 내부 프로퍼티 \_\_proto\_\_ 을 가지고 있음 <!--20210127 기록 마침 new 연산자가 수행하는 내부적인 작업에 대해 알게되었다-->  <!--20210127 기록 시작-->   
    - constructor 프로퍼티  
      - constructor 프로퍼티는 함수 객체의 참조를 값으로 가지고 있음  
        ```javascript
          function F(){};
          console.log(F.prototype.constructor); //ƒ F(){}
        ```
      - 생성자와 생성자의 프로토타입 객체는 서로를 참조함  
        (생성자의 prototype 프로퍼티가 프로토타입 객체를 가리키며, 이 프로토타입 객체의 constructor 프로퍼티가 생성자를 가리킴)  
      - 생성자로 생성한 인스턴스는 생성될 때의 프로토타입 객체의 참조만 가지고 있을 뿐 생성자와는 직접적인 연결고리가 없음  
         - 인스턴스가 어떤 생성자로 생성되었는지 알아내는 방법으로는 인스턴스가 가진 프로토타입의 constructor 프로퍼티를 확인하는 방법이 있음
          ```javascript
            function F(){};
            var obj = new F();
            console.log(obj.constructor); // ƒ F(){}
          ```
           인스턴스는 프로토타입에서 constructor 프로퍼티를 상속받기 때문에 constructor 프로퍼티를 인스턴스의 프로퍼티로 참조할 수 있음  
    - 내부 프로퍼티 \_\_proto\_\_  
      함수 객체가 가진 프로토타입 객체의 내부 프로퍼티 \_\_proto\_\_는 기본적으로 Object.prototype을 가리킴  
      ```javascript
        function F(){};
        console.log(F.prototype.__proto__); // Object {} : Object.prototype
      ```
    <!--20210128 기록 마침--> <!--20210129 기록시작-->
    - 프로토타입 객체의 교체 및 constructor 프로퍼티  
      생성자가 가진 prototype 프로퍼티 값을 새로운 객체로 교체할 때는 연결고리를 끊지 않도록 주의해야함  
      프로퍼티만 정의되어있는 새로운 객체를 prototype 프로퍼티 값으로 대입하면 연결고리가 끊어지게 되므로, prototype으로 사용할 객체에 constructor 프로퍼티를 정의하고 그 프로퍼티에 생성자의 참조를 대입해야 함  
      
      ```javascript
        function Circle(center, radius){
          this.center = center;
          this.radius = radius;
        }
        Circle.prototype = {
          constructor : Circle, //생성자를 constructor로 대입
          area : function(){return Math.PI*this.radius*this.radius;}
        }
        var c = new Circle({x:0, y:0}, 2);
        console.log(c.constructor); //ƒ Circle
      
      ```
      
    - 인스턴스 생성 후의 생성자의 프로토타입의 수정, 교체  
      인스턴스의 프로토타입은 생성자가 인스턴스를 생성할 때 가지고 있던 프로토타입 객체로, 인스턴스 생성 후에 생성자의 prototype 프로퍼티 값을 다른 객체로 교체하면 인스턴스의 프로토타입은 바뀌지 않음  
      (인스턴스의 프로퍼티는 생성되는 시점의 프로토타입에서 상속받음)  
      
      ```javascript
        function Circle(center, radius){
          this.center = center;
          this.radius = radius;
        }
        var c = new Circle({x:0, y:0}, 2);
        Circle.prototype = {
          constructor : Circle,
          area : function(){return Math.PI*this.radius*this.radius;}
        }
        
        c.area(); //c.area is not a function
      
      ```
      하지만 생성자가 기존에 가지고 있던 프로토타입 객체에 프로퍼티를 추가한 경우에는 생성자와 인스턴스 사이의 연결고리가 끊어지지 않음  
    
  - 프로토타입의 확인
    - instanceof 연산자  
      지정한 객체의 프로토타입 체인에 지정한 생성자의 프로토타입 객체가 포함되어 있는지 판정함
      '객체 instanceof 생성자' 형태로 사용가능함  
      ```javascript
        function F(){};
        var obj = new F();
        console.log(obj instanceof F); //true
        console.log(obj instanceof Object); //true
      ```
      
    - isPrototypeOf 메서드  
      특정 객체가 다른 객체의 프로토타입 체인에 포함되어 있는지 판정함  
      '프로토타입 객체.isPrototypeOf(객체)' 형태로 사용가능함  
      ```javascript
        function F(){};
        var obj = new F();
        console.log(F.prototype.isPrototypeOf(obj)); //true
        console.log(Object.prototype.isPrototypeOf(obj)); //true
      ```
      <!--20210129 기록 마침 instanceof 연산자에 대해 정확히 알게 되었다-->
      <!--20210131 기록 시작-->
  - Object.prototype  
    Object.prototype의 메서드는 모든 내장 객체로 전파되며 모든 인스턴스에서 사용할 수 있음  
    - Object 생성자  
      Object 생성자는 내장 생성자로 일반적인 객체를 생성함   
        ```javascript
       
       var obj = new Ojbect();
        var obj = {};
        //Object 생성자를 인수없이 실행하면 Object 생성자는 빈 객체를 생성하며, 이는 객체 리터럴로 작성한 빈 객체와 완전히 같음  
        
        var obj = new Object("ABC");
        //인수에 값을 지정하면 그 값을 Object 객체로 변환한 인스턴스를 생성함
        
        var obj = Object();
        //Object 생성자는 new 없이 호출해도 new를 붙여서 호출했을 때와 같은 방식으로 동작함  
        
        ```
      Object 생성자는 객체를 생성하는 것보다는 일반적인 객체를 조작하기 위한 메서드와 프로퍼티를 제공하고, Ojbect.prototype으로 모든 내장 생성자 인스턴스에서 사용할 수 있는 메서드를 제공함
    
    - Object 생성자의 프로퍼티와 메서드  
      - Object 생성자의 프로퍼티
        |프로퍼티|설명|
        |:------|:--|
        |prototype|Object 생성자의 프로토타입 객체를 저장함|
        
      - Object 생성자의 메서드
        |메서드|설명|
        |:----|:---|
        |assign(target,...)|첫 번째 인수로 지정한 객체에 두 번째 이후 인수로 지정한 객체가 소유한 모든 열거 가능한 String 또는 Symbol 프로퍼티를 추가해서 반환|
        |create(proto [,propertiesObject])|인수로 지정한 프로토타입 객체 또는 프로퍼티로 새로운 객체를 생성|
        |defineProperty(obj, prop, descriptor)|인수로 지정한 디스크립터 설정에 따라 프로퍼티를 객체에 추가|
        |defineProperties(obj, props)|인수로 지정한 디스크립터 설정에 따라 프로퍼티 여러 개를 객체에 추가|
        |freeze(obj)|인수로 지정한 객체의 프로퍼티를 변경하거나 삭제하지 못하게 동결|
        |getOwnPropertyDescriptor(obj, prop)|인수로 지정한 객체의 프로퍼티 디스크립터를 반환|
        |getOwnPropertyNames(obj)|인수로 지정한 객체가 소유한 모든 프로퍼티 이름을 배열로 반환|
        |getOwnPropertySymbols(obj)|인수로 지정한 객체가 소유한 모든 심벌 프로퍼티를 배열로 반환|
        |getPrototypeOf(obj)|인수로 지정한 객체의 프로토타입을 반환|
        |is(value1,value2)|첫 번째 인수와 두 번째 인수가 같은지 판정|
        |isExtensible(obj)|인수로 지정한 객체가 확장 가능한지 판정|
        |isFrozen(obj)|인수로 지정한 객체가 동결된 상태인지 판정|
        |isSealed(obj)|인수로 지정한 객체가 밀봉된 상태인지 판정|
        |keys(obj)|인수로 지정한 객체가 소유한 열거 가능한 프로퍼티 이름을 배열로 반환|
        |preventExtensions(obj)|인수로 지정한 객체의 확장을 금지|
        |seal(obj)|인수로 지정한 객체를 밀봉하여 프로퍼티 삭제를 금지|
        |setPrototypeOf(obj, prototype)|인수로 지정한 객체의 프로토타입을 설정|
        
      - Object.prototype의 메서드  
        자바스크립트의 내장 생성자가 소유한 프로토타입 객체의 프로토타입은 Object.prototype임. 따라서 내장 생성자로 생성한 모든 인스턴스는 Object.prototype 메서드를 사용할 수 있음  
        |메서드|설명|
        |:----|:---|
        |hasOwnProperty(key)|호출한 객체가 문자열 key를 이름으로 가진 프로퍼티를 소유하는지 여부를 논리값으로 반환|
        |isPrototypeOf(obj)|호출한 객체가 인수 obj에 지정한 객체의 프로토타입인지 여부를 논리값으로 반환|
        |propertyIsEnumerable(key)|호출한 객체가 문자열 key를 이름으로 가진 프로퍼티를 열거할 수 있는지 여부를 논리값으로 반환|
        |toString()|호출한 객체를 뜻하는 문자열을 반환|
        |toLocaleString()|toString 메서드와 같음|
        |valueOf()|호출한 객체의 원시 값을 반환|
    
    내장 생성자의 모든 인스턴스는 Object.prototype의 프로퍼티와 메서드를 상속하며, Object.prototype의 프로토타입은 null을 가리킴  
    즉, Object.prototype은 인스턴스에서 프로토타입 체인을 따라 거슬러 올라갈 수 있는 마지막 단계의 객체임  
    
    <!--20210131 기록 마침 내장 생성자의 모든 인스턴스는 Object.prototype을 상속한다는 것을 알게되었다.-->
    <!--20210201 기록 시작-->
  - Object.create로 객체 생성하기  
    Object.create 메서드의 첫 번째 인수는 생성할 객체의 프로토타입임. 두 번째 인수를 지정하면 생성할 프로퍼티도 지정할 수 있음(생략 가능)  
    ```javascript
      var personA = {
        name: "Tom",
        sayHello : function(){console.log("Hello! "+this.name);}
       };
       
       var personB = Object.create(personA);
       personB.name = "Amy";
       personB.sayHello(); //Hello! Amy
      //personB는 personA의 name 프로퍼티와 sayHello 메서드를 상속받았음
    
    ```
    Object.create 인수에 null을 넘기면 프로토타입이 없는 객체를 생성할 수 있음 (Object.prototype을 상속받지 않았으므로 기본적인 메서드도 사용 불가함)  
    
### 9.3 접근자 프로퍼티  
  - 프로퍼티의 종류  
    - 데이터 프로퍼티 : 값을 지정하기 위한 프로퍼티  
    - 접근자 프로퍼티 : 값이 없음. 프로퍼티를 읽거나 쓸 때 호출하는 함수를 값 대신에 지정할 수 있는 프로퍼티  
    
  - 접근자 프로퍼티  
    - 접근자? 객체 지향 프로그래밍에서 객체가 가진 프로퍼티 값을 객체 바깥에서 읽거나 쓸 수 있도록 제공하는 메서드  
    - 필요성  
      - 객체의 프로퍼티를 객체 바깥에서 직접 조작하는 행위는 유지 보수성을 해치는 주요 원인임  
      - 데이터를 부적절하게 변경하는 것을 막고 특정 데이터를 외부로부터 숨길 수 있으며 외부에서 데이터를 읽으려는 시도를 적절한 값으로 가공해서 넘길 수 있음  
    - 접근자 프로퍼티에 대해 getter, setter 함수를 정의하여 접근함  
  
  - 데이터의 캡슐화  
    즉시 실행 함수로 클로저를 생성하면 데이터를 객체 외부에서 읽고 쓸 수 없도록 숨기고 접근자 프로퍼티로만 읽고 쓰도록 만들 수 있음  
    ```javascript
    var person = (function(){
      var _name = "Tom";
      return {
          get name(){
              return _name;
          },
          set name(value){
              var str = value.charAt(0).toUpperCase()+value.substring(1);
              _name= str;
          }
      };
    })();
    
    console.log(person.name); // Tom
    person.name = "Amy"; // 접근자 프로퍼티에 값을 대입한다
    console.log(person.name); //Amy
    ```
  
 ### 9.4 프로퍼티의 속성  
  - 프로퍼티의 속성
    - 쓰기 가능(writable)  
    - 열거 가능(enumerable)  
      프로퍼티가 for/in 문이나 Object.keys 등의 반복문으로 찾을 수 있는 대상인지를 뜻하는 속성  
    - 재정의 가능(configurable)  
      프로퍼티의 내부 속성을 수정할 수 있는지를 뜻하는 속성  
      이 속성 값이 true면 delete 연산자로 그 프로퍼티를 제거할 수 있으며 프로퍼티가 가진 내부 속성을 수정할 수 있음  
    객체에 새로운 프로퍼티를 추가하면 그 프로퍼티의 기본 속성은 쓰기 가능/열거 가능/재정의 가능으로 설정됨  
    데이터 프로퍼티는 value, writable, enumerable, configurable 이라는 네 개의 속성을 갖고,  
    접근자 프로퍼티는 get, set, enumerable, configurable 이라는 네 개의 속성을 갖는다  
  <!--20210201 기록 마침 --> <!--20210203 기록 시작-->
  
  - 프로퍼티 디스크립터  
    프로퍼티 디스크립터? 프로퍼티의 속성 값을 뜻하는 객체  
    - 프로퍼티 스크립터 가져오기  
      Object.getOwnPropertyDescriptor 메서드는 객체 프로퍼티의 프로퍼티 스크립터를 가져옴  
      첫 번째 인수는 객체의 참조이고 두 번째 인수는 프로퍼티 이름을 뜻하는 문자열이다  
        ```javascript
          var amy = {name :"Amy"};
          Object.getOwnPropertyDescriptor(amy, "name");
          //{value: "Amy", writable: false, enumerable: true, configurable: true}
          
        ```
       프로토타입으로 상속받은 프로퍼티나 없는 프로퍼티를 지정하면 undefined를 반환함  
    
    - 프로퍼티 설정하기  
      Object.defineProperty 메서드는 객체의 프로퍼티에 프로퍼티 디스크립터를 설정함  
      첫 번째 인수는 객체의 참조, 두 번째 인수는 프로퍼티 이름을 뜻하는 문자열, 세 번째 인수는 프로퍼티 디스크립터의 참조임  
        ```javascript
          var amy = {name :"Amy"};
          Object.defineProperty(amy, "name",{
                                              value : "Amy",
                                              writable: true,
                                              enumerable : false,
                                              configurable : true
                                              });
          Object.getOwnPropertyDescriptor(amy, "name");
          //{value: "Amy", writable: true, enumerable: false, configurable: true}
          
        ```
      프로퍼티 디스크립터의 각 프로퍼티는 생략 가능하며, 생략하고 새로운 프로퍼티를 추가하면 생략한 프로퍼티에 대응되는 속성 값은 false 또는 undefined로 설정됨  
      일부 프로퍼티를 생략한 후에 특정 객체가 갖고 있는 프로퍼티를 수정하면, 그 프로퍼티의 속성 값 중에서 생략한 프로퍼티에 대응하는 속성 값은 수정하지 않음
      <!--20210203 기록 마침 너무 피곤해서 조금만 공부함..--> <!--20210204 기록 시작-->
      - writable 기능 속성 바꾸기
      ```javascript
          var person = {name : "Amy"};
          Object.defineProperty(person, "name", {writable:false});
          Object.getOwnPropertyDescriptor(person, "name");
          // {value: "Amy", writable: false, enumerable: true, configurable: true}
          person.name = "Tom";
          console.log(person.name); //Amy 
         ```
      name 프로퍼티는 수정할 수 없음. (person.name에 값을 대입해도 무시됨)  
      
      - enumerable 기능 속성 바꾸기  
       ```javascript
          var person = {
                        name : "Amy", 
                        age :17, 
                        sayHello : function(){console.log("Hello! "+this.name);}
                        };
           Object.defineProperty(person, "sayHello", {enumerable : false});
           for(var p in person)console.log(p); // name age
        
        ```
      sayHello는 열거할 수 없는 프로퍼티가 되므로 for/in 문을 사용해서 person의 프로퍼티를 열거해도 sayHello는 열거하지 않음  
      
      - configurable 기능 속성 바꾸기
      ```javascript
        var person = {name : "Amy", age: 17, sex : "Female"};
        Object.defineProperty(person, "age", {configurable : false});
        delete person.age;
        console.log(person.age); //17
        Object.defineProperty(person, "age",{enumerable:false}); //Uncaught TypeError: Cannot redefine property: age
        Object.defineProperty(person, "age",{writable:false});
        
      ```
      age를 다시 정의할 수 없도록 설정하여, delete 문으로 person.age를 삭제하라는 명령이 무시됨  
      age의 enumerable, configurable 속성을 바꾸려고 하면 오류가 발생함. 단, writable 속성만큼은 true일 때 false로 바꿀 수 있음  
      <!--20210204 중간 기록 마침 어제 일찍 자서 오늘 조금 일찍 일어나 공부함--> <!--20210206 기록 시작-->
      
    - 객체의 프로퍼티 속성 여러 개를 한 번에 설정하기  
      Object.defineProperties 메서드는 객체가 가진 프로퍼티 여러 개를 각각의 프로퍼티 디스크립터를 설정함  
      첫 번째 인수는 객체의 참조, 두 번째 인수는 새롭게 설정 또는 변경하고자 하는 프로퍼티의 이름이 키로 지정된 프로퍼티 여러 개가 모인 객체임  
      실행 후에는 수정된 객체의 참조를 반환함  
      ```javascript
        var person = Object.defineProperties({},{
          _name : {
            value : "Tom",
            writable : true,
            enumerable : true,
            configurable : true
          },
          name : {
            get: function(){return this._name;},
            set : function(value){
              var str = value.charAt(0).toUpperCase() + value.subString(1);
              this._name = str;
            },
            enumerable : true,
            configurable :true
          
          }       
        });
        Object.getOwnPropertyDescriptor(person, "name"); //{enumerable: true, configurable: true}
      
      ```

  - Object.create의 두 번째 인수  
    Object.create 메서드에 프로퍼티 목록을 두 번째 인수로 넘겨서 새로운 객체를 생성할 수 있음  
    
    ```javascript
      var group = {
        groupName : "Tennis Team",
        sayGroupName : function(){console.log("belong to "+this.groupName);}
      };
      var person = Object.create(group, {
        name : {
          value : "Tom",
          writable :true,
          enumerable : true,
          configurable : true
        },
        age : {
          value : 20,
          writable: true,
          enumerable : true,
          configurable : true
        },
        sayName : {
          value : function(){console.log("I'm "+this.name);},
          writable: true,
          enumerable : false,
          configurable : true 
        }
      });
      console.log(person); //{name: "Tom", age: 20, sayName: ƒ}
      console.log(person.groupName); // Tennis Team
      person.sayGroupName(); //belong to Tennis Team
      person.sayName(); //I'm Tom
    
    ```

### 9.5 프로퍼티가 있는지 확인하기  
  자바스크립트는 객체에 포함된 프로퍼티가 동적으로 바뀌기 때문에 프로프램을 실행하는 시점에 객체에 원하는 프로퍼티가 있는지 확인해야 함  
  또한 그 객체가 소유한 프로퍼티와 프로토타입으로 상속받은 프로퍼티를 모두 사용할 수 있으므로 때로는 이를 구분해야 할 때도 있음  
  이 절에서는 프로퍼티가 객체에 있는지 확인하는 방법과 그 객체가 소유한 프로퍼티인지 확인하는 방법에 대해 배운다  
  
  - in 연산자  
    in 연산자는 객체 안에 지명한 프로퍼티가 있는지 검색하며, 검색 대상은 그 객체가 소유한 프로퍼티와 상속받은 프로퍼티 모두이다  
    ```javascript
      var person = {name : "Tom"};
      console.log("name" in person); //true
      console.log("age" in person) //false
      console.log("toString" in person) //true   
    ```
    
  - hasOwnProperty 메서드  
    hasOwnProperty 메서드는 지명한 프로퍼티가 그 객체가 소유한 프로퍼티면 true를 반환하고 상속받은 프로퍼티면 false를 반홤함  
    ```javascript
      var person = {name : "Tom"};
      console.log(person.hasOwnProperty("name"));  //true
      console.log(person.hasOwnProperty("toString")); //false
    ```
  
  - propertyIsEnumerable 메서드  
    propertyIsEnumerable 메서드는 지정한 프로퍼티가 그 객체가 소유한 프로퍼티며 열거할 수 있을 때 true를 반환함  
     ```javascript
      var person = {name:"Tom", age: 20};
      var person2 = Object.create(person);
      person2.name = "Amy";
      console.log(person2.propertyIsEnumerable("name"));  //true
      console.log(person2.propertyIsEnumerable("age")); //false 상속받은 프로퍼티
      console.log(Object.prototype.prototypeIsEnumerable("toString")); // false 열거할 수 없음
     ```
    
### 9.6 프로퍼티의 열거  
  - for/in 문  
    for/in 문을 사용하여 객체와 객체의 프로토타입 체인에서 열거할 수 있는 프로퍼티를 찾아 꺼낼 수 있음  
    ```javascript
      var person = {name:"Tom", age: 20};
      var person2 = Object.create(person);
      person2.name = "Amy";
      for(var p in person2) console.log(p); //name age
    ```
    person2 객체는 name, age 프로퍼티를 사용할 수 있으며, Object.prototype에서 상속받은 toString 등의 프로퍼티도 사용할 수 있다. 하지만 Object.prototype의 프로퍼티는 열거할 수 없으므로 for/in 문으로 찾아낼 수 없다.  
  
  - Object.keys 메서드  
    Object.keys 메서드는 지정한 객체가 소유한 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름만 배열로 만들어서 반환함  
     ```javascript
      var group = {groupName : "Tennis Team"};
      var person = Object.create(group);
      person.name = "Tom";
      person.age = 20;
      person.sayHello = function(){console.log("Hello! "+ this.name);};
      Object.defineProperty(person, "sayHello", {enumerable : false});
      console.log(Object.keys(person)); // ["name", "age"]
     ```
     person 객체에서 사용할 수 있는 프로퍼티는 이 객체가 소유한 프로퍼티인 name, age, sayHello, group에서 상속받은 groupName, Object.prototype에서 상속받은 프로퍼티이다.  
     Object.keys 메서드는 해당 객체가 소유한 프로퍼티이면서 열거 가능한 프로퍼티인 name과 age만 배열로 만들어서 반환함  
     
  - Object.getOwnPropertyNames 메서드  
    Object.getOwnPropertyNames 메서드는 객체가 소유한 프로퍼티 이름을 배열로 만들어 반환함. 열거할 수 있는 프로퍼티와 열거할 수 없는 프로퍼티 이름을 모두 배열로 만드는 것이 특징임  
    ```javascript
    //위에서 사용한 person 객체에 해당 메서드를 사용해보자.  
    console.log(Object.getOwnPropertyNames(person)); // ["name", "age", "sayHello"]
    
    ```
 <!--20210206 기록 마침 목요일에 10시까지 야근하고 와서 금요일 저녁에 너무 피곤해서 커밋을 못했다...-->  
 
 <!--20210209 기록 시작-->
### 9.7 객체 잠그기  
  - 확장 가능 속성   
    객체의 확장 가능 속성은 객체에 새로운 프로퍼티를 추가할 수 있는지를 결정함  
    확장 가능 속성 값이 true로 설정된 객체에는 새로운 프로퍼티를 추가할 수 있지만 false로 설정된 객체에는 추가할 수 없음  
    (사용자가 정의한 객체와 내장 객체는 기본적으로 확장이 가능하지만 호스트 객체의 확장 가능 속성은 자바스크립트 실행 환경에 따라 설정된 값이 다름)  
    
  - 확장 방지  
    Object.preventExtension 메서드는 인수로 받은 객체를 확장할 수 없게 만듦  
    ```javascript
      var person = {name : "Tom"};
      Object.preventExtensions(person);
      person.age = 17;
      console.log("age" in person); //false
      console.log(Object.isExtensible(person)); //false
    ```
    
  - 밀봉   
    Object.seal 메서드는 인수로 받은 객체를 밀봉함  
    밀봉이란 객체에 프로퍼티를 추가하는 것을 금지하고 기존의 모든 프로퍼티를 재정의할 수 없게 만드는 것을 말함  
    (프로퍼티의 추가, 삭제, 수정을 할 수 없고 값의 읽기와 쓰기만 가능함)  
    ```javascript
      var person = {name : "Tom"};
      Object.seal(person);
      
      person.age = 17;
      console.log("age" in person); //false
      
      delete person.name;
      console.log("name" in person); //true
      
      Object.defineProperty(person, "name", {enumerable: false}); //Stric 모드에서 에러 발생
      
      person.name = "Amy";
      console.log(person); // {name : "Amy"}    
    ```
   
  - 동결  
    Object.freeze 메서드는 인수로 받은 객체를 동결함  
    동결이란 객체에 프로퍼티를 추가하는 것을 금지하고 기존의 모든 프로퍼티를 재정의할 수 없게 만들며 데이터 프로퍼티를 쓸 수 없게 만드는 것  
    (프로퍼티를 읽기만 가능함. 단, 객체에 접근자 프로퍼티가 정의되어 있다면 getter, setter 함수 모두 호출할 수 있음)  
    ```javascript
      var person = {_name : "Tom",
                    get name(){return(this._name);},
                    set name(value){this._name = value;}};
      Object.freeze(person);
      person.name = "Amy";
      console.log(person.name); // Tom
    ```
   <!--20210209 기록 마침 객체를 잠그는 방법에 대해 알게 되었다.--> 
   
   <!--20210210 기록 시작-->
### 9.8 Mixin  
  - Mixin 함수  
    믹스인? 특정 객체에 다른 객체가 가지고 있는 프로퍼티를 붙여 넣어 뒤섞는 기법  
           상속을 사용하지 않는 대신에 특정 객체의 프로퍼티를 동적으로 다른 객체에 추가함  
           (믹스인을 구현하기 위해서는 객체의 프로퍼티를 복사하는 함수를 만들어야함)  
     ```javascript
      function mixin(target, source){
        for(var property in source){
          if(source.hasOwnProperty(property)){
            target[property] = source[property];
          }
        }
        return target;
       }
     
     ```
     mixin 함수는 source 객체가 소유하고 있으며 열거할 수 있는 프로퍼티를 target 객체에 복사함. 이미 target에 있는 프로퍼티 값은 덮어쓰고 target에 없는 프로퍼티 값은 추가함. 이때 덮어쓰거나 추가할 때 사용하는 방식은 얕은 복사임.  
     
     ※참고  
       얕은 복사?  
       객체의 복사본을 만드는 대신 그 객체의 참조만 복사하는 행위  
       원본과 사본이 같은 객체를 참조하게 됨  
       
       깊은 복사?  
       객체의 사본을 만들어 다른 메모리 영역에 복사하는 행위  
   
  - Mixin 함수 심화  
    위의 mixin 함수는 원본 객체가 접근자 프로퍼티를 가지고 있을 때 접근자 프로퍼티도 데이터 프로퍼티로 바꾸어 복사하는 문제가 있다  
    ```javascript
      var person1 = {
          _name : "Tom",
          get name(){
            return this._name;
          }
       };
       var person2 = {};
       mixin(person2, person1);
       person2.name = "Amy";
       console.log(person2); //{_name: "Tom", name: "Amy"}
    ```
    mixin 함수가 person1 객체의 프로퍼티를 person2 객체에 복사할 때 단순히 새로운 프로퍼티를 대상 객체에 추가한 다음 원본 객체의 프로퍼티가 복사하는 시점에 가지고 있던 값을 할당해 버린다. 객체의 접근자 프로퍼티를 다른 객체에 믹스인하려면 mixin 함수에서 프로퍼티를 생성할 때 Object.defineProperty 메서드를 사용해야 한다.
    
    ```javascript
      function mixin(target, source){
        var keys = Object.keys(source);
        for(var i =0; i<keys.length; i++){
          var descriptor = Object.getOwnPropertyDescriptor(source, keys[i]);
          Object.defineProperty(target, keys[i], descriptor);
        }
       return target;
      }
      
      var person1 = {
         _name : "Tom",
          get name(){
            return this._name;
          }
       };
       
       var person2 = {};
       mixin(person2, person1);
       person2.name = "Amy";
       console.log(person2); // {_name: "Tom"}
    ```
    위의 mixin 함수를 사용하면 접근자 프로퍼티를 올바르게 복사할 수 있다.
    
### 9.9 JSON  
  - JSON(JavaScript Object Notation)  
    JSON은 자바스크립트 객체를 문자열로 표현하는 데이터 포맷이다. JSON을 사용하면 객체를 직렬화 할 수 있다.  
      직렬화? 컴퓨터의 메모리 속에 있는 객체를 똑같은 객체로 환원할 수 있는 문자열로 변환하는 과정  
    
  - 표기 방법  
    JSON의 포맷은 자바스크립트의 리터럴 표기법에 기반을 두고 있다.  
     - 객체 리터럴  
        {name : "Tom", age : 20, marriage : false, date: [2,5,null]}
     - JSON 데이터  
        '{"name":"Tom", "age" : 20, "marriage" : false, "date" : [2,5,null]}'
   
   - JSON의 변환과 환원    
     - 자바스크립트 객체를 JSON 문자열로 변환하기   
       JSON.stringfy 메서드를 사용하여 객체를 JSON 문자열로 바꾸어 반환할 수 있다.  
     - JSON 문자열을 자바스크립트 객체로 환원하기    
       JSON.parse 메서드를 사용하여 문자열을 자바스크립트 객체로 환원하여 반환할 수 있다.  
<!--20210210 기록 마침-->      
    
    
     
    
    
    
        
        
      
