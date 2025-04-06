---
layout: algorithms/algorithm.njk
title: Dynamic Sliding Window Algorithm
description: A technique to process arrays or strings by maintaining a variable-size window that adjusts based on specific conditions
---

# Dynamic Sliding Window Algorithm

## Description

The Dynamic Sliding Window algorithm is a technique used to process arrays or strings by maintaining a window of variable size that expands or contracts based on certain conditions. Unlike the fixed sliding window, the size of the window adjusts dynamically as we process the elements.

## Use Cases

- Finding the longest substring without repeating characters
- Finding the minimum size subarray sum greater than a given value
- Finding the longest substring with at most k distinct characters
- Finding the smallest subarray with a sum greater than or equal to a target value

## Code Example

```typescript
/**
 * Problem: Find the length of the longest substring without repeating characters
 * 
 * @param s Input string
 * @returns Length of the longest substring without repeating characters
 */
function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    
    const charMap = new Map<string, number>();
    let maxLength = 0;
    let left = 0;
    
    // Right pointer expands the window
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        
        // If character is already in the window, move left pointer to position after the last occurrence
        if (charMap.has(currentChar) && charMap.get(currentChar)! >= left) {
            left = charMap.get(currentChar)! + 1;
        }
        
        // Update the last position of the character
        charMap.set(currentChar, right);
        
        // Update maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// Example usage
const str = "abcabcbb";
console.log(`Length of longest substring without repeating characters: ${lengthOfLongestSubstring(str)}`);
// Output: Length of longest substring without repeating characters: 3 (substring "abc")
```

## LeetCode Example Problem

[LeetCode 3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Complexity Analysis

- **Time Complexity**: O(n) where n is the length of the string. Each character is processed at most twice (once by the right pointer and at most once by the left pointer).
- **Space Complexity**: O(min(m, n)) where m is the size of the character set and n is the length of the string. In the worst case, we might need to store all characters of the string in the hash map.

## When to Use

Use the dynamic sliding window technique when:
- You need to find a subarray or substring that satisfies certain conditions but the size is not fixed
- The problem involves finding the longest/shortest subarray that meets specific criteria
- The problem can be solved by expanding and contracting a window based on certain conditions
- You want to avoid recalculating overlapping parts of subarrays
