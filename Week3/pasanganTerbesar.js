function pasanganTerbesar(num) {
    let stringNum=String(num)
    let angkaTerbesar=0
    for (let i = 0; i < stringNum.length-1; i++) {
        let pasanganAngka=Number(stringNum[i]+stringNum[i+1])
        if (pasanganAngka>angkaTerbesar) 
            angkaTerbesar=pasanganAngka
    }
    return angkaTerbesar
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99