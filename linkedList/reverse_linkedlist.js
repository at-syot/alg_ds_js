class ListNode {
	constructor(val, next) {
		this.val = val ? val : 0
		this.next = next ? next : null
	}
}

let one = new ListNode(1)
let two = new ListNode(2)
let tree = new ListNode(3)
let four = new ListNode(4)
let five = new ListNode(5)

one.next = two
two.next = tree
tree.next = four
four.next = five

{
	const lastNode = (node) => {
		for (let n = node; n; n = n.next) {
			if (!n.next) return n
		}
	}

	const reverseLinkedList = (node) => {
		if (!node) return

		let head = new ListNode(node.val, null)
		let rv = reverseLinkedList(node.next)

		if (!rv) return head

		lastNode(rv).next = head

		return rv
	}

	let reversed = reverseLinkedList(one);
}