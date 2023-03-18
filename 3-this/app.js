/* 
this 는 어떻게 사용되어지느냐에 따라 다르다  
1)함수 내에서 global 
2)class 내에서 해당 class를 가리킴 
3)외부에서 module.exports 임 
*/

function hello() {
	console.log(this); //함수안에서 this를 호출하면 global이다
	console.log(this === global);
}

//함수를 선언하고 호출 제발 호출 ㅡㅡ

hello();

class A {
	constructor(num) {
		this.num = num;
	}
	memberFunction() {
		console.log("---class----");
		console.log(this); // => A { num : 2}
		console.log(this === global); //=> false, class this는 class 자기 자신
	}
}

const a = new A(2);
a.memberFunction();

console.log("---global scope---");
console.log(this); // => {} ; class 도 함수도 아닌 this
console.log(this === module.exports); // => true ; module에 있는 exports

//this 는 문맥에 따라서 그 성격이 달라진다.
