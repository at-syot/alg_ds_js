// backtracking
let nums = [5, 7, 9]
let place = []

const notSetNumber = (nums, place) => {
	for (let n of nums)  {
		if (place.indexOf(n) === -1) 
		return n
	}
}

const test = (nums, place, placeCount) => {
	if (place.length == placeCount) {
		place = place.slice(0, -1)
		return
	}

	for (let i = 0; i < placeCount; i++) {
		let p = place[i]
		if (!p) { // empty seat
			let n = notSetNumber(nums, place)
			place.push(n)

			test(nums, place, placeCount)
		}
	}
}

let r = test(nums, place, 3); 

{

	const permutation = (res, nums, place, used) => {
		// goal
		if (place.length == nums.length) {
			res.push(place)
			return
		}

		for (n of nums) {
			// choices
			n = Number(n)
			if (!(n in used)) {
				used[n] = true
				place.push(n)

				permutation(res, nums, place, used)

				used[n] = false
				place.pop()
			}
		}
	}

	let res = []
	let r = permutation(res, [1, 2], [], {});
	res
}

// stack

// pmt([], [1,2], [1,2], {1,2: true}) ;pop; -> res = [[1,2]]
// pmt([], [1,2], [1,2], {1,2: true}) n=2,rm=nil -> res=[[1,2]],nums=[12],place[1],used={1: true}
// pmt([], [1,2], [1], {1: true}), n=1,rm=2


// ip = n 
// goal = parentheses length = n*2 

/*
*/
const generateBalancedParentheses = (n) => {
	
}

generateBalancedParentheses(Number(2))