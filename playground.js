// valid parentheses
// input = "{{()}}"

let pairs = { "(": ")", "{": "}", "[": "]" };
let isOpen = (p) => Object.keys(pairs).indexOf(p) != -1;
let isPair = (leftP, rightP) => pairs[leftP] == rightP;
let isEmptyStack = (stack) => stack.length === 0;

// array as stack
let isValidParentheses = (p) => {
  if (p.length <= 1) return false;
  if (p.length == 2) return isPair(p[0], p[1]);

  let isValid = false;
  let pIdx = 1;
  let stack = [p[0]];
  while (!isEmptyStack(stack)) {
    let currP = p[pIdx];
    // console.log(currP);
    if (isOpen(currP)) {
      stack.push(currP);
    } else {
      let leftP = stack.pop();
      let rightP = currP;
      isValid = isPair(leftP, rightP);
    }

    pIdx += 1;
  }

  return isValid;
};

// test
// case 1
function testIsValidParentheses() {
  let case1 = "{}";
  console.log(isValidParentheses(case1) == true); // true

  let case2 = "";
  console.log(isValidParentheses(case2) == false); // true

  let case3 = "(({[]}))()";
  console.log(isValidParentheses(case3) == true); // true

  let case4 = "{}[][[()()]]";
  console.log(isValidParentheses(case4) == true); // true
}

// permutation
let operateArr = (arr, mod) => {
  let cp = arr.slice();
  cp = mod(cp);
  return cp;
};
let dropFirst = (arr) => operateArr(arr, (_arr) => _arr.shift());
let dropLast = (arr) => operateArr(arr, (_arr) => _arr.pop());

let input = ["a", "b", "c"];

function calRemainder(state, e) {
  let cpState = state.slice();
  let eIdx = cpState.indexOf(e);
  if (eIdx == -1) return state;

  return cpState.filter((item) => item != cpState[eIdx]);
}

function generatePermutation(input) {
  let solutions = [];
  let state = [];

  const permutation = (input, state) => {
    if (input.length == 0) {
      solutions.push(state.slice());
      return;
    }

    for (let e of input) {
      state.push(e);
      permutation(calRemainder(input, e), state);
      state.pop();
    }
  };

  permutation(input, state);

  return solutions;
}

// console.log(generatePermutation(["a", "b", "c"]));

// linkedList
class Node {
  constructor(value) {
    this.value = value || 0;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  forEach(operate) {
    for (let node = this.headNode; node != null; node = node.nextNode) {
      operate(node);
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

  shift() {
    if (!this.headNode) return;
    let shiftedHead = new Node(this.headNode.value);
    this.headNode = this.headNode.nextNode;

    return shiftedHead;
  }

  tail() {
    let tailNode;
    this.forEach((node) => {
      if (!node.nextNode) {
        tailNode = node;
      }
    });

    return tailNode;
  }

  addTail(node) {
    let tailNode = this.tail();
    if (tailNode) {
      tailNode.nextNode = node;
    }
  }

  length() {
    let _length = 0;
    this.forEach(() => (_length += 1));
    return _length;
  }

  print() {
    let formatted = [];
    let idx = 0;
    this.forEach((node) => {
      let nodeValue = node.value;
      if (idx === 0) {
        formatted.push(`head ${nodeValue}`);
      } else if (node.nextNode == null) {
        formatted.push(`${nodeValue} tail`);
      } else {
        formatted.push(nodeValue);
      }

      idx += 1;
    });

    return formatted.join(" - ");
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.nextNode = node2;
node2.nextNode = node3;

let linkedList = new LinkedList();
linkedList.addHead(node1);
linkedList.addHead(node4);
linkedList.addHead(node5);
// console.log(linkedList.print());
// console.log(linkedList.length());

// reverse linkedList
function reverse(linkedList) {
  if (linkedList.length() <= 1) return linkedList;

  let headNode = linkedList.shift();
  let reversed = reverse(linkedList);
  reversed.addTail(headNode);

  return reversed;
}

// console.log("input", linkedList.print());
// let reversedLinkedList = reverse(linkedList);
// console.log("###########");
// console.log(reversedLinkedList.print());

function reverseStr(str) {
  const reverse = (strArr) => {
    if (strArr.length <= 1) return strArr;

    let first = strArr.shift();
    let reversed = [...reverse(strArr), first];
    return reversed;
  };

  return reverse(str.split("")).join("");
}

// console.log(reverseStr("hello world"));

// merge sort
{
  function mergeSort(nums) {
    // baseCase
    if (nums.length <= 1) return nums;

    // devide
    let [left, right] = split(nums);
    let mergedLeft = mergeSort(left);
    let mergedRight = mergeSort(right);

    // conquer
    return merge(mergedLeft, mergedRight);
  }

  function split(nums) {
    let cpNums = nums.slice();
    let mid = Math.floor(cpNums.length / 2);

    let left = cpNums.slice(0, mid);
    let right = cpNums.slice(mid);

    return [left, right];
  }

  function merge(left, right) {
    let merged = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      let currLeft = left[leftIdx];
      let currRight = right[rightIdx];

      if (currLeft < currRight) {
        merged.push(currLeft);
        leftIdx += 1;
      } else {
        merged.push(currRight);
        rightIdx += 1;
      }
    }

    if (leftIdx < rightIdx) {
      left.slice(leftIdx).forEach((v) => merged.push(v));
    } else {
      right.slice(rightIdx).forEach((v) => merged.push(v));
    }

    return merged;
  }

  const nums = [9, 2, 3, 1, 4, 10];
  const [left, right] = split(nums);
  const merged = merge(left, right);
  console.log("merged", mergeSort(nums));
  // console.log(mergeSort([5, 3, 10, 4, 1, 6]));
}
