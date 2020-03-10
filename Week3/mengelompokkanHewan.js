function groupAnimals(animals) {
    // you can only write your code here!
    let res = []
    for (let i = 1; i < animals.length; i++) {
        for (let j = i; j > 0; j--) {
            if (animals[j][0] < animals[j - 1][0]) {
                [animals[j], animals[j - 1]] = [animals[j - 1], animals[j]]
            }

        }
    }
    let temp = []
    for (let i = 0; i < animals.length; i++) {
        temp.push(animals[i])

        if (i == animals.length - 1) {
            res.push(temp)
        }
        else if (animals[i][0] != animals[i + 1][0]) {
            res.push(temp)
            temp = []
        }
    }
    return res
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]