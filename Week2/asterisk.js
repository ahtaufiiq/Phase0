var input=7


for (let i = 0; i < input; i++) {
    console.log("*")
}

console.log("-------------------")

let star=""
for (let i = 0; i < input; i++) {
    star+="*"
    console.log(star)
}

console.log("-------------------")

for (let i = 1; i <= input; i++) {
    star=""
    for (let j = 0; j < input; j++) {
          if(j<input-i){
              star+=" "
          }else if(j<input){
              star+="*"
          }
    }
    console.log(star)
}

console.log("-------------------")

for (let i = 1; i <= input; i++) {
    star=""
    for (let j = 0; j < input*2; j++) {
          if(j<input-i){
              star+=" "
          }else if(j<input+i-1){
              star+="*"
          }
    }
    console.log(star)
}

console.log("-------------------")

for (let i = 0; i < input; i++) {
    let star=""
    for (let j = 0; j < input; j++) {
        if (i==0||i==input-1||j==0||j==input-1) {
            star+="*"
        }else{
            star+=" "
        }
    }
    console.log(star)
}

console.log("-------------------")

for (let i = 0; i < input; i++) {
    let star=""
    for (let j = 0; j < input; j++) {
        if (i==0||i==input-1||j==0||j==input-1||j==i||j==input-i-1) {
            star+="*"
        }else{
            star+=" "
        }
    }
    console.log(star)
}