console.log("logging...");
console.clear();

// log level
console.log("log"); // 개발 시 사용
console.info("info"); // 중요한 정보를 남길 때 사용
console.warn("warn"); // 심한 error가 아닐 때
console.error("error"); // 심한 error 일 때 (사용자,시스템 에러)
// log의 심각성에 따라서 표시해주면 배포 후 바로바로 알 수 있음
// 개발하면서 부터 level에 따라 다르게 console을 이용하는 것을 추천!

// assert : 특정 조건일 때 log 를 출력하고 싶다면!
//console.assert(2 === 3, "not same!"); // => fail값만 출력하게 됨
//console.assert(2 === 2, "same?"); // => true라서 나타나지 않음

// print object
const student = {
	name: "lolo",
	age: 31,
	company: {
		name: "park",
		location: "seoul",
	},
};
//console.log(student);
console.table(student); // 객체를 table로 만들어쥼
console.dir(student, { showHidden: true, colors: false, depth: 0 });
//중첩된 object를 어디까지 보여줄 것인지 정하는 depth option을 쓸 수가 있지

// measuring time
console.time("for loop"); //'for loop'이라는 label을 지정
for (let i = 0; i < 10; i++) {
	i++;
}
console.timeEnd("for loop"); //성능 확인할 때 좋음

// counting 해당 함수가 몇번 호출되어졌는가를 카운트 할 때 쓴다는 거지
function a() {
	console.count("a function"); //'a function'이라는 label이 몇번 호출되었는가!
}
a();
console.countReset("a function");
a();

//debugging 할 때 유용한 trace

function f1() {
	f2();
}

function f2() {
	f3();
	console.trace();
}

function f3() {
	console.log("f3");
	//console.trace(); //어디서 이 함수를 호출했는지 알고 싶을 때 trace 쓸 수 있음
}

f1(); // => f3
