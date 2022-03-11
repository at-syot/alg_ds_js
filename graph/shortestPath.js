const edges = [ 
	['w', 'x'], 
	['x', 'y'],
	['z', 'y'],
	['z', 'v'],
	['w', 'v']
]

function toAJC(edges) {
	const graph = {}
	for (let [l, r] of edges) {
		l = String(l); r = String(r)
		if (!(l in graph)) graph[l] = []
		if (!(r in graph)) graph[r] = []
		graph[l].push(r)
		graph[r].push(l)
	}

	return graph
}

{ // bfs
function shortetPath(edges, src, dst) {
	let graph = toAJC(edges)
	let visited = new Set()
	let queue = [{node: src, path: 0}]
	while (queue.length > 0) {
		let { node, path } = queue.shift()
		node = String(node)

		if (visited.has(node)) continue
		visited.add(node)

		if (node == dst) {
			return path
		}
		
		for (let nb of graph[node]) {
			queue.push({node: nb, path: path+1})
		}
	}

	return -1
}

let path = shortetPath(edges, 'x', 'z');
} 

{ // dfs 
	const shortestPath = (edges, src, dst) => {
		let graph = toAJC(edges);
		let visited = new Set()
		let shortestPath = Object.keys(graph).length
		const dfs = (curr, dst) => {
			let { vertex, dest } = curr
			vertex = String(vertex)

			if (vertex === dst) {
				if (dest < shortestPath) shortestPath = dest
			}
			if (visited.has(vertex)) return
			visited.add(vertex)

			for (let nb of graph[vertex]) {
				dfs({ vertex: nb, dest: dest+1}, dst)
			}
		}

		dfs({ vertex: src, dest: 0 }, dst)
		return shortestPath
	}

	// dfs not work for finding shortest path
	let r = shortestPath(edges, 'x', 'z'); r
}