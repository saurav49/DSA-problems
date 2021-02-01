// LINK: https://leetcode.com/problems/maximum-subarray/

// Problem Statement: Given an integer array nums, 
// find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.

var maxSubArray = function(nums) {
    
    if(nums.length === 1) {
        return nums[0];
    } else if(nums.length === 0) {
        return 0;
    }
    
    let res = [];
    res.push(nums[0]);
    for(let i=1; i<nums.length; i++) {
        let lastIndex = res.length - 1;
        let maxNum = Math.max(res[lastIndex]+nums[i],nums[i]);
        res.push(maxNum);
    }
    
    return Math.max(...res);
    
};