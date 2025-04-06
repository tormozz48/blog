---
layout: algorithms/algorithm.njk
title: Trie (Prefix Tree)
description: A specialized tree-based data structure used for efficient retrieval of keys in a dataset of strings
---

# Trie (Prefix Tree)

## Description

A Trie, also called a prefix tree, is a specialized tree-based data structure used for efficient retrieval of keys in a dataset of strings. Each node in the trie represents a single character of a string. The path from the root to a particular node forms a prefix of one or more strings in the dataset. Tries are particularly useful for implementing autocomplete features, spell checkers, and IP routing.

## Use Cases

- Autocomplete suggestions
- Spell checking
- Prefix matching
- Word games (like finding all words in a boggle board)
- IP routing (longest prefix matching)
- T9 predictive text
- Implementing dictionaries with prefix operations

## Code Example

```typescript
/**
 * Trie node structure
 */
class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
    
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

/**
 * Trie (Prefix Tree) implementation
 */
class Trie {
    private root: TrieNode;
    
    constructor() {
        this.root = new TrieNode();
    }
    
    /**
     * Insert a word into the trie
     * @param word Word to insert
     */
    insert(word: string): void {
        let current = this.root;
        
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
        }
        
        // Mark the end of the word
        current.isEndOfWord = true;
    }
    
    /**
     * Search for a word in the trie
     * @param word Word to search for
     * @returns True if the word exists in the trie, false otherwise
     */
    search(word: string): boolean {
        let current = this.root;
        
        for (const char of word) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        
        // Check if this is a complete word
        return current.isEndOfWord;
    }
    
    /**
     * Check if there is any word in the trie that starts with the given prefix
     * @param prefix Prefix to search for
     * @returns True if there is any word with the given prefix, false otherwise
     */
    startsWith(prefix: string): boolean {
        let current = this.root;
        
        for (const char of prefix) {
            if (!current.children.has(char)) {
                return false;
            }
            current = current.children.get(char)!;
        }
        
        return true;
    }
    
    /**
     * Get all words in the trie with the given prefix
     * @param prefix Prefix to search for
     * @returns Array of words with the given prefix
     */
    getWordsWithPrefix(prefix: string): string[] {
        const result: string[] = [];
        let current = this.root;
        
        // Navigate to the node corresponding to the prefix
        for (const char of prefix) {
            if (!current.children.has(char)) {
                return result;
            }
            current = current.children.get(char)!;
        }
        
        // Perform DFS from the prefix node to find all words
        this.dfs(current, prefix, result);
        
        return result;
    }
    
    /**
     * Helper function to perform DFS and collect words
     * @param node Current node
     * @param prefix Current prefix
     * @param result Array to store the words
     */
    private dfs(node: TrieNode, prefix: string, result: string[]): void {
        // If this is the end of a word, add it to the result
        if (node.isEndOfWord) {
            result.push(prefix);
        }
        
        // Explore all children
        for (const [char, childNode] of node.children.entries()) {
            this.dfs(childNode, prefix + char, result);
        }
    }
    
    /**
     * Delete a word from the trie
     * @param word Word to delete
     * @returns True if the word was deleted, false if it doesn't exist
     */
    delete(word: string): boolean {
        return this.deleteHelper(this.root, word, 0);
    }
    
    /**
     * Helper function to recursively delete a word
     * @param node Current node
     * @param word Word to delete
     * @param depth Current depth in the trie
     * @returns True if the node should be deleted, false otherwise
     */
    private deleteHelper(node: TrieNode, word: string, depth: number): boolean {
        // If we've reached the end of the word
        if (depth === word.length) {
            // If the word doesn't exist in the trie
            if (!node.isEndOfWord) {
                return false;
            }
            
            // Mark the end of the word as false
            node.isEndOfWord = false;
            
            // Return true if this node has no children (can be deleted)
            return node.children.size === 0;
        }
        
        const char = word[depth];
        
        // If the character doesn't exist in the trie
        if (!node.children.has(char)) {
            return false;
        }
        
        const childNode = node.children.get(char)!;
        const shouldDeleteChild = this.deleteHelper(childNode, word, depth + 1);
        
        // If the child should be deleted
        if (shouldDeleteChild) {
            node.children.delete(char);
            
            // Return true if this node has no children and is not the end of a word
            return node.children.size === 0 && !node.isEndOfWord;
        }
        
        return false;
    }
}

// Example usage
const trie = new Trie();

// Insert words
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("banana");
trie.insert("ball");

// Search for words
console.log("Search 'apple':", trie.search("apple"));         // true
console.log("Search 'app':", trie.search("app"));             // true
console.log("Search 'appl':", trie.search("appl"));           // false
console.log("Search 'orange':", trie.search("orange"));       // false

// Check prefixes
console.log("Starts with 'app':", trie.startsWith("app"));    // true
console.log("Starts with 'ban':", trie.startsWith("ban"));    // true
console.log("Starts with 'ora':", trie.startsWith("ora"));    // false

// Get words with prefix
console.log("Words with prefix 'app':", trie.getWordsWithPrefix("app"));
// Output: Words with prefix 'app': ["app", "apple", "application"]

// Delete a word
console.log("Delete 'apple':", trie.delete("apple"));         // true
console.log("Search 'apple' after deletion:", trie.search("apple")); // false
console.log("Search 'app' after deletion:", trie.search("app"));     // true
```

## LeetCode Example Problems

- [LeetCode 208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
- [LeetCode 211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
- [LeetCode 212. Word Search II](https://leetcode.com/problems/word-search-ii/)
- [LeetCode 648. Replace Words](https://leetcode.com/problems/replace-words/)
- [LeetCode 677. Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)

## Complexity Analysis

- **Time Complexity**:
  - Insertion: O(m) where m is the length of the word being inserted.
  - Search: O(m) where m is the length of the word being searched.
  - Prefix Search: O(m) where m is the length of the prefix.
  - Get Words with Prefix: O(n) where n is the total number of characters in all words with the given prefix.
  - Deletion: O(m) where m is the length of the word being deleted.
  
- **Space Complexity**: O(n * m) where n is the number of words and m is the average length of the words. In the worst case, if there are no common prefixes, the space complexity would be the sum of the lengths of all words.

## When to Use

Use a Trie when:
- You need to efficiently store and retrieve strings
- You need to perform prefix-based operations (like autocomplete)
- You're working with a large dictionary of words
- You need to check if a string is a prefix of any string in a dataset
- You're implementing a spell checker or a word game
- You need to find all words with a common prefix
