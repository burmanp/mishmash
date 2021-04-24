function smallestInArray(array) {
  var minArray = array[0];
  for (var i = 0; i < array.length; i++){
    if (array[i] < minArray) {
      minArray = array[i];
    }else {
      minArray = minArray;
    }
  }
  console.log(minArray);
}

smallestInArray([3,2,0,5]);
