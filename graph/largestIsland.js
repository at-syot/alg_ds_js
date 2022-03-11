let graph = {
	0: [8, 1, 5],
	1: [0],
	5: [0, 8],
	8: [0, 5],
	2: [3, 4],
	3: [2, 4],
	4: [3, 2, 10, 11, 12],
	10: [4],
	11: [4],
	12: [4]
}

{
	const largestIsland = (graph) => {
		const dfs = (curr, visited) => {
			if (visited.has(Number(curr))) return 0
			visited.add(Number(curr))

			let island = 1
			for (let nb of graph[curr]) {
				island += dfs(nb, visited)
			}

			return island
		}

		let largestIsland = 0
		let visited = new Set()
		for (let node in graph) {
			if (visited.has(Number(node))) continue
			
			let islandNodes = dfs(node, visited)
			if (islandNodes > largestIsland) {
				largestIsland = islandNodes
			}
		}

		return largestIsland
	}

	let r = largestIsland(graph); r
}

{
	const largestIsland = (graph) => {
		let largestIsland = 0
		let visited = new Set()
		for (let node in graph) {
			if (visited.has(Number(node))) continue

			let islandNodesCount = bfs(graph, node, visited)
			if (islandNodesCount > largestIsland) {
				largestIsland = islandNodesCount
			}
		}

		return largestIsland
	}

	const bfs = (graph, node, visited) => {
		let island = 0
		let queue = [node]
		
		while (queue.length > 0) {
			let curr = queue[0]
			queue = queue.slice(1)

			if (visited.has(Number(curr))) continue
			visited.add(Number(curr))
			island += 1

			for (let nb of graph[curr]) {
				queue.push(nb)
			}
		}

		return island
	}

	let r = largestIsland(graph); r
}