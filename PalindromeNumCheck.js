const isPalindrome = (num) => {
    let factor = 1;
    while (num/factor >= 10){
        factor *= 10;
    }
    while (num) {
        let first = Math.floor(num/factor);
        let last = num %10;
        if(first != last){
            return false;
        }
        num = Math.floor((num% factor) / 10);
        factor = factor/100;
    }
    return true;
}

// check if num is palindrome

console.log(isPalindrome(2424242));
console.log(isPalindrome(244));
console.log(isPalindrome(9000000009));
console.log(isPalindrome(14414))
