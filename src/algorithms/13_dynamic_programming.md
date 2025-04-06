---
layout: algorithms/algorithm.njk
title: Dynamic Programming
description: A method for solving complex problems by breaking them down into simpler subproblems and storing their solutions to avoid redundant computations
---

# Dynamic Programming

## Description

Dynamic Programming (DP) is a technique used to solve problems by breaking them down into simpler overlapping subproblems and storing the results of these subproblems to avoid redundant calculations. It's particularly useful for optimization problems where we need to find the best solution among many possible solutions. There are two main approaches to implementing DP: top-down (memoization) and bottom-up (tabulation).

## Use Cases

- Optimization problems (finding minimum/maximum values)
- Counting problems (number of ways to achieve something)
- Path finding in graphs or grids
- String manipulation (edit distance, longest common subsequence)
- Resource allocation problems
- Knapsack problems
- Sequence alignment in bioinformatics

## Code Example

```typescript
/**
 * Problem: Fibonacci sequence using dynamic programming
 * 
 * @param n The nth Fibonacci number to calculate
 * @returns The nth Fibonacci number
 */
// Top-down approach (memoization)
function fibonacciMemoization(n: number): number {
    const memo: Record<number, number> = {};
    
    function fib(n: number): number {
        // Base cases
        if (n <= 1) return n;
        
        // Check if we've already computed this value
        if (memo[n] !== undefined) {
            return memo[n];
        }
        
        // Compute and store the result
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
    
    return fib(n);
}

// Bottom-up approach (tabulation)
function fibonacciTabulation(n: number): number {
    if (n <= 1) return n;
    
    const dp: number[] = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

/**
 * Problem: Longest Common Subsequence
 * Find the length of the longest subsequence present in both strings.
 * 
 * @param text1 First string
 * @param text2 Second string
 * @returns Length of the longest common subsequence
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    
    // Create a 2D DP table
    const dp: number[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    
    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[m][n];
}

/**
 * Problem: 0/1 Knapsack
 * Given weights and values of n items, put these items in a knapsack of capacity W
 * to get the maximum total value in the knapsack.
 * 
 * @param values Array of values
 * @param weights Array of weights
 * @param capacity Knapsack capacity
 * @returns Maximum value that can be put in the knapsack
 */
function knapsack(values: number[], weights: number[], capacity: number): number {
    const n = values.length;
    
    // Create a 2D DP table
    const dp: number[][] = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));
    
    // Fill the DP table
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Include the item
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]],
                    dp[i - 1][w]
                );
            } else {
                // Exclude the item
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    
    return dp[n][capacity];
}

/**
 * Problem: Coin Change
 * Find the minimum number of coins needed to make up a given amount.
 * 
 * @param coins Array of coin denominations
 * @param amount Target amount
 * @returns Minimum number of coins needed, or -1 if it's not possible
 */
function coinChange(coins: number[], amount: number): number {
    // Initialize DP array with amount + 1 (which is greater than any possible result)
    const dp: number[] = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    
    // Fill the DP array
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}

// Example usage
console.log("10th Fibonacci number (memoization):", fibonacciMemoization(10));
// Output: 10th Fibonacci number (memoization): 55

console.log("10th Fibonacci number (tabulation):", fibonacciTabulation(10));
// Output: 10th Fibonacci number (tabulation): 55

console.log("Longest Common Subsequence of 'abcde' and 'ace':", longestCommonSubsequence("abcde", "ace"));
// Output: Longest Common Subsequence of 'abcde' and 'ace': 3

const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log("Maximum value in knapsack:", knapsack(values, weights, capacity));
// Output: Maximum value in knapsack: 220

console.log("Minimum coins for amount 11 with coins [1, 2, 5]:", coinChange([1, 2, 5], 11));
// Output: Minimum coins for amount 11 with coins [1, 2, 5]: 3 (5 + 5 + 1)
```

## LeetCode Example Problems

- [LeetCode 70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [LeetCode 1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
- [LeetCode 322. Coin Change](https://leetcode.com/problems/coin-change/)
- [LeetCode 300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [LeetCode 72. Edit Distance](https://leetcode.com/problems/edit-distance/)
- [LeetCode 518. Coin Change 2](https://leetcode.com/problems/coin-change-2/)

## Complexity Analysis

The time and space complexity of dynamic programming solutions depend on the specific problem:

- **Time Complexity**: 
  - Fibonacci (both approaches): O(n)
  - Longest Common Subsequence: O(m * n) where m and n are the lengths of the two strings
  - 0/1 Knapsack: O(n * W) where n is the number of items and W is the capacity
  - Coin Change: O(amount * n) where n is the number of coin denominations
  
- **Space Complexity**: 
  - Fibonacci (memoization): O(n) for the memoization table
  - Fibonacci (tabulation): O(n) for the DP array
  - Longest Common Subsequence: O(m * n) for the 2D DP table
  - 0/1 Knapsack: O(n * W) for the 2D DP table
  - Coin Change: O(amount) for the DP array

## When to Use

Use dynamic programming when:
- The problem can be broken down into overlapping subproblems
- The problem has an optimal substructure (optimal solution can be constructed from optimal solutions of its subproblems)
- You need to find an optimal solution (minimum/maximum)
- The problem involves making choices to arrive at a solution
- A greedy approach doesn't work
- The problem can be solved recursively, but the recursive solution is inefficient due to repeated calculations
