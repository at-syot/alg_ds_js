const reverseStr = (str) => {
	if (str.length <= 1) return str
	
	let strArr = str.split("")
	let lastChar = strArr.pop();
	return lastChar+reverseStr(strArr.join(""))
}