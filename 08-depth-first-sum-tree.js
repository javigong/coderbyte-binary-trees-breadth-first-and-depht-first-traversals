class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Write a function, sumTree(root), that takes in the
// root of a binary tree as an argument.
//
// The function should return the total sum of all
// values in the tree. You can assume that the tree
// only contains number values.

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

//      3
//    /   \
//   2     7
//  / \     \
// 4  -2     5

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const sumTree = (root) => {
  const stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const curr = stack.pop();
    sum += curr.val

    // add curr's children to the top of the stack
    if (curr.right !== null) {
      stack.push(curr.right);
    }

    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }

  return sum;
}; // O(n) time, O(n) space

console.log(sumTree(a)); // 19
