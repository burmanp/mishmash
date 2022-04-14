/*
Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100

//examples
10, 85, 30 => 3 (add 30 to 10 3 times to get over 85)
2, 13, 8 => 2 (add 8 to 2 twice to get over 13)
200, 2k, 100 => 18 (add 100 to 200 18 times to get to or over 2k)

//plan 
for eg(2, 13, 8)

set a counter at 0;
Initiallise with X(2), add D(8) while the result is lower than Y(13).
Each time it adds, should increase the counter and return the counter.
*/

function solution(X, Y, D) {
  let counter = 0;

  for (let i = X; i < Y; i = i + D) {
    counter++;
  }
  return counter;

  // faster solution return Math.ceil((Y - X) / D);
}
const startTime = performance.now(); // in milliseconds
const result = solution(10, 85, 30);
const endTime = performance.now();
console.log(result, endTime - startTime);
