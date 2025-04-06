---
layout: algorithms/algorithm.njk
title: Graph BFS (Breadth-First Search)
description: A technique to traverse or search a graph by exploring all neighbors at the present depth before moving to nodes at the next depth level
---

# Graph BFS (Breadth-First Search)

## Description

Breadth-First Search (BFS) is a graph traversal algorithm that explores all vertices at the current depth level before moving to vertices at the next depth level. Starting from a selected node, BFS explores all its neighbors before moving to their neighbors. BFS is implemented using a queue data structure to keep track of nodes to visit.

## Use Cases

- Finding the shortest path in an unweighted graph
- Finding all nodes within a connected component
- Testing if a graph is bipartite
- Finding the minimum spanning tree of an unweighted graph
- Solving puzzles with the fewest moves
- Web crawling

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
     * Perform BFS traversal starting from a given vertex
     * @param startVertex Starting vertex for BFS
     * @returns Array of vertices in BFS order
     */
    bfs(startVertex: number): number[] {
        const result: number[] = [];
        const visited = new Set<number>();
        const queue: number[] = [startVertex];
        
        // Mark the starting vertex as visited
        visited.add(startVertex);
        
        while (queue.length > 0) {
            // Get the front vertex from the queue
            const vertex = queue.shift()!;
            
            // Add to result
            result.push(vertex);
            
            // Visit all unvisited neighbors
            for (const neighbor of this.getNeighbors(vertex)) {
                if (!visited.has(neighbor)) {
                    // Mark as visited and add to queue
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        
        return result;
    }
    
    /**
     * Find the shortest path between two vertices using BFS
     * @param startVertex Starting vertex
     * @param endVertex Target vertex
     * @returns Shortest path as an array of vertices, or empty array if no path exists
     */
    shortestPath(startVertex: number, endVertex: number): number[] {
        if (startVertex === endVertex) {
            return [startVertex];
        }
        
        const visited = new Set<number>();
        const queue: number[] = [startVertex];
        const predecessors = new Map<number, number>();
        
        // Mark the starting vertex as visited
        visited.add(startVertex);
        
        while (queue.length > 0) {
            // Get the front vertex from the queue
            const vertex = queue.shift()!;
            
            // Check all neighbors
            for (const neighbor of this.getNeighbors(vertex)) {
                if (!visited.has(neighbor)) {
                    // Mark as visited and add to queue
                    visited.add(neighbor);
                    predecessors.set(neighbor, vertex);
                    queue.push(neighbor);
                    
                    // If we reached the target, reconstruct the path
                    if (neighbor === endVertex) {
                        const path: number[] = [endVertex];
                        let current = endVertex;
                        
                        while (predecessors.has(current)) {
                            current = predecessors.get(current)!;
                            path.unshift(current);
                        }
                        
                        return path;
                    }
                }
            }
        }
        
        // No path found
        return [];
    }
    
    /**
     * Find the distances from a starting vertex to all other vertices
     * @param startVertex Starting vertex
     * @returns Map of vertices to their distances from the starting vertex
     */
    bfsDistances(startVertex: number): Map<number, number> {
        const distances = new Map<number, number>();
        const visited = new Set<number>();
        const queue: [number, number][] = [[startVertex, 0]]; // [vertex, distance]
        
        // Mark the starting vertex as visited
        visited.add(startVertex);
        distances.set(startVertex, 0);
        
        while (queue.length > 0) {
            // Get the front vertex and its distance from the queue
            const [vertex, distance] = queue.shift()!;
            
            // Visit all unvisited neighbors
            for (const neighbor of this.getNeighbors(vertex)) {
                if (!visited.has(neighbor)) {
                    // Mark as visited and add to queue with incremented distance
                    visited.add(neighbor);
                    distances.set(neighbor, distance + 1);
                    queue.push([neighbor, distance + 1]);
                }
            }
        }
        
        return distances;
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

console.log("BFS traversal:", graph.bfs(0));
// Output: BFS traversal: [0, 1, 3, 2, 4, 5]

console.log("Shortest path from 0 to 5:", graph.shortestPath(0, 5));
// Output: Shortest path from 0 to 5: [0, 3, 4, 5] or [0, 1, 4, 5]

const distances = graph.bfsDistances(0);
console.log("Distances from vertex 0:");
for (const [vertex, distance] of distances.entries()) {
    console.log(`Vertex ${vertex}: ${distance}`);
}
// Output:
// Distances from vertex 0:
// Vertex 0: 0
// Vertex 1: 1
// Vertex 3: 1
// Vertex 2: 2
// Vertex 4: 2
// Vertex 5: 3
```

## LeetCode Example Problems

- [LeetCode 127. Word Ladder](https://leetcode.com/problems/word-ladder/)
- [LeetCode 133. Clone Graph](https://leetcode.com/problems/clone-graph/)
- [LeetCode 200. Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [LeetCode 286. Walls and Gates](https://leetcode.com/problems/walls-and-gates/)
- [LeetCode 994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)

## Complexity Analysis

- **Time Complexity**: O(V + E) where V is the number of vertices and E is the number of edges in the graph. In the worst case, we need to visit all vertices and edges.
- **Space Complexity**: O(V) for the visited set and the queue. In the worst case, all vertices might be added to the queue.

## When to Use

Use Graph BFS when:
- You need to find the shortest path in an unweighted graph
- You want to explore nodes level by level
- You need to find all nodes at a given distance from the starting node
- You're solving problems that require the fewest steps or moves
- You need to find the minimum spanning tree of an unweighted graph
- You're working with problems where the solution with the fewest steps is preferred
