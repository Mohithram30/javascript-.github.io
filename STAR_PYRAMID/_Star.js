function repeatStringNumTimes(str,num) {
    let newString ="";
  
  if(num <= 0) {
    return "";
  }
  
  for(let i = 0; i < num; i++) {
    newString+=str;
    
  }
  return newString;
}

console.log(repeatStringNumTimes("*", 1));
console.log(repeatStringNumTimes("*", 2));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("*", 4));
console.log(repeatStringNumTimes("*", 5));