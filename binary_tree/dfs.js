class Node {
	constructor(v) {
		this.value = v
		this.left = null
		this.right = null
	}
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

{
	const dfs = (node, dest) => {
		if (node.value == dest) return true

		if (node.left) {
			if (dfs(node.left, dest)) {
				return true
			}
		}

		if (node.right) {
			if (dfs(node.right, dest)) {
				return true
			}
		}

		return false
	}

	let r = dfs(a, 'f'); r
}

{
	const dfs = (node, dest) => {
		if (node.value === dest) return true
		let stack = [node]
		while (stack.length > 0) {
			let currNode = stack.pop()
			if (currNode.value === dest) return true

			if (currNode.left) {
				stack.push(currNode.left)
			} 

			if (currNode.right) {
				stack.push(currNode.right)
			}
		}

		return false
	}

	let r = dfs(a, 'b'); r
}

{ 
	const bfs = (node, dst) => {
		let queue = [node]
		while (queue.length > 0) {
			let curr = queue.shift()
			if (curr.value == dst) return true
			
			if (curr.left) queue.push(curr.left)
			if (curr.right) queue.push(curr.right)
		}

		return false
	}

	let r = bfs(a, 'g'); r
}