class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Breadth-First Traversal, time complexity O(n)

const breadthFirstPrint = (root) => {
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    console.log(curr.val);
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
};

breadthFirstPrint(a); // a, b, c, d, e, f