// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// Problem Statement

// Given an array of integers numbers that is already sorted in ascending order, 
// find two numbers such that they add up to a specific target number.
// Return the indices of the two numbers (1-indexed) 
// as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

// Steps
// 1. Take two pointer, one at the begining and other at the end
// 2. add the value that the pointers are pointing towards
    // 2.1 If sum of the values are greater than the target, decrease the end pointer by 1
    // 2.2 If sum of the values are less than the target, increase the start pointer by 1
    // 2.3 If sum of the values are equal to the target, return the indices that they are pointing towards

var twoSum = function(numbers, target) {
    
    let start = 0;
    let end = numbers.length - 1;
    
    while(start < end) {
        if(numbers[start] + numbers[end] > target) {
            end = end - 1;
        } else if(numbers[start] + numbers[end] < target) {
            start = start + 1;
        } else {
            return [start+1, end+1]
        }
    }
};