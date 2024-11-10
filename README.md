# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Answer

**checkPath()**: 

This function, in the worst case, will visit each vertex once. If we have V vertices and E edges, each vertex and its following edges will be explored recursively. This leads to $\Theta (V+E)$ time.

**hasCycle()**: 

This function in the worst case will iterate over every node in the graph. For each node that is *unexplored*, **checkPath()** is called. This leads a time of $\Theta (V) + \Theta (V+E) $.

**Final Complexity**

I can show that $\Theta(V) + \Theta (V+E) ∈ \Theta(V+E)$

## Sources

Viewed Caden's repository to see a different way of solving the problem: https://github.com/COSC3020/detecting-cycles-cadenmcfate/blob/main/code.js

Slide #27 of the graphs lecture for DFS related information.
