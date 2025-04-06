---
layout: algorithms/algorithm.njk
title: Binary Tree DFS (Depth-First Search)
description: A technique to traverse or search a binary tree by exploring as far as possible along each branch before backtracking
---

# Binary Tree DFS (Depth-First Search)

## Description

Depth-First Search (DFS) is a traversal algorithm that explores a binary tree by going as deep as possible along each branch before backtracking. There are three common ways to perform DFS on a binary tree: preorder (root, left, right), inorder (left, root, right), and postorder (left, right, root) traversal.

## Use Cases

- Searching for a node in a binary tree
- Computing the height or depth of a binary tree
- Checking if a binary tree is balanced
- Validating if a binary tree is a valid BST (Binary Search Tree)
- Serializing and deserializing a binary tree
- Finding paths in a binary tree that satisfy certain conditions

## Code Example

```typescript
/**
 * Definition for a binary tree node
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    
    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Preorder traversal: Root -> Left -> Right
 * 
 * @param root Root of the binary tree
 * @returns Array of node values in preorder traversal
 */
function preorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function dfs(node: TreeNode | null): void {
        if (node === null) return;
        
        // Visit the root first
        result.push(node.val);
        
        // Then traverse left subtree
        dfs(node.left);
        
        // Finally traverse right subtree
        dfs(node.right);
    }
    
    dfs(root);
    return result;
}

/**
 * Inorder traversal: Left -> Root -> Right
 * 
 * @param root Root of the binary tree
 * @returns Array of node values in inorder traversal
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function dfs(node: TreeNode | null): void {
        if (node === null) return;
        
        // Traverse left subtree first
        dfs(node.left);
        
        // Then visit the root
        result.push(node.val);
        
        // Finally traverse right subtree
        dfs(node.right);
    }
    
    dfs(root);
    return result;
}

/**
 * Postorder traversal: Left -> Right -> Root
 * 
 * @param root Root of the binary tree
 * @returns Array of node values in postorder traversal
 */
function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    
    function dfs(node: TreeNode | null): void {
        if (node === null) return;
        
        // Traverse left subtree first
        dfs(node.left);
        
        // Then traverse right subtree
        dfs(node.right);
        
        // Finally visit the root
        result.push(node.val);
    }
    
    dfs(root);
    return result;
}

/**
 * Problem: Find the maximum depth (height) of a binary tree
 * 
 * @param root Root of the binary tree
 * @returns Maximum depth of the binary tree
 */
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    
    // Recursively find the depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // Return the maximum depth plus 1 (for the current node)
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage
// Create a binary tree:
//       1
//      / \
//     2   3
//    / \
//   4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Preorder traversal:", preorderTraversal(root));
// Output: Preorder traversal: [1, 2, 4, 5, 3]

console.log("Inorder traversal:", inorderTraversal(root));
// Output: Inorder traversal: [4, 2, 5, 1, 3]

console.log("Postorder traversal:", postorderTraversal(root));
// Output: Postorder traversal: [4, 5, 2, 3, 1]

console.log("Maximum depth:", maxDepth(root));
// Output: Maximum depth: 3
```

## LeetCode Example Problems

- [LeetCode 144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [LeetCode 94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
- [LeetCode 145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
- [LeetCode 104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## Complexity Analysis

- **Time Complexity**: O(n) where n is the number of nodes in the binary tree. We visit each node exactly once.
- **Space Complexity**: O(h) where h is the height of the binary tree. This is due to the recursion stack. In the worst case (skewed tree), the space complexity could be O(n).

## When to Use

Use Binary Tree DFS when:
- You need to explore all nodes in a binary tree
- You need to process nodes in a specific order (preorder, inorder, postorder)
- You're solving problems that require backtracking
- You need to find paths in a tree that satisfy certain conditions
- You're working with problems that have a natural recursive structure
