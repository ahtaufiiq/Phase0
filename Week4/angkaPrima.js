function angkaPrima(angka) {
    let isPrima=true
    for (let i = 2; i < angka/2; i++) {
        if (angka%i==0) {
            isPrima=false
            break
        }
    }
    return isPrima
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false