function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka>9) {
        let string=String(angka)
        let total=1
        for (let i = 0; i < string.length; i++) {
              total*=Number(string[i])
        }
        return kaliTerusRekursif(total)
    }else{
        return angka
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6