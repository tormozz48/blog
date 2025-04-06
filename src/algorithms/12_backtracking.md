---
layout: algorithms/algorithm.njk
title: Backtracking
description: A general algorithmic technique that considers searching every possible combination to solve a computational problem
---

# Backtracking

## Description

Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, and removing those solutions that fail to satisfy the constraints of the problem at any point. It's essentially a depth-first search of the solution space, with pruning of branches that cannot lead to a valid solution.

## Use Cases

- Combinatorial problems (permutations, combinations, subsets)
- Constraint satisfaction problems (N-Queens, Sudoku)
- Parsing expressions
- Maze solving
- Path finding in graphs
- Game playing (like chess)
- Cryptarithmetic puzzles

## Code Example

```typescript
/**
 * Problem: Generate all permutations of a string
 * 
 * @param str Input string
 * @returns Array of all permutations
 */
function generatePermutations(str: string): string[] {
    const result: string[] = [];
    const chars = str.split('');
    
    // Helper function to generate permutations
    function backtrack(start: number): void {
        // Base case: If we've reached the end of the string
        if (start === chars.length - 1) {
            result.push(chars.join(''));
            return;
        }
        
        // Try each character as the next character in the permutation
        for (let i = start; i < chars.length; i++) {
            // Swap characters at positions start and i
            [chars[start], chars[i]] = [chars[i], chars[start]];
            
            // Recursively generate permutations for the rest of the string
            backtrack(start + 1);
            
            // Backtrack: restore the original order (swap back)
            [chars[start], chars[i]] = [chars[i], chars[start]];
        }
    }
    
    backtrack(0);
    return result;
}

/**
 * Problem: Generate all subsets of a set
 * 
 * @param nums Array of numbers representing the set
 * @returns Array of all subsets
 */
function generateSubsets(nums: number[]): number[][] {
    const result: number[][] = [];
    
    // Helper function to generate subsets
    function backtrack(start: number, current: number[]): void {
        // Add the current subset to the result
        result.push([...current]);
        
        // Try adding each remaining number to the current subset
        for (let i = start; i < nums.length; i++) {
            // Include the current number
            current.push(nums[i]);
            
            // Recursively generate subsets with the current number included
            backtrack(i + 1, current);
            
            // Backtrack: remove the current number
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

/**
 * Problem: Solve N-Queens problem
 * The N-Queens problem is to place N queens on an N×N chessboard so that no two queens attack each other.
 * 
 * @param n Size of the chessboard
 * @returns Array of all possible solutions, each represented as an array of strings
 */
function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: string[][] = Array(n).fill(0).map(() => Array(n).fill('.'));
    
    // Helper function to check if a queen can be placed at position (row, col)
    function isValid(row: number, col: number): boolean {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        
        // Check upper-left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        
        // Check upper-right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        
        return true;
    }
    
    // Helper function to convert the board to the required format
    function formatBoard(): string[] {
        return board.map(row => row.join(''));
    }
    
    // Backtracking function to place queens row by row
    function backtrack(row: number): void {
        // Base case: If all queens are placed
        if (row === n) {
            result.push(formatBoard());
            return;
        }
        
        // Try placing a queen in each column of the current row
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                // Place the queen
                board[row][col] = 'Q';
                
                // Recursively place queens in the next row
                backtrack(row + 1);
                
                // Backtrack: remove the queen
                board[row][col] = '.';
            }
        }
    }
    
    backtrack(0);
    return result;
}

// Example usage
console.log("Permutations of 'abc':", generatePermutations("abc"));
// Output: Permutations of 'abc': ["abc", "acb", "bac", "bca", "cab", "cba"]

console.log("Subsets of [1, 2, 3]:", generateSubsets([1, 2, 3]));
// Output: Subsets of [1, 2, 3]: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]

console.log("Solutions to 4-Queens problem:", solveNQueens(4));
// Output: Solutions to 4-Queens problem: [
//   [".Q..", "...Q", "Q...", "..Q."],
//   ["..Q.", "Q...", "...Q", ".Q.."]
// ]
```

## LeetCode Example Problems

- [LeetCode 46. Permutations](https://leetcode.com/problems/permutations/)
- [LeetCode 78. Subsets](https://leetcode.com/problems/subsets/)
- [LeetCode 51. N-Queens](https://leetcode.com/problems/n-queens/)
- [LeetCode 37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
- [LeetCode 79. Word Search](https://leetcode.com/problems/word-search/)
- [LeetCode 131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

## Complexity Analysis

The time and space complexity of backtracking algorithms can vary significantly depending on the specific problem:

- **Time Complexity**: 
  - For permutations: O(n!) where n is the length of the input string.
  - For subsets: O(2^n) where n is the size of the input set.
  - For N-Queens: O(n!) where n is the size of the chessboard.
  
- **Space Complexity**: 
  - O(n) for the recursion stack where n is the input size.
  - Additional space may be required to store the results.

## When to Use

Use backtracking when:
- You need to find all (or some) solutions to a problem
- The problem can be broken down into a sequence of decisions
- You need to explore all possible combinations or permutations
- The problem involves constraints that can be used to prune the search space
- You're working with problems that have a natural recursive structure
- Brute force would be too inefficient, but there's no known polynomial-time algorithm
