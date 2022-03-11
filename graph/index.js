let adjacencyGraph = {
	a: ['b', 'c'],
	b: ['d'],
	c: ['e'],
	d: ['f'],
	e: [],
	f: [],
}


let depthFirst = (graph, source) => {
	let stack = [ source ];
	while (stack.length > 0) {
		let curr = stack.pop()
		curr

		for (let node of graph[curr]) {
			stack.push(node)
		}
	}
}

let depthFirstRecursion = (graph, source) => {
	console.log(source)
	for (let neighbor of graph[source]) {
		depthFirstRecursion(graph, neighbor)
	}
}

// depthFirst(adjacencyGraph, 'a')
// depthFirstRecursion(adjacencyGraph, 'a')

let breadthFirstSearch = (graph, source) => {
	let queue = [source]

	while (queue.length > 0) {
		let curr = queue.pop()
		curr

		for (let neighbor of graph[curr]) {
			queue = [neighbor, ...queue.slice(0)];
		}
	}
}

breadthFirstSearch(adjacencyGraph, 'a')

// ploblem
{ // hasPath stack
	let hasPath = (graph, src, dst) => {
		let stack = [src]
		while (stack.length > 0) {
			let curr = stack.pop()
			for (let neighbor of graph[curr]) {
				if (neighbor === dst) { return true }

				stack.push(neighbor)
			}
		}

		return false
	}
	// let a = hasPath(adjacencyGraph, 'a', 'c'); a
}

{ // hasPath recursively
	let hasPath = (graph, src, dst) => {
		if (src == dst) return true

		for (let neighbor of graph[src]) {
			if (hasPath(graph, neighbor, dst)) return true 
		}

		return false
	}
	// let a = hasPath(adjacencyGraph, 'a', 'c');
}

{ // hasPath breadth first search 
	let hasPath = (graph, src, dst) => {
		let queue = [src]
		while (queue.length > 0) {
			let curr = queue[0]
			for (let neighbor of graph[curr]) {
				if (neighbor == dst) return true
				queue.push(neighbor)
			}

			queue = [...queue.slice(1)]
		}

		return false
	}

	let a = hasPath(adjacencyGraph, 'a', 'b'); a
}
