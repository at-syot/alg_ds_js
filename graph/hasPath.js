let graph = {
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2]
}

{
	function hasPath(graph, src, dst) {
		const dfs = (graph, curr, dst, visited) => {
			if (curr == dst) return true
			if (visited.has(curr)) return false

			visited.add(curr)
			let vertex = graph[curr]

			for (let nb of vertex) {
				if (dfs(graph, nb, dst, visited)) return true
			}

			return false
		}

		return dfs(graph, src, dst, new Set())
	}

	let found = hasPath(graph, 3, 4); found
}