'use strict';

class usedCar {
  //constructor
  constructor(brand, model){
    // fields
    this.brand = brand;
    this.model = model;
  }

  //methods
  insertDB(){
    //DB에 입력하는 코드 생략
    console.log(`${this.brand}의 ${this.model} 입력되었습니다.`);
  }
}
// 렌트카 입력 class 추가 (중고차 입력 class 상속)
class rentCar extends usedCar{
  insertDB(){
    //usedCar의 insertDB 메소드를 그대로 실행
    super.insertDB();
    //추가할 메세지
    console.log(`[렌트카]`)
  }
}
const rentCar01 = new rentCar('기아', 'K8');
rentCar01.insertDB();

/*
class, Object에 대해 알아보자

JavaScript에서의 class 키워드는 ES6버전에 와서야 만들어졌다. class는 template라고도 불리기도 하는데 
그 이유는 class자체적으로는 어떠한 데이터도 갖지 않고 틀만 정의해둔다. 
그리고 이 틀을 이용해 데이터를 넣어 만드는 것을 object라고 한다.
(좀 더 쉽게 이해하려면 붕어빵 만드는 틀을 class, 
그 틀에 데이터(팥 또는 슈크림 등)을 넣어 만든 붕어빵을 object라고 이해하면 된다.)

1. class 선언
아래는 새로 입고된 중고차를 DB에 입력 후 console에 알려주는 class이다.

// 자동차 class 선언
class usedCar {
  //constructor
  constructor(brand, model){
    // fields
    this.brand = brand;
    this.model = model;
  }

  //methods
  insertDB(){
    //DB에 입력하는 코드 생략
    console.log(`${this.brand}의 ${this.model} 입력되었습니다.`);
  }
}

2. object 선언 / 호출
이제 class를 생성했으니 새로 중고차가 입고되면 usedCar class에 데이터를 넣어주면 된다.
object를 만들 때는 new키워드를 사용한다.

//1번 중고차 데이터 입력 
const usedCar01 = new usedCar('현대', '쏘나타 N8');
//object가 잘 만들어졌는지 확인
console.log(usedCar01.brand);
console.log(usedCar01.model);

[이미지 1]
console에 1번 중고차(usedCar01)의 브랜드와 모델명이 잘 출력되고 있다.
그럼 이어서 DB에 입력하는 메소드를 호출하자.

usedCar01.insertDB();

[이미지 2]

정상적으로 입력된 것을 확인할 수 있다.

3. 상속
class 상속의 컨셉을 잘 이해하면 반복되어 사용되는 코드를 획기적으로 줄일 수 있다.
위에서 만들었던 usedCar class와 같은 기능을 하지만 사업모델이 다른 rentCar class를 만든다면 
usedCar의 필드와 메소드를 그대로 상속받아 사용할 수 있다.

// 중고차 입력 class
class usedCar {
  //constructor
  constructor(brand, model){
    // fields
    this.brand = brand;
    this.model = model;
  }

  //methods
  insertDB(){
    //DB에 입력하는 코드 생략
    console.log(`${this.brand}의 ${this.model} 입력되었습니다.`);
  }
}
// 렌트카 입력 class 추가 (중고차 입력 class 상속)
class rentCar extends usedCar{}

const rentCar01 = new rentCar('기아', 'K8');
console.log(rentCar01.brand);
console.log(rentCar01.model);
rentCar01.insertDB();

[이미지 3]

rentCar 클래스 선언부에는 어떤 필드와 메소드도 추가하지 않았음에도 brand와 model을 입출력 가능하고, insertDB 메소드 실행도 가능한 것을 볼 수 있다.
extends 키워드를 사용해 usedCar class의 모든 것을 상속받아 사용할 수 있게 된 것이다.
만약, 렌트카 입력의 경우 insertDB 메소드에서 출력되는 메세지에 별도로 '[렌트카]'라는 것을 표현하고 싶다면 어떻게 하면 될까?
rentCar class 선언 시 insertDB 메소드를 재정의 해주면 된다. 이것을 오버라이딩 즉, 덮어쓴다고 표현한다.
오버라이딩 하면서 '[렌트카]'라는 것을 추가했고, 원래 usedCar에서 insertDB 메소드를 실행할때 나왔던 메세지도 함께 보여주고 싶다면
super키워드를 사용하면 된다. 이는 부모(usedCar)를 가르킨다.

// 렌트카 입력 class 추가 (중고차 입력 class 상속)
class rentCar extends usedCar{
  insertDB(){
    //usedCar의 insertDB 메소드를 그대로 실행
    super.insertDB();
    //추가할 메세지
    console.log(`[렌트카]`)
  }
}
const rentCar01 = new rentCar('기아', 'K8');
rentCar01.insertDB();

[이미지 4]

*/