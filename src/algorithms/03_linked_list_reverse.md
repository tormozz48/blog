---
layout: algorithms/algorithm.njk
title: Linked List Reverse
description: A technique to reverse a linked list by changing the direction of pointers
---

# Linked List Reverse

## Description

Reversing a linked list is a fundamental operation that involves changing the direction of pointers so that each node points to its previous node instead of the next node. This technique is essential for many linked list problems and can be implemented both iteratively and recursively.

## Use Cases

- Reversing a linked list or parts of a linked list
- Detecting palindromes in a linked list
- Reordering linked lists
- Solving problems that require traversing a linked list in reverse order

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
 * Problem: Reverse a singly linked list
 * 
 * @param head Head of the linked list
 * @returns Head of the reversed linked list
 */
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    
    while (current !== null) {
        // Store the next node
        const nextTemp: ListNode | null = current.next;
        
        // Reverse the pointer
        current.next = prev;
        
        // Move prev and current one step forward
        prev = current;
        current = nextTemp;
    }
    
    // The new head is the previous last node
    return prev;
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

function printLinkedList(head: ListNode | null): void {
    const values: number[] = [];
    let current = head;
    
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    
    console.log(values.join(" -> "));
}

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original linked list:");
printLinkedList(list);

// Reverse the linked list
const reversedList = reverseList(list);
console.log("Reversed linked list:");
printLinkedList(reversedList);
// Output: 5 -> 4 -> 3 -> 2 -> 1
```

## LeetCode Example Problem

[LeetCode 206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Complexity Analysis

- **Time Complexity**: O(n) where n is the number of nodes in the linked list. We need to visit each node once.
- **Space Complexity**: O(1) as we only use a fixed amount of extra space regardless of input size.

## When to Use

Use the linked list reverse technique when:
- You need to reverse all or part of a linked list
- You need to process a linked list in reverse order
- You're solving problems that involve palindromes in linked lists
- You need to reorder elements in a linked list
