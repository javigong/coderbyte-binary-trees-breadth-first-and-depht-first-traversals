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

// Depth First Pre-Order Traversal Recursively

const preOrder = (root) => {
  // the tree is empty
  if (root === null) return;

  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}; // O(n) time, O(n) space

// print: self, left, right

preOrder(a); // abdecf
