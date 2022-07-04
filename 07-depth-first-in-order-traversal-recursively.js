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

// Depth First In-Order Traversal Recursively

const inOrder = (root) => {
  // the tree is empty
  if (root === null) return;

  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}; // O(n) time, O(n) space

// print: left, right

inOrder(a); // dbeacf
