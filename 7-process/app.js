/* 
node가 동작하는 process 가져오기 
*/

const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
	console.log("setTimeout");
}, 0);

process.nextTick(() => {
	//call stack 다 수행한후에
	console.log("nextTick"); //task queue 에 넣어줘
});

for (let i = 0; i < 100; i++) {
	console.log("for loop");
}

/*
"for loop"를 출력하는 함수가 다 끝난다음에 
nextTick함수와 setTimout 함수가 실행되는 것을 알 수 있다. 
nextTick task queue에 다른 콜백함수가 있어도, 여기 있는 함수를 
task queue 제일 앞부분에 옮겨버려서 실행시켜버림 
*/
