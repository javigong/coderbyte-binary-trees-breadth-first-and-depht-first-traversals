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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// Depth First Traversal Recursively

const depthFirstPrint = (root) => {
  // the tree is empty
  if (root === null) return;

  console.log(root.val);
  depthFirstPrint(root.left);
  depthFirstPrint(root.right);
}; // O(n) time, O(n) space

depthFirstPrint(a); // abdecf

// Depth First Search Types:
// pre-order:   self, left, right
// post-oder:   left, right, self
// in-order:    left, self, right