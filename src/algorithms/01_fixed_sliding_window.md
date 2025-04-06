---
layout: algorithms/algorithm.njk
title: Fixed Sliding Window Algorithm
description: A technique to process arrays or strings by maintaining a fixed-size window that slides through the data
---

# Fixed Sliding Window Algorithm

## Description

The Fixed Sliding Window algorithm is a technique used to process arrays or strings by maintaining a window of fixed size that slides through the data. This approach is particularly efficient for problems where we need to consider subarrays or substrings of a specific length.

## Use Cases

- Finding maximum/minimum sum of a subarray of fixed size k
- Finding the maximum number of consecutive 1's in a binary array
- Calculating moving averages in time series data
- Finding the first negative number in every window of size k

## Code Example

```typescript
/**
 * Problem: Find the maximum sum of a subarray of size k
 * 
 * @param nums Array of numbers
 * @param k Size of the sliding window
 * @returns Maximum sum of any subarray of size k
 */
function maxSumSubarray(nums: number[], k: number): number {
    if (nums.length < k) {
        throw new Error("Array length should be greater than or equal to k");
    }
    
    // Calculate sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    
    let maxSum = windowSum;
    
    // Slide the window from left to right
    for (let i = k; i < nums.length; i++) {
        // Add the next element and remove the first element of the previous window
        windowSum = windowSum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

// Example usage
const array = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log(`Maximum sum of a subarray of size ${k}: ${maxSumSubarray(array, k)}`);
// Output: Maximum sum of a subarray of size 3: 9 (subarray [5, 1, 3])
```

## LeetCode Example Problem

[LeetCode 643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

## Complexity Analysis

- **Time Complexity**: O(n) where n is the length of the array. We process each element at most twice (once when it enters the window and once when it leaves).
- **Space Complexity**: O(1) as we only use a fixed amount of extra space regardless of input size.

## When to Use

Use the fixed sliding window technique when:
- You need to find a subarray of fixed size k that satisfies certain conditions
- You want to avoid recalculating overlapping parts of subarrays
- The problem involves consecutive elements in an array or string
