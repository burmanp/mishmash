function rangeOfNumbers(startNum, endNum) { 
  if (startNum === endNum) {	
    return [endNum];		//return a 1 item array, [startNum] does same
  }else {
    let arr = rangeOfNumbers(startNum+1,endNum) //recall with +1
    arr.unshift(startNum) //push from the front of array
    return arr;
  }
}

console.log(rangeOfNumbers(1,5))
