---
layout: algorithms/algorithm.njk
title: Priority Queue
description: A data structure that serves elements based on their priority rather than their insertion order
---

# Priority Queue

## Description

A Priority Queue is an abstract data type similar to a regular queue, but where each element has a priority associated with it. Elements with higher priority are served before elements with lower priority. In cases where elements have the same priority, they are served according to their order in the queue.

## Use Cases

- Task scheduling based on priority
- Dijkstra's shortest path algorithm
- Prim's minimum spanning tree algorithm
- Huffman coding for data compression
- Event-driven simulation
- Load balancing in servers

## Code Example

```typescript
/**
 * A simple implementation of a Priority Queue using a binary heap
 * This implementation is a min priority queue (lower values have higher priority)
 */
class PriorityQueue<T> {
    private heap: Array<[T, number]>; // [element, priority]
    
    constructor() {
        this.heap = [];
    }
    
    /**
     * Get the size of the priority queue
     */
    size(): number {
        return this.heap.length;
    }
    
    /**
     * Check if the priority queue is empty
     */
    isEmpty(): boolean {
        return this.heap.length === 0;
    }
    
    /**
     * Get the highest priority element without removing it
     */
    peek(): T | undefined {
        return this.heap.length > 0 ? this.heap[0][0] : undefined;
    }
    
    /**
     * Add an element with a priority to the queue
     * @param element Element to add
     * @param priority Priority of the element (lower value means higher priority)
     */
    enqueue(element: T, priority: number): void {
        this.heap.push([element, priority]);
        this.bubbleUp(this.heap.length - 1);
    }
    
    /**
     * Remove and return the highest priority element
     */
    dequeue(): T | undefined {
        if (this.heap.length === 0) {
            return undefined;
        }
        
        const top = this.heap[0][0];
        const last = this.heap.pop()!;
        
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        
        return top;
    }
    
    /**
     * Bubble up the element at the given index to maintain the heap property
     * @param index Index of the element to bubble up
     */
    private bubbleUp(index: number): void {
        const element = this.heap[index];
        
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            
            // If the parent has higher or equal priority, we're done
            if (parent[1] <= element[1]) {
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
            
            // Check if the left child exists and has higher priority
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[1] < element[1]) {
                    swapIndex = leftChildIndex;
                }
            }
            
            // Check if the right child exists and has higher priority
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === -1 && rightChild[1] < element[1]) ||
                    (swapIndex !== -1 && rightChild[1] < leftChild![1])
                ) {
                    swapIndex = rightChildIndex;
                }
            }
            
            // If no swap is needed, we're done
            if (swapIndex === -1) {
                break;
            }
            
            // Swap with the higher priority child
            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            
            // Move down to the swapped index
            index = swapIndex;
        }
    }
}

/**
 * Problem: Merge k Sorted Arrays
 * 
 * @param arrays Array of sorted arrays
 * @returns A single sorted array containing all elements from the input arrays
 */
function mergeKSortedArrays(arrays: number[][]): number[] {
    const result: number[] = [];
    const pq = new PriorityQueue<[number, number, number]>(); // [value, arrayIndex, elementIndex]
    
    // Initialize the priority queue with the first element from each array
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            pq.enqueue([arrays[i][0], i, 0], arrays[i][0]);
        }
    }
    
    // Process the priority queue
    while (!pq.isEmpty()) {
        const [value, arrayIndex, elementIndex] = pq.dequeue()!;
        
        // Add the current minimum to the result
        result.push(value);
        
        // If there are more elements in the same array, add the next one to the queue
        const nextElementIndex = elementIndex + 1;
        if (nextElementIndex < arrays[arrayIndex].length) {
            const nextValue = arrays[arrayIndex][nextElementIndex];
            pq.enqueue([nextValue, arrayIndex, nextElementIndex], nextValue);
        }
    }
    
    return result;
}

// Example usage
const arrays = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];
console.log("Merged sorted arrays:", mergeKSortedArrays(arrays));
// Output: Merged sorted arrays: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Example of task scheduling
interface Task {
    id: number;
    name: string;
}

const taskQueue = new PriorityQueue<Task>();

// Add tasks with priorities
taskQueue.enqueue({ id: 1, name: "Critical bug fix" }, 1);
taskQueue.enqueue({ id: 2, name: "Feature implementation" }, 3);
taskQueue.enqueue({ id: 3, name: "Security patch" }, 2);
taskQueue.enqueue({ id: 4, name: "Documentation update" }, 4);

// Process tasks in order of priority
console.log("Processing tasks in priority order:");
while (!taskQueue.isEmpty()) {
    const task = taskQueue.dequeue()!;
    console.log(`Processing task: ${task.name} (ID: ${task.id})`);
}
// Output:
// Processing tasks in priority order:
// Processing task: Critical bug fix (ID: 1)
// Processing task: Security patch (ID: 3)
// Processing task: Feature implementation (ID: 2)
// Processing task: Documentation update (ID: 4)
```

## LeetCode Example Problems

- [LeetCode 23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [LeetCode 973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)
- [LeetCode 1046. Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)
- [LeetCode 621. Task Scheduler](https://leetcode.com/problems/task-scheduler/)

## Complexity Analysis

For a binary heap-based priority queue:

- **Time Complexity**:
  - Enqueue (insertion): O(log n)
  - Dequeue (extraction): O(log n)
  - Peek: O(1)
  
- **Space Complexity**: O(n) where n is the number of elements in the priority queue.

For the mergeKSortedArrays example:

- **Time Complexity**: O(n log k) where n is the total number of elements across all arrays and k is the number of arrays.
- **Space Complexity**: O(k) for storing the k elements in the priority queue.

## When to Use

Use a priority queue when:

- Elements need to be processed based on their priority rather than their insertion order
- You need to efficiently find and remove the element with the highest priority
- You're implementing algorithms like Dijkstra's or Prim's that require efficient access to the minimum/maximum element
- You need to schedule tasks or events based on priority
- You're merging multiple sorted lists or arrays
