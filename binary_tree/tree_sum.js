class Node {
	constructor(v) {
		this.value = Number(v)
		this.left = null
		this.right = null
	}
}

let tree = new Node(3) 
let eleven = new Node(11)
let four = new Node(4)
let two = new Node(2)
let four_2 = new Node(4)
let one = new Node(1)

tree.left = eleven
tree.right = four_2
eleven.left = four
eleven.right = two
four_2.right = one

{
	const treeSum = (node) => {
		if (!node) return 0

		let v = node.value
		v += treeSum(node.left)
		v += treeSum(node.right)
		return v
	}

	let sum = treeSum(tree); sum
}