/**
 * @param {number} x
 * @return {boolean}
*/
//cette function transforme le int en list
function listing(x){
    var list = String(x).split('').map(Number);
    return list;
}

//celle ci reverse la liste
function reversedList(xIntoList){
    var len = xIntoList.length
    const reverted = new Array(len);
    for(i=len-1 ; i >= 0 ; i--){
        reverted[len-i-1] = xIntoList[i];
    }
    return reverted;
}

//cette function convert le reversedList en number => [3,2,1] === 321

function reverseedListIntoNumber(revertxIntoList){
    const num = Number(revertxIntoList.join(''));
    return num;
}


var isPalindrome = function(x) {
    const xIntoList = listing(x);
    const revertxIntoList = reversedList(xIntoList);
    const number = reverseedListIntoNumber(revertxIntoList)

    return (number == x ) ? true : false ;

}; 


console.log(isPalindrome(12321));



