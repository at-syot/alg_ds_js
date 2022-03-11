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
	function connectedComps(graph) {
		const dfs = (graph, curr, visited) => {
			if (visited.has(Number(curr))) return 
			visited.add(Number(curr))

			for (let nb of graph[curr]) {
				dfs(graph, nb, visited)
			}

			return true
		}

		let island = 0
		let visited = new Set()
		for (const node in graph) {
			if (visited.has(Number(node))) continue
			if (dfs(graph, node, visited)) { 
				island += 1
			}
		}

		return island
	}

	let island = connectedComps(graph);
}