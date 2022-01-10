'use strict';

function calculator(command, a, b){
	switch(command){
		case 'add' : 
			return a + b;
			break;
		case 'substract' : 
			return a - b;
			break;
		case 'divide' : 
			return a / b;
			break;
		case 'multiply' : 
			return a * b;
		case 'remainder' : 
			return a % b;
		default :
			return 'error';
	}
}

console.log(calculator('multiply', 28, 30));





/*
JavaScript 함수(Function), 화살 함수(Arrow Function) 자세히 알아보자

어떤 프로그래밍 언어든 마찬가지이지만 함수는 매우 중요한 역할을 한다.
프로그램 내에서 하나의 함수는 또다른 하나의 프로그램이라고 봐도 된다.
함수에 대해 자세히 알아보자.

## 함수 생성
function fnName(parameter01, parameter02){
	...
	//do something
	...
	return result;
}

## 함수는 최소단위의 프로그램
하나의 함수에서는 하나의 일만 하도록 세분화하여 설계해준다.

## 함수 네이밍
변수명은 명사로 짓는 것이 일반적인데, 함수명은 해당 함수가 어떤 일을 수행하는지 나타내기 위해 
getName, deleteName, checkingMembers와 같이 무엇을 하는지? 또는 명령어 형태 또는 동사 형태로 작성해주는 것이 좋다.
(함수 이름을 만드는 것이 어렵다면 아마 그 함수는 한개의 일이 아닌 여러개의 일을 하고 있을 확률이 높다.)
예를 들어 회원추가와 그 가족을 추가하는 기능을 수행하는 함수를 만든다면,
addMemberAndFamily가 아닌, addMember, addMember와 같이 각각 1개의 기능을 수행하는 함수로 쪼개어 만들어준다.

## 함수 호출
// 함수 선언
function sayHello(){
	console.log('안녕!');
}
// 함수 호출
sayHello();

[이미지1]

위에 선언한 sayHello함수는 좋은 함수는 아니다. 할 수 있는 일이 console에 '안녕!'이라는 문자열을 출력하는 일밖에 못하기 때문이다.
이때는 parameter를 활용하면 훨씬 더 활용하기 좋은 함수를 만들 수 있다.
// 함수 선언
function say(message){
	console.log(message);
}
// 함수 호출
say('안녕!');
say('반가워요.');

[이미지2]

## [ES6 +] parameter 기본값
또 ES6버전부터는 parameter에 기본값을 바로 할당할 수 있다.
ES6이전 버전에서는, 함수 선언 시 작성된 parameter가 전달되지 않는 경우,
// 함수 선언
function say(message){
	console.log(message);
}
// parameter 없이 함수 호출
say();

[이미지3]

message parameter값이 없이 함수를 호출했기 때문에 console창에 undefined가 뜨는데 
만약 위아 같이 parameter를 전달하지 않는 경우에 특정 메시지를 출력하고 싶은 경우,

// 함수 선언
function say(message){
	if(message == undefined){
		message = '값이 없습니다.';
	}
	console.log(message);
}
// parameter 없이 함수 호출
say();

[이미지4]

위와 같이 parameter의 기본값을 함수 내에서 if문을 통해 할당해줘야 했지만 ES6버전부터는 아래와 같이 함수 선언 시 기본값 할당이 가능하다.
// 함수 선언
function say(message = '값이 없습니다.'){
	console.log(message);
}
// parameter 없이 함수 호출
say();

## [ES6 +] Rest parameters
만약 함수의 parameter의 수가 정할 수 없는 다수의 경우, ES6부터는 함수 선언 시 parameter명 앞에 '...'을 추가하면
전달받은 parameter들을 배열 형태로 받아 사용할 수 있다.
// 함수 선언
function players(...users){
	for(const user of users){
		console.log(user)
	}
}
// 함수 호출
players('Byungki', 'Yisol', 'Hyejin');

[이미지 4]

## 변수에 함수 할당
위에서 작성했던 함수 선언 방법 외에도 변수에 익명함수를 할당해줄 수도 있다.
// 변수에 익명함수 할당
const say = function(message){
	console.log(message);
}
// 호출 시에는 함수와 동일한 형태로 변수명으로 호출
say('안녕!');

[이미지 1]


## 콜백(callback) 함수
함수의 parametr로 다른 함수를 전달하여 함수 내에서 실행가능한 함수를 콜백함수라고 한다. 
예를 들어 특정 시간에는 study함수를 호출하고, 그게 아니라면 sleep함수를 실행하고 싶다면,
// 함수 선언
function schedule(time, study, sleep){
	if(time > 9 && time < 18){
		//콜백 함수
		study();
	}else{
		//콜백 함수
		sleep();
	}
}
const study = function(){
	...
}
const sleep = function(){
	...
}
// 함수 호출
schedule(10, study, sleep)

## 화살 함수 (Arrow Function)
화살함수를 사용하면 function 키워드 선언 대비 간결하게 선언할 수 있다.
화살함수 선언은 익명함수로  한다.
//function 선언
function say(message){
	console.log(message);
}
//Arrow function 선언
const say = (message) => console.log(message);






*/