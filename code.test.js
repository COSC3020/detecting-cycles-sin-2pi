const fs = require("fs");

eval(fs.readFileSync("code.js") + "");

//Using adjacency lists
const g1 = [[1, 2], [0, 2], [0, 1]];

const g2 = [[1, 3], [0, 2], [1, 3], [0, 2]];

const g4 = [[1, 2], [0, 2], [0, 1], [4], [3]];

const g5 = [[1], [0], [3], [2]];

const g6 = [[]];

const g7 = [[1], [0]];

const g8 = [[1, 2], [0, 3, 4], [0, 3], [1, 2], [1]];

const tests = [
  { func: hasCycle, graph: g1, result: true, name: "Cycle Exists" },
  { func: hasCycle, graph: g2, result: true, name: "Cycle Exists" },
  { func: hasCycle, graph: g4, result: true, name: "Cycle Exists" },
  { func: hasCycle, graph: g5, result: false, name: "No Cycle Exists" },
  { func: hasCycle, graph: g6, result: false, name: "No Cycle Exists" },
  { func: hasCycle, graph: g7, result: false, name: "No Cycle Exists" },
  { func: hasCycle, graph: g8, result: true, name: "Cycle Exists" },
];

tests.forEach((test) => {
  const output = test.func(test.graph);
  if (output === test.result) {
    console.log(`${test.name} PASSED!`);
  } else {
    console.error(`${test.name} FAILED.`);
  }
});
