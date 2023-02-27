/*global 전역객체란 무엇인가 브라우저에서는 window 객체를 사용 
nodejs에서는 global 전역객체를 사용하고,이 global은 생략이 가능하다. 
예를들어 console을 찍을 때도 원래는 global.console.log('')이렇게 되는데 
global 을 생략하고 쓸 수 있는 것임.

*/

const fs = require("fs");
// 'fs'를 require하여 VScode에서 global 문서에 접근할 수 있게 됨

console.log(global); //global 객체

global.hello = () => {
	global.console.log("hello");
};

global.hello();
hello();
