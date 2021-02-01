// LINK : https://leetcode.com/problems/missing-number/

// Problem Statement: Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.
// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// Steps: 
// 1. sum of all the nums of n size array - sum of element of array provided

var missingNumber = function(nums) {
    var sumOfNums = 0;
    for(let i=0; i<nums.length; i++) {
        sumOfNums += nums[i];
    }
    
    var actualSum = 0;
    for(let i=1; i<=nums.length; i++) {
        actualSum += i;
    }
    
    return actualSum - sumOfNums;
};