let grid = [
	['W', 'L', 'W', 'W', 'W'],
	['W', 'L', 'W', 'W', 'W'],
	['W', 'W', 'W', 'L', 'W'],
	['W', 'W', 'L', 'L', 'W'],
	['L', 'W', 'W', 'L', 'L'],
	['L', 'L', 'W', 'W', 'W'],
]

const islandCount = (grid) => {
	let rowLen = grid.length; 
	let colLen = grid[0].length; 
	let visited = new Set()
	let lands = 0

	for (let row = 0; row < rowLen; row++) {
		for (let col = 0; col < colLen; col++) {

			const dfsTraverse = (grid, row, col, visited) => {
				let rc = `${row},${col}`;
				let isRowInbounds = row > -1 && row < rowLen
				let isColInbounds = col > -1 && col < colLen
				let isInbounds = isRowInbounds && isColInbounds
				
				if (!isInbounds) return false
				if (grid[row][col] === 'W') return false
				if (visited.has(rc)) return false
				visited.add(rc) // add visited (row, col)

				dfsTraverse(grid, row - 1, col , visited)  // top
				dfsTraverse(grid, row + 1, col , visited) // bottom
				dfsTraverse(grid, row, col - 1 , visited)  // left
				dfsTraverse(grid, row, col + 1 , visited)  // right

				return true
			}

			if (dfsTraverse(grid, row, col, visited)) {
				lands += 1
			}
		}
	}

	return lands
}

let lands = islandCount(grid); lands
