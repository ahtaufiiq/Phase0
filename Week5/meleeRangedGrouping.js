function meleeRangedGrouping(str) {
    //your code here
    let result = {}
    let hero = ""
    let tipeHero = ""
    let isHero = true
    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        if (char=="-") {
            isHero=false
            i++
        }else if(char==","){
            isHero=true
            if (result[tipeHero]==null) {
                result[tipeHero]=[hero]
            }else{
                result[tipeHero].push(hero)
            }
            hero=""
            tipeHero=""
            i++
        }

        if (isHero) {
            hero+=str[i]
        }else{
            tipeHero+=str[i]
        }
    }
    
    if (result[tipeHero]==null) {
        result[tipeHero]=[hero]
    }else{
        result[tipeHero].push(hero)
    }


    return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []