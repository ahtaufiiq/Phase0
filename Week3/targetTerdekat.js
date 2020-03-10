function targetTerdekat(arr) {
    let o=0
    let x=[]
    let terdekat=arr.length
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=="o") {
            o=i
        }else if(arr[i]=="x"){
            x.push(i)
        }
    }

    for (let i = 0; i < x.length; i++) {
        let jarak=Math.abs(o-x[i])
        if (jarak<terdekat) {
            terdekat=jarak
        }
    }
    return terdekat
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2