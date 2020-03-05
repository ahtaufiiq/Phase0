var input = 5


for (let i = 1; i <= input; i++) {
    console.log(i)
}

console.log("-------------------")

let star = ""
for (let i = 1; i <= input; i++) {
    star += i
    console.log(star)
}

console.log("-------------------")

for (let i = 1; i <= input; i++) {
    star = ""
    let counter = 1
    for (let j = input; j > 0; j--) {
        if (j > i) {
            star += " "
        } else {
            star += counter++
        }
    }
    console.log(star)
}

console.log("-------------------")

for (let i = 1; i <= input; i++) {
    star = ""
    let counter = 1
    let minus=2
    for (let j = 0; j < input * 2; j++) {
        if (j < input - i) {
            star += " "
        } else if (j < input + i - 1) {
            if (counter > i) {
                star += counter - minus
                minus++
            }
            else {
                star += counter++
            }
        }
    }
    console.log(star)
}
