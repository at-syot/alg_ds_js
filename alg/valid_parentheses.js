const pair = {'(': ')', '[': ']', '{': '}'}
const isOpen = (s) => s === '[' || s === '{' || s === '('

{
	const valid = (s) => {
		let stack = []
		let valid = true
		for (b of s) {
			if (isOpen(b)) {
				stack.push(b)
			} else {
				let openB = stack.pop()
				valid = pair[openB] === b
			}
		}

		return stack.length == 0 && valid
	}
}

{
	const valid = (s) => {
		if (s.length == 2) {
			let a = s[0], b = s[1] // check 2
			return pair[a] == b
		}

		for (let [i, b] of Object.entries(s)) {
			if (!isOpen(b)) {
				if (i == 0) return false
				if (pair[s[i-1]] == b) { // check1
					i = Number(i)
					s = s.slice(0, i-1) + s.slice(i+1)
					return valid(s)
				}
				return false
				}
		}
	}

	let r = valid('{()[}{[()]}'); r
}