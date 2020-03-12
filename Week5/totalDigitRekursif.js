function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (angka>9) {
        let angkaBelakang=angka%10
        return angkaBelakang + totalDigitRekursif(Math.floor(angka/10))
    }else{
        return angka
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5