---
layout: algorithms/algorithm.njk
title: Heap Data Structure
description: A specialized tree-based data structure that satisfies the heap property
---

# Heap Data Structure

## Description

A heap is a specialized tree-based data structure that satisfies the heap property. In a min-heap, for any given node, the value of the node is less than or equal to the values of its children. In a max-heap, the value of the node is greater than or equal to the values of its children. Heaps are commonly implemented as binary trees and are used to efficiently find the minimum or maximum element.

## Use Cases

- Finding the k largest/smallest elements
- Implementing priority queues
- Heap sort algorithm
- Dijkstra's shortest path algorithm
- Median maintenance
- Merge k sorted lists

## Code Example

```typescript
/**
 * Implementation of a Min Heap
 */
class MinHeap {
    private heap: number[];
    
    constructor() {
        this.heap = [];
    }
    
    /**
     * Get the size of the heap
     */
    size(): number {
        return this.heap.length;
    }
    
    /**
     * Get the minimum element without removing it
     */
    peek(): number | undefined {
        return this.heap[0];
    }
    
    /**
     * Insert a new element into the heap
     * @param val Value to insert
     */
    insert(val: number): void {
        // Add the element to the end of the heap
        this.heap.push(val);
        
        // Bubble up to maintain the heap property
        this.bubbleUp(this.heap.length - 1);
    }
    
    /**
     * Remove and return the minimum element
     */
    extractMin(): number | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }
        
        const min = this.heap[0];
        const last = this.heap.pop()!;
        
        if (this.heap.length > 0) {
            // Move the last element to the root and sink down
            this.heap[0] = last;
            this.sinkDown(0);
        }
        
        return min;
    }
    
    /**
     * Bubble up the element at the given index to maintain the heap property
     * @param index Index of the element to bubble up
     */
    private bubbleUp(index: number): void {
        const element = this.heap[index];
        
        // Keep bubbling up while the parent is greater than the current element
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            
            // If the parent is less than or equal to the element, we're done
            if (parent <= element) {
                break;
            }
            
            // Swap with the parent
            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            
            // Move up to the parent index
            index = parentIndex;
        }
    }
    
    /**
     * Sink down the element at the given index to maintain the heap property
     * @param index Index of the element to sink down
     */
    private sinkDown(index: number): void {
        const length = this.heap.length;
        const element = this.heap[index];
        
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swapIndex = -1;
            
            // Check if the left child exists and is less than the current element
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) {
                    swapIndex = leftChildIndex;
                }
            }
            
            // Check if the right child exists and is less than the current element
            // and the left child
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === -1 && rightChild < element) ||
                    (swapIndex !== -1 && rightChild < leftChild!)
                ) {
                    swapIndex = rightChildIndex;
                }
            }
            
            // If no swap is needed, we're done
            if (swapIndex === -1) {
                break;
            }
            
            // Swap with the smaller child
            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            
            // Move down to the swapped index
            index = swapIndex;
        }
    }
}

/**
 * Problem: Find the k largest elements in an array
 * 
 * @param nums Array of numbers
 * @param k Number of largest elements to find
 * @returns Array of k largest elements
 */
function findKLargest(nums: number[], k: number): number[] {
    // Use a min heap to keep track of the k largest elements
    const minHeap = new MinHeap();
    
    for (const num of nums) {
        // If the heap has less than k elements, add the current element
        if (minHeap.size() < k) {
            minHeap.insert(num);
        } 
        // If the current element is larger than the smallest element in the heap,
        // remove the smallest and add the current element
        else if (num > minHeap.peek()!) {
            minHeap.extractMin();
            minHeap.insert(num);
        }
    }
    
    // Extract all elements from the heap to get the k largest elements
    const result: number[] = [];
    while (minHeap.size() > 0) {
        result.push(minHeap.extractMin()!);
    }
    
    return result;
}

// Example usage
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 3;
console.log(`The ${k} largest elements:`, findKLargest(nums, k));
// Output: The 3 largest elements: [5, 6, 9] (not necessarily in sorted order)
```

## LeetCode Example Problems

- [LeetCode 215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [LeetCode 347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [LeetCode 23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [LeetCode 295. Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

## Complexity Analysis

For a binary heap:

- **Time Complexity**:
  - Insertion: O(log n)
  - Extraction (min/max): O(log n)
  - Peek (min/max): O(1)
  - Building a heap from an array: O(n)
  
- **Space Complexity**: O(n) where n is the number of elements in the heap.

For the findKLargest example:
- **Time Complexity**: O(n log k) where n is the length of the input array and k is the number of largest elements to find.
- **Space Complexity**: O(k) for storing the k largest elements in the heap.

## When to Use

Use a heap when:
- You need to efficiently find and remove the minimum or maximum element
- You need to implement a priority queue
- You need to find the k largest/smallest elements
- You're working with algorithms that require efficient access to the minimum/maximum element, such as Dijkstra's algorithm
- You need to sort elements in O(n log n) time using heap sort
