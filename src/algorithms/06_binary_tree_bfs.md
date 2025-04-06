---
layout: algorithms/algorithm.njk
title: Binary Tree BFS (Breadth-First Search)
description: A technique to traverse or search a binary tree by exploring all nodes at the present depth before moving to nodes at the next depth level
---

# Binary Tree BFS (Breadth-First Search)

## Description

Breadth-First Search (BFS) is a traversal algorithm that explores a binary tree level by level, visiting all nodes at the current depth before moving to nodes at the next depth level. This approach is implemented using a queue data structure to keep track of nodes to visit.

## Use Cases

- Level-order traversal of a binary tree
- Finding the shortest path in an unweighted tree
- Computing the minimum depth of a binary tree
- Finding the closest nodes to the root
- Checking if a binary tree is complete
- Connecting nodes at the same level

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
 * Level-order traversal of a binary tree
 * 
 * @param root Root of the binary tree
 * @returns Array of node values in level-order traversal
 */
function levelOrderTraversal(root: TreeNode | null): number[] {
    if (root === null) return [];
    
    const result: number[] = [];
    const queue: TreeNode[] = [root];
    
    while (queue.length > 0) {
        // Get the node at the front of the queue
        const node = queue.shift()!;
        
        // Visit the node
        result.push(node.val);
        
        // Add its children to the queue
        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }
    
    return result;
}

/**
 * Level-by-level traversal of a binary tree
 * 
 * @param root Root of the binary tree
 * @returns Array of arrays, where each inner array contains node values at the same level
 */
function levelByLevelTraversal(root: TreeNode | null): number[][] {
    if (root === null) return [];
    
    const result: number[][] = [];
    const queue: TreeNode[] = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];
        
        // Process all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            
            // Add to current level
            currentLevel.push(node.val);
            
            // Add children to the queue for the next level
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        
        // Add the current level to the result
        result.push(currentLevel);
    }
    
    return result;
}

/**
 * Problem: Find the minimum depth of a binary tree
 * (The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node)
 * 
 * @param root Root of the binary tree
 * @returns Minimum depth of the binary tree
 */
function minDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    
    const queue: [TreeNode, number][] = [[root, 1]]; // [node, depth]
    
    while (queue.length > 0) {
        const [node, depth] = queue.shift()!;
        
        // If this is a leaf node, return its depth
        if (node.left === null && node.right === null) {
            return depth;
        }
        
        // Add children to the queue with incremented depth
        if (node.left !== null) {
            queue.push([node.left, depth + 1]);
        }
        if (node.right !== null) {
            queue.push([node.right, depth + 1]);
        }
    }
    
    return 0; // Should never reach here if the tree is valid
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

console.log("Level-order traversal:", levelOrderTraversal(root));
// Output: Level-order traversal: [1, 2, 3, 4, 5]

console.log("Level-by-level traversal:", levelByLevelTraversal(root));
// Output: Level-by-level traversal: [[1], [2, 3], [4, 5]]

console.log("Minimum depth:", minDepth(root));
// Output: Minimum depth: 2
```

## LeetCode Example Problems

- [LeetCode 102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [LeetCode 107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
- [LeetCode 111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
- [LeetCode 116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)

## Complexity Analysis

- **Time Complexity**: O(n) where n is the number of nodes in the binary tree. We visit each node exactly once.
- **Space Complexity**: O(w) where w is the maximum width of the binary tree. In the worst case, the queue might contain all nodes at the widest level of the tree. For a complete binary tree, this could be up to n/2 nodes.

## When to Use

Use Binary Tree BFS when:
- You need to traverse a tree level by level
- You're looking for the shortest path in an unweighted tree
- You need to find the minimum depth of a tree
- You want to process nodes based on their distance from the root
- You're solving problems that involve connecting nodes at the same level
