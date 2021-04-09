function arrReverse(arr) {

    //var arr = [1, 3, 5, 'xyz'];	// Original array to sort

    var arrLength = arr.length -1 ;     //length is 4 so gives 3

    var revArray = [];	// new array to put the reversed array

    for (var i = arrLength; i >= 0; i--) {

      revArray.push(arr[i]);
    }
    return revArray;
 }

var result = arrReverse(['dog','cow', 'ferret', 'cat']);
console.log(result);
