---
layout: algorithms/algorithm.njk
title: Graph DFS (Depth-First Search)
description: A technique to traverse or search a graph by exploring as far as possible along each branch before backtracking
---

# Graph DFS (Depth-First Search)

## Description

Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. Starting from a selected node, DFS explores all possible paths by going as deep as possible before backtracking when it reaches a dead end. DFS can be implemented using recursion or an explicit stack.

## Use Cases

- Finding connected components in a graph
- Detecting cycles in a graph
- Topological sorting of a directed acyclic graph (DAG)
- Finding paths between two nodes
- Solving puzzles with only one solution, like mazes
- Generating a maze

## Code Example

```typescript
/**
 * Graph representation using adjacency list
 */
class Graph {
    private adjacencyList: Map<number, number[]>;
    
    constructor() {
        this.adjacencyList = new Map();
    }
    
    /**
     * Add a vertex to the graph
     * @param vertex Vertex to add
     */
    addVertex(vertex: number): void {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    
    /**
     * Add an edge between two vertices
     * @param vertex1 First vertex
     * @param vertex2 Second vertex
     * @param directed If true, adds a directed edge from vertex1 to vertex2
     */
    addEdge(vertex1: number, vertex2: number, directed: boolean = false): void {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2);
        }
        
        this.adjacencyList.get(vertex1)!.push(vertex2);
        
        if (!directed) {
            this.adjacencyList.get(vertex2)!.push(vertex1);
        }
    }
    
    /**
     * Get all vertices in the graph
     */
    getVertices(): number[] {
        return Array.from(this.adjacencyList.keys());
    }
    
    /**
     * Get all neighbors of a vertex
     * @param vertex Vertex to get neighbors for
     */
    getNeighbors(vertex: number): number[] {
        return this.adjacencyList.get(vertex) || [];
    }
    
    /**
     * Perform DFS traversal starting from a given vertex
     * @param startVertex Starting vertex for DFS
     * @returns Array of vertices in DFS order
     */
    dfs(startVertex: number): number[] {
        const result: number[] = [];
        const visited = new Set<number>();
        
        const dfsHelper = (vertex: number) => {
            // Mark the vertex as visited
            visited.add(vertex);
            
            // Add to result
            result.push(vertex);
            
            // Visit all neighbors
            for (const neighbor of this.getNeighbors(vertex)) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };
        
        // Start DFS from the given vertex
        dfsHelper(startVertex);
        
        return result;
    }
    
    /**
     * Iterative implementation of DFS using a stack
     * @param startVertex Starting vertex for DFS
     * @returns Array of vertices in DFS order
     */
    dfsIterative(startVertex: number): number[] {
        const result: number[] = [];
        const visited = new Set<number>();
        const stack: number[] = [startVertex];
        
        // Mark the starting vertex as visited
        visited.add(startVertex);
        
        while (stack.length > 0) {
            // Get the top vertex from the stack
            const vertex = stack.pop()!;
            
            // Add to result
            result.push(vertex);
            
            // Visit all neighbors in reverse order (to match recursive DFS)
            const neighbors = this.getNeighbors(vertex);
            for (let i = neighbors.length - 1; i >= 0; i--) {
                const neighbor = neighbors[i];
                if (!visited.has(neighbor)) {
                    // Mark as visited and add to stack
                    visited.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }
        
        return result;
    }
    
    /**
     * Check if there is a path between two vertices using DFS
     * @param startVertex Starting vertex
     * @param endVertex Target vertex
     * @returns True if there is a path, false otherwise
     */
    hasPath(startVertex: number, endVertex: number): boolean {
        const visited = new Set<number>();
        
        const dfsHelper = (vertex: number): boolean => {
            // If we reached the target, return true
            if (vertex === endVertex) {
                return true;
            }
            
            // Mark the vertex as visited
            visited.add(vertex);
            
            // Check all neighbors
            for (const neighbor of this.getNeighbors(vertex)) {
                if (!visited.has(neighbor)) {
                    if (dfsHelper(neighbor)) {
                        return true;
                    }
                }
            }
            
            return false;
        };
        
        return dfsHelper(startVertex);
    }
    
    /**
     * Find all paths between two vertices using DFS
     * @param startVertex Starting vertex
     * @param endVertex Target vertex
     * @returns Array of all possible paths
     */
    findAllPaths(startVertex: number, endVertex: number): number[][] {
        const paths: number[][] = [];
        const visited = new Set<number>();
        
        const dfsHelper = (vertex: number, path: number[]) => {
            // Mark the vertex as visited
            visited.add(vertex);
            
            // Add to current path
            path.push(vertex);
            
            // If we reached the target, add the path to the result
            if (vertex === endVertex) {
                paths.push([...path]);
            } else {
                // Continue DFS on unvisited neighbors
                for (const neighbor of this.getNeighbors(vertex)) {
                    if (!visited.has(neighbor)) {
                        dfsHelper(neighbor, path);
                    }
                }
            }
            
            // Backtrack: remove the vertex from path and mark as unvisited
            path.pop();
            visited.delete(vertex);
        };
        
        dfsHelper(startVertex, []);
        
        return paths;
    }
}

// Example usage
const graph = new Graph();

// Add vertices and edges to create a graph
// 0 -- 1 -- 2
// |    |    |
// 3 -- 4 -- 5
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

console.log("DFS traversal (recursive):", graph.dfs(0));
// Output: DFS traversal (recursive): [0, 1, 2, 5, 4, 3]

console.log("DFS traversal (iterative):", graph.dfsIterative(0));
// Output: DFS traversal (iterative): [0, 3, 4, 5, 2, 1]

console.log("Has path from 0 to 5:", graph.hasPath(0, 5));
// Output: Has path from 0 to 5: true

console.log("All paths from 0 to 5:", graph.findAllPaths(0, 5));
// Output: All paths from 0 to 5: [[0, 1, 2, 5], [0, 1, 4, 5], [0, 3, 4, 5]]
```

## LeetCode Example Problems

- [LeetCode 200. Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [LeetCode 207. Course Schedule](https://leetcode.com/problems/course-schedule/)
- [LeetCode 210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
- [LeetCode 332. Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
- [LeetCode 797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)

## Complexity Analysis

- **Time Complexity**: O(V + E) where V is the number of vertices and E is the number of edges in the graph. In the worst case, we need to visit all vertices and edges.
- **Space Complexity**: O(V) for the visited set and the recursion stack (or explicit stack in the iterative version). In the worst case, the recursion stack can grow to the size of the graph (e.g., in a skewed graph).

## When to Use

Use Graph DFS when:
- You need to explore all possible paths in a graph
- You're looking for a path between two nodes
- You need to detect cycles in a graph
- You need to perform topological sorting of a directed acyclic graph
- You're solving problems that require backtracking
- You're working with problems that have a natural recursive structure
- You need to find connected components in a graph
