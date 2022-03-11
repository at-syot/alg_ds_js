const isPalindrome = (x) => {
	const isPalindrome = (x, length) => {
		let str = padLeadingZero(length, String(x)); str
		if (length <= 1) return true

		return str[0] === str[str.length-1] && 
			isPalindrome(Number( str.slice(1, str.length - 1) ), str.length - 2)
	}

	return isPalindrome(x, String(x).length)
}

const padLeadingZero = (pad, str) => {
	while (str.length < pad) str = "0" + str
	return str 
}

const r = isPalindrome(100021); r
