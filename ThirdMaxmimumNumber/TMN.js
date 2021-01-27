// https://leetcode.com/problems/third-maximum-number/

// Problem Statement
// Given integer array nums, 
// return the third maximum number in this array. 
// If the third maximum does not exist, 
// return the maximum number.

// Solution

// Steps
// 1. sort the array by using quickSort
// 2. remove any duplicates from the array
// 3. display result based on the length of array
//     3.1 If length of array is less than 3, then display the maximum number from the array
//     3.2 If lenght of array is equal to 3, then display the number at zero index
//     3.3 If length of array is greater than 3, then display the number at (lenght of array - 3)th index

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

    while(i < j) {
        do {
            i=i+1;
        } while(arr[i] <= pivot)

        do {
            j=j-1;
        } while(arr[j] > pivot)

        if(i < j) {
            arr = swap(i, j, arr);
        }
    }

    arr = swap(l, j, arr);
    return j;
}

// Time Complexity O(n logn)
const quickSort = (l, h, arr) => {
    if(l<h) {
        let j = partition(l, h, arr);
        quickSort(l, j, arr);
        quickSort(j+1, h, arr);
    }

    // arr.pop();
    return arr;
}

// Function to remove any duplicate number from an array O(n)
const removeDuplicate = (arr) => {
    let i = 0;
    let j = 1;
    
    let newArr = [...arr];
    while (j !== arr.length+1) {
        if(arr[i] === arr[j]) {
            newArr[i] = "duplicate";
            i = j;
            j = j+1;
        }
        else {
            i = i+1;
            j = j+1;
        }
    }
    
    let res = []
    for(let inx=0; inx<newArr.length; inx++) {
        if(newArr[inx] !== "duplicate") {
            res.push(newArr[inx])
        }
    }
    
    return res;
}

var thirdMax = function(nums) {
    let lengthOfArray = nums.length;
    let result = 0;
    
    if(lengthOfArray < 3) {
        result = Math.max(...nums)
        return result
    } else {
        nums.push(Number.MAX_VALUE);
        let l = 0;
        let h = nums.length-1;
        
        nums = quickSort(l, h, nums);
        nums.pop();
        
        console.log(`SORTED : ${nums}`);
        nums = removeDuplicate(nums);
        console.log(`DUPLICATE REMOVED : ${nums}`);
        
        let res = 0;
        
        if(nums.length < 3) {
            res = Math.max(...nums)
        } else if(nums.length === 3) {
            res = nums[0];
        } else if(nums.length > 3) {
            res = nums[nums.length - 3];
        }
        return res;
    }
};