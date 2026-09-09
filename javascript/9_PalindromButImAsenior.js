//I learnt this from AI but coded myself , and thats how you become better , you learn XD

var isPalindrome = function(x) {
    const str = String(x);
    return str == str.split('').reverse().join('');
}

console.log(isPalindrome(123));