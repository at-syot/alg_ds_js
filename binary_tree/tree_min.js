class Node {
  constructor(v) {
    this.value = v;
    this.left = null;
    this.right = null;
  }
}

let five = new Node(5);
let eleven = new Node(11);
let tree = new Node(3);
let four = new Node(4);
let anotherFive = new Node(5);
let twelve = new Node(12);

five.left = eleven;
five.right = tree;
eleven.left = four;
eleven.right = anotherFive;
tree.right = twelve;

{
  // dfs
  const minTree = (node) => {
    if (!node) return 0;

    let v = node.value;
    let left = minTree(node.left);
    let right = minTree(node.right);
    if (left > 0 && left < v) v = left;
    if (right > 0 && right < v) v = right;

    return v;
  };

  let min = minTree(five);
  min;
}

{
  // bfs
  const minTree = (node) => {
    if (!node) return 0;

    let min = node.value;
    let queue = [node];
    while (queue.length > 0) {
      let curr = queue.shift();
      if (curr.value < min) min = curr.value;

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    return min;
  };
}
