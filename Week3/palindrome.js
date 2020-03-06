function palindrome(kata) {
    let reverseString=""
    for (let i = kata.length-1; i >=0; i--) {
        reverseString+=kata[i]
    }
    return reverseString == kata
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false