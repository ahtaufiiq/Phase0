function checkAB(num) {
    // you can only write your code here!
    let check=false
    for (let i = 0; i < num.length-4; i++) {
        if (num[i]=="a" && num[i+4]=="b" || num[i]=="b" && num[i+4]=="a") {
            check= true
        }
    }
    return check
  }
  
  // TEST CASES
  console.log(checkAB('lorrowedbne a')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon andaeat')); // false