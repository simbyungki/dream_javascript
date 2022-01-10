'use strict';

const carModels = ['K5', '쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
// indexOf : 동일한 값이 존재한다면 가장 첫번째 index return
console.log(carModels.indexOf('K5'));
// lastIndexOf : 동일한 값이 존재한다면 가장 마지막 index return
console.log(carModels.lastIndexOf('K5'));

/*
JavaScript Array(배열)에 대해 자세히 알아보기

Array는 JavaScript에서 자료구조 중 하나이다. 

# 배열 선언 

const array1 = new Array();
const array2 = [1, 2];


# 배열 조회

// index는 0부터 시작 (0,1,2...)
const carModels = ['쏘나타', 'K5', '펠리세이드'];
// 배열 크기 조회
console.log(carModels.length);
// 특정 index 값 조회 
console.log(carModels[2]);

[이미지 1]

# 배열 loop

const carModels = ['쏘나타', 'K5', '펠리세이드'];
for(let i = 0; i < carModels.length; i++){
  console.log(carModels[i]);
}
// 또는
for(let carModel of carModels){
  console.log(carModel);
}
// 또는
carModels.forEach((value) => console.log(value));

[이미지 2]


# 배열의 가장 뒤에 값 추가 (array push)
push 메소드는 array의 가장 뒤에 값을 추가한다.

const carModels = ['쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
carModels.push('모닝', '레이');
console.log(carModels);

[이미지 3]

# 배열의 제일 앞에 값 추가 (array unshift)
unshift 메소드는 array의 가장 앞에 값을 추가한다.

const carModels = ['쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
carModels.unshift('모닝', '레이');
console.log(carModels);

[이미지 4]


# 배열의 제일 뒤의 값 삭제 (array pop)
pop 메소드는 array의 가장 뒤의 값을 삭제한다.

const carModels = ['쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
carModels.pop();
console.log(carModels);

[이미지 5]

# 배열의 가장 앞의 값 값 삭제 (array pop)
shift 메소드는 array의 가장 앞의 값을 삭제한다.

const carModels = ['쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
carModels.shift();
console.log(carModels);

[이미지 6]

참고로 shift와 unshift메소드는 가급적 사용을 지양하는 것이 좋다. push와 pop은 배열의 가장 뒷 쪽에 값을 추가하고 삭제하느 것이라
그 외의 값에는 영향을 끼치지 않지만, shift와 unshift는 가장 앞의 값을 추가, 삭제 하게되면 나머지 뒷쪽의 값이 모두 한칸씩 당겨지거나
밀리게 된다. 예제 코드처럼 간단한 array에서는 큰 차이가 없겠지만 데이터가 많은 다수의 object들을 모아놓은 array라면 충분히 성능에 영향을 줄 수 있다.

# 배열의 특정 index에 해당하는 값 삭제 (array splice)

splice 메소드는 2개의 parameter를 전달해야한다. 삭제를 시작할 곳의 index와 그로부터 몇개의 값을 삭제할건지를 전달하면되는데,
만약 2번째 parameter를 전달하지 않으면 start index 뒤의 값을 모두 삭제한다.

const carModels = ['쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
// array.splice(start index, number);
// 1번째 index로부터 1개의 값 삭제 
carModels.splice(1, 1);
console.log(carModels);

[이미지 7]

또 splice의 메소드는 삭제한 자리에 다른 값을 넣을 수도 있다. 
const carModels = ['쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
// 1번째 index로부터 1개의 값을 삭제 한 뒤 그 자리에 2개의 값을 추가
carModels.splice(1, 1, '모닝', '싼타페');
console.log(carModels);

[이미지 8]


# 두개의 배열 합치기 (array concat)
concat 메소드를 사용하여 다른 배열과 합치기가 가능하다.

const carModels = ['쏘나타', 'K5', '펠리세이드'];
const carModels2 = ['모닝', '싼타페', '티구안'];
const newCarModels = carModels.concat(carModels2);
console.log(newCarModels)

[이미지 9]


# 배열 내 값 검색 (array indexOf, lastIndexOf, includes)
indexOf 메소드는 parameter로 찾는 값을 전달하면 해당 값이 있는 index를 return하고, 
includes 메소드는 parameter로 찾는 값을 전달하면 해당 값이 배열 안에 있는지 없는지 true 또는 false를 return한다.

const carModels = ['쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
// 몇번째 index에 해당 값이 있는지 확인 (return index)
// 만약에 해당 값이 없다면 return -1
console.log(carModels.indexOf('K5'));
// 배열에 해당 값이 있는지 확인 (return true or false)
console.log(carModels.includes('K5'));

[이미지 10]

만약 배열 내 동일한 값이 있다면 indexOf 메소드는 해당 값의 가장 첫번째 index를 return하는데, 
첫번째가 아닌 마지막 index를 return 받으려면 lastIndexOf 메소드를 사용하면 된다.

const carModels = ['K5', '쏘나타', 'K5', '펠리세이드'];
console.log(carModels);
// indexOf : 동일한 값이 존재한다면 가장 첫번째 index return
console.log(carModels.indexOf('K5'));
// lastIndexOf : 동일한 값이 존재한다면 가장 마지막 index return
console.log(carModels.lastIndexOf('K5'));

[이미지 11]


*/