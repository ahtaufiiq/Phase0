function angkaPalindrome(num) {
    do {
        num++
    } while (!reverseAngka(num));
    return num
  }

  function reverseAngka(num) {
      let stringNum=String(num)
      let reverseString=""
      for (let i = stringNum.length-1; i >=0; i--) {
          reverseString+=stringNum[i]
      }
      return reverseString == num
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001