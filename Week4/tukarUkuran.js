function tukarBesarKecil(kalimat) {
    let lowerCase="abcdefghijklmnopqrstuvwxyz"
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let res=""
    for (let i = 0; i < kalimat.length; i++) {
        let huruf=kalimat[i]
        if (huruf>="a"&&huruf<="z") {
            for (let j = 0; j < lowerCase.length; j++) {
                if (huruf==lowerCase[j]) {
                    res+=upperCase[j]
                }
            }
        }else if(huruf>="A"&&huruf<="Z"){
            for (let j = 0; j < upperCase.length; j++) {
                if (huruf==upperCase[j]) {
                    res+=lowerCase[j]
                }
            }
        }else{
            res+=huruf
        }
    }

    return res
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"