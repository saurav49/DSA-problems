// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Problem Statement
// Given a sorted array nums, 
// remove the duplicates in-place 
// such that each element appears only once and 
// returns the new length.
// Do not allocate extra space for another array, 
// you must do this by modifying the input array in-place with O(1) extra memory.

// Steps
// 1. Take two pointers, one at zero index(i) another at one index(j)
// 2. If the value pointing by both the pointers are equal , increment j by one
    // 2.1 If the value are not equal, increment i by 1 and replace the value at i by the value at j and increment j
// 3. While returning increment i by 1

// Time Complexity : O(n)
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    let res = 0;
    
    while(j < nums.length) {
        if(nums[i] !== nums[j]) {
            i = i + 1;
            nums[i] = nums[j];
            j = j + 1;
        } else {
            j = j + 1;
        }
    }
    
    return i+1;
};