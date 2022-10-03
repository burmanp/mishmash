/*
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:
[3,1,2,4,3]
P = 1, difference-((3)-(1+2+4+3)) = |3 − 10| = 7
P = 2, difference-((3+1)-(2+4+3)) = |4 − 9| = 5
P = 3, difference-((3+1+2)-(4+3)) = |6 − 7| = 1 << minimal difference
P = 4, difference-((3+1+2+4)-(3)) = |10 − 3| = 7
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].

//sample output
[3,1,2,4,3] => as above => 1
[1,1,0,-1]
p1|1 - 0| 1
p2|2 - -1| 3
p3|7 - 5| 2 << minimal difference

//plan
[3,1,2,4,3]
loop from index 1 
slice from 1 for rightArr
slice from 0 to 1 for leftArr
sum each array and find difference with Math.abs
save the values in another array and return the smallest
*/

function solution(A) {
  let minimalDiff = [];
  for (let i = 1; i < A.length; i++) {
    const rightArr = A.slice(i);
    const leftArr = A.slice(0, i);
    const sumLeft = leftArr.reduce((pv, cv) => pv + cv, 0);
    const sumRight = rightArr.reduce((pv, cv) => pv + cv, 0);
    // console.log(Math.abs(sumLeft - sumRight));
    minimalDiff.push(Math.abs(sumLeft - sumRight));
  }
  // console.log(minimalDiff)
  return Math.min(...minimalDiff);
}

console.log(solution([3, 1, 2, 9, 0, 7, -2]));
// test commit
