const copy = (v) => Object.assign(Object.getPrototypeOf(v), v)

// module.exports.Node = class {
class Node {
	constructor(v) {
		this.value = v
		this.previousNode = null
		this.nextNode = null
	}

	toString() {
		let str = ''
		for(let node = this; node; node = node.nextNode) {
			str += `${node.value} -> `
		}
		return str
	}
} 
// module.exports.LinkedList = class LinkedList {
class LinkedList {
	constructor() {
		this.headNode = null
	}

	addHead(v) {
		const node = new Node(v)
		if (!this.headNode) {
			this.headNode = node
			return 
		}

		this.headNode.previousNode = node
		node.nextNode = this.headNode
		this.headNode = node
	}

	nodeAtIdx(idx) {
		if (typeof idx !== 'number') return
		if (idx > this.length()) return
		
		let point = 0
		for (let node = this.headNode; node; node = node.nextNode) {
			if (point == idx) {
				return node
			}
			point += 1
		}
	}

	node(v) {
		for (let node = this.headNode; node; node = node.nextNode) {
			if (node.value == v) {
				return node
			}
		}
	}

	remove(v) {
		let node = this.node(v)
		if (!node) return

		let aaa = this.headNode; aaa
		// tail
		if (!node.nextNode) {
			this.headNode = null
			return
		}

		// head
		if (!node.previousNode) {
			this.headNode = node.nextNode
			this.headNode.previousNode = null
			return
		}

		node.previousNode.nextNode = node.nextNode
	}

	addTail(v) {
		const node = new Node(v)
		const tail = this.tail()

		node.previousNode = tail
		tail.nextNode = node
	}

	tail() {
		for (let node = this.headNode; node != null; node = node.nextNode) {
			if (node.nextNode == null) {
				return node
			}
		}
	}

	length() {
		let len = 0
		for (let node = this.headNode; node != null; node = node.nextNode) {
			len += 1
		}
		return len
	}

	toString() {
		let result = ""
		for (let node = this.headNode; node != null; node = node.nextNode) {
			const nodeV = node.value
			if (node.previousNode == null) {
				result += `[head] ${nodeV}`
			} else if (node.nextNode == null) {
				result += `[tail] ${nodeV}`
				return result 
			}

			result += `${nodeV}`
			result += ' -> '
		}

		return result
	}

	forEach(cb) {
		for (let node = this.headNode; node != null; node = node.nextNode) cb(node);
	}
}

const linkedList = new LinkedList()
linkedList.addHead(10)
linkedList.addTail(3)
linkedList.addHead(1)
linkedList.addTail(2)

const reverseLinkedList = (linkedList) => {
	if (linkedList.headNode.nextNode == null) {
		return linkedList
	}

	let head = {...linkedList.headNode}
	let remainLinkedList = new LinkedList()
	remainLinkedList.headNode = {...head.nextNode, previousNode: null}

	return appendLinkedList(reverseLinkedList(remainLinkedList), head.value) 
}

const appendLinkedList = (linkedList, v) => {
	linkedList.addTail(v)
	return linkedList
}

// let result = reverseLinkedList(linkedList)

// end reverse linkedlist

// 1, 3, 10, 2
// start merge sort linkedList
const mergeSort = (linkedList) => {
	if (!linkedList.headNode || !linkedList.headNode.nextNode) {
		return linkedList
	}

	let [left, right] = split(linkedList)
	let leftH = mergeSort(left)
	let rightH = mergeSort(right)

	let result = merge(leftH, rightH)
	// let a = result.toString(); a

	return result
}

const split = (linkedList) => {
	let len = linkedList.length()
	let mid = Math.round(len / 2)

	let midNode = linkedList.nodeAtIdx(mid)
	let copiedMidNode = Object.assign(Object.getPrototypeOf(midNode), midNode)

	let right = new LinkedList()
	right.headNode = copiedMidNode
	right.headNode.previousNode = null

	midNode.previousNode.nextNode = null
	let left = new LinkedList()
	left.headNode = linkedList.headNode

	let a = left.toString(); a
	a = right.toString(); a

	return [left, right]
}

const merge = (left, right) => {
	let mergedLinkedList = new LinkedList()
	mergedLinkedList.addHead(0) // add fake head

	// copy left linkedlist
	let tempLeft = new LinkedList()
	tempLeft.headNode = left.headNode

	// copy right linkedList
	let tempRight = new LinkedList()
	tempRight.headNode = right.headNode

	// iteration indicator
	let leftNode = left.headNode
	let rightNode = right.headNode

	while (leftNode != null && rightNode != null) {
		if (leftNode.value < rightNode.value) {
			mergedLinkedList.addTail(leftNode.value)
			tempLeft.remove(leftNode.value)

			leftNode = leftNode.nextNode
		} else {
			mergedLinkedList.addTail(rightNode.value)
			tempRight.remove(rightNode.value)

			rightNode = rightNode.nextNode
		}
	}

	// add remaining
	let appendRemain = (n) => mergedLinkedList.addTail(n.value)
	if (tempLeft.length() > tempRight.length()) {
		tempLeft.forEach(appendRemain)
	} else {
		tempRight.forEach(appendRemain)
	}

	// remove fake head
	mergedLinkedList.remove(0)
	return mergedLinkedList
}

// let mockLeft = new LinkedList()
// mockLeft.addHead(8)
// mockLeft.addTail(10)

// let mockRight = new LinkedList()
// mockRight.addHead(1)
// mockRight.addTail(7)
// let b = merge(mockLeft, mockRight).toString(); b

// let o = linkedList.toString(); o
let sortedLinkedList = mergeSort(linkedList)
let a = sortedLinkedList.toString(); a
