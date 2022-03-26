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

{ // dfs
	const maxPathSum = (node) => {
		if (!node) return 0
		let v = node.value
		if (node.left && node.right) {
			let left = maxPathSum(node.left)
			let right = maxPathSum(node.right)
			if (left > right) {
				v += left
			} else {
				v += right
			}
		} else {
			v += maxPathSum(node.left)
			v += maxPathSum(node.right)
		}

		return v
	}

	let r = maxPathSum(five); r
} 

{ // bfs
	const maxPathSum = (node) => {

	}
}
