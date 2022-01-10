'use stric';

const car01 = { brand : '현대', model : '펠리세이드', cc : 3000 }
// object key 이름 조회
for(key in car01){
  console.log(`${key}`);
}
// object key의 value 조회
for(key in car01){
  console.log(`${car01[key]}`);
}


/*
JavaScript object에 대해 알아보자.
object는 연관되어 있는 데이터(변수)나 실행문(함수)를 모아놓을 수 있는 데이터 타입이다. 
아래 자동차와 관련된 데이터들을 정의해놓고 console 창에 출력을 해보자.

const brand = '현대';
const model = '펠리세이드';
const cc = 3000;

//출력 함수 정의
function infoPrint(brand, model, cc){
  console.log(`${brand} ${model} >> ${cc}cc`);
}
//호출
infoPrint(brand, model, cc);

[이미지 1]

그런데 위와 같이 데이터를 관리하게 되면 차량이 계속 추가 될 경우 관리가 힘들어진다.

const car01brand = '현대';
const car01model = '펠리세이드';
const car01cc = 3000;
//자동차01 호출
infoPrint(car01brand, car01model, car01cc);

const car02brand = '기아';
const car02model = 'K5';
const car02cc = 2000;
//자동차02 호출
infoPrint(car02brand, car02model, car02cc);

const car03brand = '기아';
const car03model = '쏘렌토';
const car03cc = 2000;
//자동차03 호출
infoPrint(car03brand, car03model, car03cc);

아마도 위 처럼 해야하지 않을까..?

ㅡㅡㅡ

# object 생성

이럴때 바로 아래와 같이 각 차량의 정보를 object를 사용하여 연관있는 데이터들을 그룹핑 할 수 있다.
object 생성은 {} 안에 key와 value를 한쌍으로 입력해주면 된다. 

// 정보 선언
// { key01: value01, key02: value02 }
const car01 = { brand : '현대', model : '펠리세이드', cc : 3000 }
const car02 = { brand : '기아', model : 'K5', cc : 2000 }
const car03 = { brand : '기아', model : '쏘렌토', cc : 32000 }

출력하는 infoPrint함수에서도 굳이 각각 parameter를 받을 필요 없이 object를 통째로 parameter로 전달받아서 아래와 같이 각각의 item을 출력해주면 된다.

# object 데이터 조회

object의 특정 key의 데이터를 조회하는 방법은 object.key 이다.
// 출력
infoPrint(car01);
infoPrint(car02);
infoPrint(car03);
function infoPrint(car){
  console.log(`${car.brand} ${car.model} >> ${car.cc}cc`);
}

[이미지 2]

코드가 훨씬 간결해졌고, 계속 추가되는 데이터에도 대응이 수월해진 것을 볼 수 있다.
object의 데이터를 조회하는 방법에는 object.key 외에도 object['key']가 있다.

function infoPrint(car){
  console.log(`${car.brand} ${car.model} >> ${car.cc}cc`);
}
function infoPrint(car){
  console.log(`${car['brand']} ${car['model']} >> ${car['cc']}cc`);
}

위 두 코드의 결과는 정확하게 같다. 그럼 왜 헷갈리게 두개의 조회 방법을 만든 것일까?
아래 방식은 key의 이름을 알 수 없을때 사용할 수 있다. 예를 들어 object의 특정 key를 호출하는 함수가 있다고 가정하고,
사용자는 그 함수를 통해 object의 brand의 값을 호출할지 model의 값을 호출할지 알 수 없지만 parameter로 받은 key를 호출하고 싶다.
(아래와 코드를 보면 이해가 쉽다.)

obj01 = {brand: '기아', model: 'K5'};
printValue(obj01, 'brand');
function printValue(obj, key){
  console.log(obj.key)
}

[이미지 3]

전달받은 obj01에는 'key'라는 key가 없기 때문에 값을 찾을 수 없는 것이다.
바로 이럴때에 object[key] 방식을 사용하면 된다. 위 코드에서 object값을 조회하는 부분만 아래와 같이 수정해보자.

obj01 = {brand: '기아', model: 'K5', cc: 2000};
printValue(obj01, 'brand');
function printValue(obj, key){
  console.log(obj[key])
}

[이미지 4]

원하는 결과가 나왔다. 즉, 알고 있는 key의 값을 알고 조회할땐 obj.key 방식을 쓰는 것이 맞고, 
object의 key를 변수 또는 parameter로 전달받아 조회할땐 obj[key] 방식을 쓰면 된다.
참고로 obj.key 방식을 Dot Notation, obj[key] 방식을 Braket Notation이라고 한다.


# object안에 특정 key가 존재하는지 조회 (in operator)

어떤 object안에 특정 key가 존재하는지 조회할 수 있는 in 키워드가 있다. 결과로는 true 또는 false를 반환한다.

car01 = {brand: '기아', model: 'K5', cc: 2000};
// car01 object안에 'height' 이름의 key가 존재하는지?
console.log('height' in car01);
// car01 object안에 'brand' 이름의 key가 존재하는지?
console.log('brand' in car01);

[이미지 5]

결과로 'height'라는 이름의 key는 선언하지 않았기 때문에 false를, 'brand'는 존재하기 때문에 true가 출력된다.


# object를 돌며 전체 value 조회 (for in)
for in 키워드를 사용하면 for문을 돌며 object의 key값을 가져올 수 있다. 
이를 활용하면 object내의 모든 value도 가져올 수 있게 된다.

const car01 = { brand : '현대', model : '펠리세이드', cc : 3000 }
// object key 이름 조회
for(key in car01){
  console.log(`${car01[key]}`);
}
// object key의 value 조회
for(key in car01){
  console.log(`${car01[key]}`);
}

[이미지 6]



*/

