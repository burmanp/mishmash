function reverseString(str) {
  let revStr = "";
  for(let i = str.length-1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
  //---using three built-in functions---//
  // return str 
  //   .split("")
  //   .reverse()
  //   .join("");
}

console.log(reverseString("hello"));

