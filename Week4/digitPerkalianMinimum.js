function digitPerkalianMinimum(angka) {
    let digitMinimum=String(angka).length+1
    for (let i = 2; i < angka/2; i++) {
        let digit=String(angka/i)+i
        if(angka%i==0 && digit.length<digitMinimum){
            digitMinimum=digit.length
        }    
    }
    return digitMinimum
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2