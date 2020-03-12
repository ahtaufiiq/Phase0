function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if (arrPenumpang.length>0) {
        let result=[]
        let mulai=0
        let tujuan=0
        for (let i = 0; i < arrPenumpang.length; i++) {
            let temp={
                penumpang:arrPenumpang[i][0],
                naikDari:arrPenumpang[i][1],
                tujuan:arrPenumpang[i][2],
                bayar:0
            }
            for (let j = 0; j < rute.length; j++) {
                
                if (arrPenumpang[i][1]==rute[j]) {
                    mulai=j
                }else if (arrPenumpang[i][2]==rute[j]) {
                    tujuan=j
                }
                
            }
            temp.bayar=Math.abs(mulai-tujuan)*2000
            result.push(temp)
        }
        return result
    }else{
        return []
    }
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]