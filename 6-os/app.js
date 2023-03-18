const os = require("os");

console.log(os.EOL === "\n"); //mac에서의 줄바꿈
console.log(os.EOL === "\r\n"); //window에서의 줄바꿈
//EOL : End of Line

/*console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.hostname());
*/
//내 서버가 동작하고 있는 환경에 대한 정보를 불러올 때 사용
