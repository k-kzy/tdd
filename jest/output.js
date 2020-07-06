const convert = require('./convert')
const MAX_LOOP_COUNTER_NUM = 100;
let counter = 0;

let output = (loopCount) => {
  for (let i = 1; i <= loopCount; i++) {
    console.log(convert(i));
    counter = i;
  }
  return counter;
}
output(MAX_LOOP_COUNTER_NUM);

module.exports = output;
