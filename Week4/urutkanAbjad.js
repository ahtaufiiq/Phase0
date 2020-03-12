function urutkanAbjad(str) {
    // you can only write your code here!
    let arr=[]
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    let res=""
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >0; j--) {
            if (arr[i]<arr[i-1]) {
                [[arr[i],arr[i-1]]=[arr[i-1],arr[i]]]
            }
        }   
    }

    for (let i = 0; i < arr.length; i++) {
        res+=arr[i]
    }
    
    return res
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'