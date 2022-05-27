/*
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:
N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].

//Sample output
[2,3,1,5] => 4 
[4,3,1,7,6,5] => 2

//plan
[2,3,1,5]
sort it first with a-b ascending => [1,2,3,5]
loop through arr and if A[i] !== A[i+1]-1 => A[i+1]-1 

//another algo
loop and sum from 1 to max in array [2,3,1,5] - (1+2+3+4+5) => 15
loop and add nums in array (1+2+3+5) => 11
15 - 11 = 4
*/

function solution(A) {
  A = A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== A[i + 1] - 1) {
      return A[i + 1] - 1;
    }
  }
}

function solution2(A) {
  let totalSum = 0;
  let arraySum = A.reduce((pv, cv) => pv + cv, 0);
  for (let i = 0; i <= Math.max(...A); i++) {
    totalSum += i;
  }
  return totalSum - arraySum;
}

// console.time("solution1");
// console.log(solution([4,3,1,7,6,5]));
// console.timeEnd("solution1");
// console.log("------");

// console.time("solution2");
// console.log(solution2([4,3,1,7,6,5]));
// console.timeEnd("solution2");
// console.log("-------");

console.time("solution1");
console.log(solution([4, 3, 6, 5]));
console.timeEnd("solution1");
