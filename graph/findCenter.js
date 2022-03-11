let edges = [[1,2],[2,3],[4,2]]
const toAJC = (edges) => {
	let graph = {}
	for (let [l, r] of edges) {
		l = Number(l)
		r = Number(r)
		if (!(l in graph)) graph[l] = []
		if (!(r in graph)) graph[r] = []

		graph[l].push(r)
		graph[r].push(l)
	}

	return graph
}

{
	const findCenter = (edges) => {
		let centerVertex;
		let graph = toAJC(edges)
		let edgesLength = Object.keys(graph).length

		for (let node in graph) {
			let neighbors = graph[Number(node)]
			if (neighbors.length == edgesLength-1) {
				centerVertex = node
			}
		}

		return centerVertex
	} 


	let center = findCenter(edges)
	center
}