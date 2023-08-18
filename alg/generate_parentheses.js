// backtracking
let nums = [5, 7, 9];

const permutation = (nums, place, solutions) => {
  if (place.length == nums.length) {
    solutions.push(place.slice());
    return;
  }

  for (let [i, n] of Object.entries(nums)) {
    if (place.indexOf(n) == -1) {
      n = Number(n);
      place.push(n);
      permutation(nums, place, solutions); // sol [[1, 2]]
      place.pop();
    }
  }

  return solutions;
};

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
}

{
	const validState = (state, nums) => {
		return state.length == nums.length
	}

	const getCandidates = (state, nums) => {
		if (state.length == 0) return nums.slice()

		let candidates = []
		for (n of nums) {
			if (state.indexOf(n) === -1) 
			candidates.push(n)
		}

		return candidates
	}

	const solve = (nums, state, solutions) => {
		if (validState(state, nums)) {
			solutions.push(state.slice())
		}

		for (let candidate of getCandidates(state, nums)) {
			if (state.indexOf(candidate) == -1) {
				state.push(candidate)
				solve(nums, state, solutions)
				state.pop()
			}
		}

		return solutions
	}

	const permutation = () => {
		let solutions = []
		let nums = [1, 2, 3]
		let state = []

		return solve(nums, state, solutions)
	}

	let solutions = permutation();
}

{
	const validState = (state, goal) => state.length == goal
	const getCandidates = (state, goal) => {
		let bound = goal / 2
		let rmO = bound - state.filter(s => s == '(').length
		let rmC = bound - state.filter(s => s == ')').length
		if ((rmC - rmO) == 0)	return ['(']

		let candidates = []
		if (rmO > 0) candidates.push('(')
		if (rmC > 0 && (rmC - rmO) > 0) candidates.push(')')
		return candidates
	}

	const solve = (state, solutions, goal) => {
		if (validState(state, goal)) {
			solutions.push(state.slice().join(''))
		}

		for (c of getCandidates(state, goal)) {
			state.push(c)
			solve(state, solutions, goal)
			state.pop(c)
		}

		return solutions
	}

	const generateBalancedParentheses = (n) => {
		let goal = n * 2
		let solutions = []
		let state = []
		
		return solve(state, solutions, goal)
	}

	let r = generateBalancedParentheses(3); r
}