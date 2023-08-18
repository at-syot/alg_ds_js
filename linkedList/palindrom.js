class ListNode {
	constructor(val, next) {
		this.val = val ? val : 0
		this.next = next ? next : null
	}
}

let one = new ListNode(1)
let two = new ListNode(2)
let two_1 = new ListNode(2)
let one_1 = new ListNode(1)

one.next = two
two.next = two_1
two_1.next = one_1

const iterateNode = (node, cb, ) => {
	let i = 0
	for (let n = node; n; n = n.next) {
		cb([i, n])
		i += 1
	}
}

const lastNode = (node) => {
	let resNode = null
	iterateNode(node, ([i, n]) => {
		if (!n.next) {
			resNode = n
		}
	})
	return resNode
}

const nodeAtIndex = (head, idx) => {
	let node = null
	iterateNode(head, ([i, n]) => {
		if (idx == i) {
			node = n
		}
	})
	return node
}

const length = (node) => {
	let len = 0
	iterateNode(node, () => len += 1)
	return len
}

{
	const isPalindrome = (head) => {
		const isValid = (node, leftIndex, rightIndex, compaired, total) => {
			if ((total - compaired) <= 1) return true
			let leftNode = nodeAtIndex(node, leftIndex)
			let rightNode = nodeAtIndex(node, rightIndex)

			return leftNode.val == rightNode.val 
				&& isValid(node, leftIndex+1, rightIndex-1, compaired+2, total)
		}

		let total = length(head)
		return isValid(head, 0, total-1, 0, total)
	}

	let r = isPalindrome(one); r
}

// let len = length(one); len
// let a = nodeAtIndex(0); a
// one