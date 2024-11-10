function hasCycle(graph) {
  explored = [];

  function checkPath(node, fromNode) {
    explored[node] = fromNode;

    paths = graph[node];

    for (pathIndex = 0; pathIndex < paths.length; pathIndex++) {
      nextNode = paths[pathIndex];

      if (!(nextNode in explored)) {
        if (checkPath(nextNode, node)) {
          return true;
        }
      } else if (explored[nextNode] !== node && explored[node] !== nextNode) {
        return true;
      }
    }

    return false;
  }

  for (start = 0; start < graph.length; start++) {
    if (!(start in explored) && checkPath(start, start)) {
      return true;
    }
  }
  return false;
}
