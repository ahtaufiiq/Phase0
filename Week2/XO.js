function xo(str) {
  let counter =[0,0]
  for (let i = 0; i < str.length; i++) {
    if (str[i]=="x") {
        counter[0]++
    }else if(str[i]=="o"){
        counter[1]++
    }
  }
  return counter[0]==counter[1]
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true