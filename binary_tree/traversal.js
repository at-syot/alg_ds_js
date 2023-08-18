class Node {
	constructor(v) {
		this.value = v
		this.left = null
		this.right = null
	}
}

let five = new Node(5)
let eleven = new Node(11)
let tree = new Node(3)
let four = new Node(4)
let two = new Node(2)
let one = new Node(1)

five.left = eleven
five.right = tree
eleven.left = four
eleven.right = two
tree.right = one

{
	const inorderTraversal = (node, res) => {
		if (!node) return []
		
		inorderTraversal(node.left, res)
		inorderTraversal(node.right, res)
		res.push(node.value)

		return res
	}

	let r = inorderTraversal(five, []); r
}

{
	const inorderTraversal = (node) => {
		if (!node) return node

		let stack = [node]
		while (stack.length > 0) {
			let curr = stack.pop()

			if (curr.right) stack.push(curr.right)
			let v = curr.value; v
			if (curr.left) stack.push(curr.left)
		}
	}

	inorderTraversal(five)
}

{ // bfs
	const inorderTraversal = (node) => {
		if (!node) return node

		let queue = [node]
		while (queue.length > 0) {
			let curr = queue.shift()

			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)
		}
	}

	inorderTraversal(five)
}