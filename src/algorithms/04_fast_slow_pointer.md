---
layout: algorithms/algorithm.njk
title: Fast and Slow Pointer
description: A technique using two pointers moving at different speeds to solve linked list problems
---

# Fast and Slow Pointer

## Description

The Fast and Slow Pointer technique (also known as the Tortoise and Hare algorithm) involves using two pointers that move through a sequence at different speeds. Typically, the fast pointer moves twice as fast as the slow pointer. This approach is particularly useful for detecting cycles, finding the middle element, or identifying patterns in linked lists or arrays.

## Use Cases

- Detecting cycles in a linked list
- Finding the middle node of a linked list
- Determining if a linked list is a palindrome
- Finding the start of a cycle in a linked list
- Detecting if a number is a happy number

## Code Example

```typescript
/**
 * Definition for singly-linked list node
 */
class ListNode {
    val: number;
    next: ListNode | null;
    
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * Problem: Detect if a linked list has a cycle
 * 
 * @param head Head of the linked list
 * @returns True if the linked list has a cycle, false otherwise
 */
function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        return false;
    }
    
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    // Fast pointer moves twice as fast as slow pointer
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;          // Move slow pointer one step
        fast = fast.next.next;      // Move fast pointer two steps
        
        // If there is a cycle, the fast and slow pointers will eventually meet
        if (slow === fast) {
            return true;
        }
    }
    
    // If fast pointer reaches the end, there is no cycle
    return false;
}

/**
 * Problem: Find the middle node of a linked list
 * 
 * @param head Head of the linked list
 * @returns The middle node of the linked list
 */
function middleNode(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }
    
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    // When fast reaches the end, slow will be at the middle
    while (fast !== null && fast.next !== null) {
        slow = slow!.next;          // Move slow pointer one step
        fast = fast.next.next;      // Move fast pointer two steps
    }
    
    return slow;
}

// Example usage
function createLinkedList(values: number[]): ListNode | null {
    if (values.length === 0) return null;
    
    const head = new ListNode(values[0]);
    let current = head;
    
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    
    return head;
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const list = createLinkedList([1, 2, 3, 4, 5]);
const middle = middleNode(list);
console.log(`Middle node value: ${middle?.val}`);
// Output: Middle node value: 3

// Create a linked list with a cycle: 1 -> 2 -> 3 -> 4 -> 2 (points back to 2)
const cycleList = createLinkedList([1, 2, 3, 4]);
let current = cycleList;
while (current!.next !== null) {
    current = current!.next;
}
// Create a cycle by pointing the last node to the second node
current!.next = cycleList!.next;

console.log(`Has cycle: ${hasCycle(cycleList)}`);
// Output: Has cycle: true
```

## LeetCode Example Problems

- [LeetCode 141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
- [LeetCode 876. Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
- [LeetCode 142. Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)

## Complexity Analysis

- **Time Complexity**: O(n) where n is the number of nodes in the linked list. In the worst case, we might need to traverse the entire list.
- **Space Complexity**: O(1) as we only use a fixed amount of extra space regardless of input size.

## When to Use

Use the fast and slow pointer technique when:
- You need to detect cycles in a linked list
- You need to find the middle element of a linked list
- You want to determine if a linked list is a palindrome
- You need to solve problems related to finding patterns or cycles in sequences
- You want to avoid using extra space for storing visited nodes
