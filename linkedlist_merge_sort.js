class Node {
  constructor(value) {
    this.value = value || 0;
    this.nextNode = null;
  }

  clone() {
    return new Node(this.value);
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  forEach(operateFn) {
    for (let node = this.headNode; node; node = node.nextNode) {
      operateFn(node);
    }
  }

  addHead(node) {
    if (!this.headNode) {
      this.headNode = node;
      return;
    }

    node.nextNode = this.headNode;
    this.headNode = node;
  }

  tail() {
    let tailNode;
    this.forEach((node) => {
      if (!node.nextNode) tailNode = node;
    });
    return tailNode;
  }

  addTail(node) {
    //console.log("to tail", node.value);
    //if (!this.headNode) {
    //  this.headNode = node;
    //  return;
    //}

    let tailNode = this.tail();
    if (tailNode) {
      tailNode.nextNode = node;
    }
  }

  nodeAt(index) {
    let nodeAt;
    let currIdx = 0;
    this.forEach((node) => {
      if (currIdx === index) {
        nodeAt = node;
      }
      currIdx++;
    });

    return nodeAt;
  }

  slice(start, end) {
    let linkedlist = new LinkedList();
    let nodeIdx = 0;
    this.forEach((node) => {
      if (nodeIdx == start) {
        linkedlist.addHead(node.clone());
      } else {
        if (end && nodeIdx < end) {
          linkedlist.addTail(node.clone());
        } else if (!end) {
          linkedlist.addTail(node.clone());
        }
      }

      nodeIdx += 1;
    });

    return linkedlist;
  }

  length() {
    let length = 0;
    this.forEach(() => (length += 1));
    return length;
  }

  isEmpty() {
    return !this.headNode;
  }

  print() {
    let formatted = [];
    let nodeIdx = 0;
    this.forEach((node) => {
      let value = node.value;
      if (nodeIdx == 0) {
        formatted.push(`-> ${value}`);
      } else if (!node.nextNode) {
        formatted.push(`${value} <-`);
      } else {
        formatted.push(String(value));
      }

      nodeIdx += 1;
    });

    return formatted.join(" ");
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node5 = new Node(5);

const linkedlist = new LinkedList();
linkedlist.addHead(node2);
linkedlist.addHead(node1);
linkedlist.addHead(node3);
linkedlist.addTail(node5);

// merge sort linkedlist
{
  function mergeSort(linkedlist) {
    if (linkedlist.length() <= 1) return linkedlist;

    let [left, right] = split(linkedlist);
    let mergedLeft = mergeSort(left);
    let mergedRight = mergeSort(right);

    return merge(mergedLeft, mergedRight);
  }

  function split(linkedlist) {
    const mid = Math.floor(linkedlist.length() / 2);
    const left = linkedlist.slice(0, mid);
    const right = linkedlist.slice(mid);

    return [left, right];
  }

  function merge(left, right) {
    let mergedLinkedlist = new LinkedList();
    let leftIdx = 0;
    let rightIdx = 0;

    // prevent empty linkedList
    if (left.isEmpty() || right.isEmpty()) {
      console.log("some empty");
      return mergedLinkedlist;
    }

    // only first index
    if (left.headNode.value < right.headNode.value) {
      mergedLinkedlist.addHead(new Node(left.headNode.value));
      leftIdx++;
    } else {
      mergedLinkedlist.addHead(new Node(right.headNode.value));
      rightIdx++;
    }

    while (leftIdx < left.length() && rightIdx < right.length()) {
      let leftValue = left.nodeAt(leftIdx).value;
      let rightValue = right.nodeAt(rightIdx).value;

      if (leftValue < rightValue) {
        mergedLinkedlist.addTail(new Node(leftValue));
        leftIdx++;
      } else {
        mergedLinkedlist.addTail(new Node(rightValue));
        rightIdx++;
      }
    }

    // iterate the remaining
    if (leftIdx < rightIdx) {
      while (leftIdx < left.length()) {
        let nodeValue = left.nodeAt(leftIdx).value;
        mergedLinkedlist.addTail(new Node(nodeValue));
        leftIdx++;
      }
    } else {
      while (rightIdx < right.length()) {
        let nodeValue = right.nodeAt(rightIdx).value;
        mergedLinkedlist.addTail(new Node(nodeValue));
        rightIdx++;
      }
    }

    // console.log("left", left.print(), "right", right.print());
    // console.log("merged", mergedLinkedlist.print());
    // console.log("leftIdx", leftIdx, "rightIdx", rightIdx);

    return mergedLinkedlist;
  }

  const [left, right] = split(linkedlist);

  // const leftLL = new LinkedList();
  // const rightLL = new LinkedList();
  // leftLL.addHead(new Node(1));
  // leftLL.addTail(new Node(3));
  // rightLL.addHead(new Node(2));
  // rightLL.addTail(new Node(5));
  // merge(leftLL, rightLL);

  const merged = merge(left, right);
  console.log("original", linkedlist.print());
  console.log("sorted", mergeSort(linkedlist).print());
}
