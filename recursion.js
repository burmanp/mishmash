function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

let result = multiply([2,3,4,2,4], 3)
console.log(result)

// multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]
// multiply(arr, 3) == multiply(arr, 2) * arr[2]
//                  == 6 * 4
//                  == 24
