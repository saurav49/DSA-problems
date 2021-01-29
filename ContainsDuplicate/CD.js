https://leetcode.com/problems/contains-duplicate/

// Problem Statement
// Given an array of integers, find if the array contains any duplicates.

// Your function should return 
    // true if any value appears at least twice in the array, 
    // and it should return false if every element is distinct.


// Steps
    // 1. sort the array by using quickSort
    // 2. detech duplicates from the array
        // 2.1 If duplicate found return true
        // 2.2 Return False


// function to swap two numbers in an array
const swap = (i, j, arr) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    
    return arr;
}

const partition = (l, h, arr) => {
    let pivot = arr[l];
    let i = l;
    let j = h;
    
    while(i<j) {
        do {
            i = i+1;
        } while(arr[i] <= pivot)
    
        do {
            j = j-1;
        } while(arr[j] > pivot)
            
        if(i<j) {
            arr = swap(i, j, arr);
        }
    }
    
    arr = swap(l, j, arr);
    return j;
        
}

// Time Complexity : O(nlogn)
const quickSort = (l, h, arr) => {
    if(l<h) {
        let j = partition(l, h, arr);
        quickSort(l, j, arr);
        quickSort(j+1, h, arr);
    }
    
    return arr;
}

// Function to detech duplicate if any O(n)
const detecDuplicate = (arr) => {
    let i = 0;
    let j = 1;
    
    let newArr = [...arr];
    while(j<arr.length) {
        if(newArr[i] === newArr[j]) {
            return true;
        } else {
            i = i+1;
            j = j+1;
        }
    }
    
    return false;
}

var containsDuplicate = function(nums) {
    
    let res = true;
    nums.push(Number.MAX_VALUE);
    let l = 0;
    let h = nums.length - 1;
    
    nums = quickSort(l, h, nums);
    nums.pop();
    res = detecDuplicate(nums);
    
    return res
    
};