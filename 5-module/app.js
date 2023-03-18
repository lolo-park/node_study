/* 
const counter = require("./counter.js");
counter.increase();
console.log(counter.getCount());
*/

import { increase, getCount } from "./counter.js";

increase();
increase();
increase();
console.log(getCount());

/* 
혹은 counter.js 에 있는 모든 함수들을 한꺼번에 가져오고 싶다면 

import * as counter from "./counter.js"
  counter.increase()
  counter.increase()
  counter.increase()
console.log(counter.getCount())
                         =====> 이렇게 쓸 수도 있음

 */
