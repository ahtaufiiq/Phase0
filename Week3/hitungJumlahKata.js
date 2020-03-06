function hitungJumlahKata(kalimat) {
    let counter=0
    let afterSpace=true
    for (let i = 0; i < kalimat.length; i++) {
        if (afterSpace && kalimat[i]!=" ") {
            counter++
            afterSpace=false
        }else if (kalimat[i]==" ") {
            afterSpace=true
        }
    }
    return counter
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream ')); // 4
  console.log(hitungJumlahKata('Never     eat     shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5