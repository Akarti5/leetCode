/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var size = nums.length;
    for ( let i = 0 ; i < size ; i++){
        for ( let j = i+1 ; j < size ; j++){
                if (nums[i] + nums[j] == target){
                    return [i , j]
                }
        }
    }
    // console.log(size)
};

console.log(twoSum([2,7,11,15], 9));