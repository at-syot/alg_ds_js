let edges = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n']
]

// turn edges to adjacency graph
let edgesToAdjencencyGrap = (edges) => {
	let graph = []
	for (let edge of edges) {
		for (let i = 0; i < edge.length; i++) {
			// create key if not exist
			let node = edge[i]
			if (!(node in graph)) {
				graph[node] = []
			}

			// add pairNode to graph[node] if not exist
			let pairIdx = i == 0 ? 1 : 0
			let pairNode = edge[pairIdx]
			if (graph[node].indexOf(pairNode) == -1) {
				graph[node].push(pairNode)
			}
		}
	}

	return graph
}

{
	// stack
	let undirectedPath = (edges, n1, n2) => {
		let graph = edgesToAdjencencyGrap(edges); graph
		return hasPath(graph, n1, n2, new Set())
	}

	let hasPath = (graph, src, dst, visited) => {
		let stack = [src]

		while (stack.length > 0) {
			let curr = stack.pop()

			// mask visited node
			if (!visited.has(curr) ) {
				visited.add(curr)

				for (let neighbor of graph[curr]) {
					if (neighbor == dst) return true
					stack.push(neighbor)
				}
			}
		}

		return false
	}

	// let r = undirectedPath(edges, 'o', 'm'); r
}

{ // stack recursively
	let undirectedPath = (edges, n1, n2) => {
		let graph = edgesToAdjencencyGrap(edges); graph
		return hasPath(graph, n1, n2, new Set()) 
	}

	let hasPath = (graph, src, dst, visited) => {
		if (visited.has(src)) return false
		if (src == dst) return true

		visited.add(src)
		for (let neighbor of graph[src]) {
			if (hasPath(graph, neighbor, dst, visited)) return true
		}
		
		return false
	}

	// let r = undirectedPath(edges, 'i', 'l'); r
}

{ // queue *breadthFirstSearch
	let undirectedPath = (edges, n1, n2) => {
		let graph = edgesToAdjencencyGrap(edges); graph
		return hasPath(graph, n1, n2)
	}

	let hasPath = (graph, src, dst) => {
		let queue = [src]
		let visited = new Set()
		while (queue.length > 0) {
			let curr = queue[0]
			queue = queue.slice(1)

			if (!visited.has(curr)) {
				visited.add(curr)

				for (let neighbor of graph[curr]) {
					if (neighbor == dst) return true
					queue.push(neighbor)
				}
			}
		}

		return false
	}

	let r = undirectedPath(edges, 'n', 'o'); r
}

{ // find connectedComponent count
	let graph = {
		0: [8, 1, 5],
		1: [0],
		5: [0, 8],
		8: [0, 5],
		2: [3, 4],
		3: [2, 4],
		4: [3, 2]
	}

	const connectedComponentCount = (graph) => {
		let island = 0
		let visited = new Set()

		// graph's nodes interation
		for (const node in graph) {
			if (visited.has(String(node))) {
				continue
			}

			// node's comps traversal
			// breadthFirstSearch
			let queue = [node]
			while (queue.length > 0) {
				let curr = queue[0]

				if (visited.has(String(curr))) {
					island += 1
					break
				}

				visited.add(String(curr))
				queue = queue.slice(1)

				for (let neighbor of graph[curr]) {
					queue.push(neighbor)
				}
			}
		}

		island
	}

	connectedComponentCount(graph)
}

{ // largest island 
	let graph = {
		0: [8, 1, 5],
		1: [0],
		5: [0, 8],
		8: [0, 5],
		2: [3, 4],
		3: [2, 4],
		4: [3, 2]
	}
	let largestComponent = (graph) => {
		let largest = 0
		for (let node in graph) {
			let size = explore(graph, node, new Set())
			if (size > largest) largest = size
		}

		return largest
	}

	let explore = (graph, curr, visited) => {
		if (visited.has(String(curr))) return 0
		visited.add(String(curr)) 

		let size = 1
		for (let neighbor of graph[curr]) {
			size += explore(graph, neighbor, visited)
		}
		return size
	}

	let r = largestComponent(graph); r
}