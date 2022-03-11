const copy = (v) => 
	Object.assign(Object.create(Object.getPrototypeOf(v)), v)

class Node {
	constructor(val) {
		this.val = val === undefined ? 0 : val
		this.neighbors = []
	}
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)

node1.neighbors = [node2, node3]
node2.neighbors = [node1, node4]
node3.neighbors = [node1, node4]
node4.neighbors = [node2, node3]

{ // bfs
	const cloneGraph = (node) => {
		if (!node) return null

		let oldToNew = {}
		let queue = [node]

		while (queue.length > 0) {
			let curr = queue.shift()
			if (Number(curr.val) in oldToNew) continue

			let cp = new Node(curr.val)
			oldToNew[Number(cp.val)] = cp

			for (let nb of curr.neighbors) {
				if (Number(nb.val) in oldToNew) {
					let existing = oldToNew[Number(nb.val)]

					existing.neighbors.push(cp)
					cp.neighbors.push(existing)
				} else {
					queue.push(nb)
				}
			}
		}

		return oldToNew[node.val]
	}
}

{ // dfs
	const cloneGraph = (node) => {
		let map = {}
		const dfs = (node) => {
			if (node.val in map) {
				return map[node.val]
			}

			const cp = new Node(node.val) 
			map[cp.val] = cp
			
			for (let nb of node.neighbors) {
				cp.neighbors.push(dfs(nb))
			}

			return cp
		}

		return !node ? null : dfs(node)
	}
}