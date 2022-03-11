let unsortedArr = [10, 1, 3, 2, 5, 7, 6, 8, 100]
// let unsortedArr = [10, 1, 3, 2]
let sortedArr = [1, 2, 3, 4, 5]

const isAcdSorted = (arr) => {
	if (arr.length <= 1) return true
	return arr[0] < arr[1] && isSorted(arr.slice(2))
}

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr

	const [left, right] = splitArr(arr)
	const leftH = mergeSort(left)
	const rightH = mergeSort(right)

	return merge(leftH, rightH)
}

// mergeSort l = [10] -> 10
// mergeSort l = [10] r = [1] -> merge [10] [1] -> [1, 10]
// mergeSort l = [10, 1] r = [3, 2] -> mergeSort [3] [2] -> merge [3] [2] -> [2, 3] -> [1, 10], [2, 3]
// mergeSort [10, 1, 3, 2]
// _____

const splitArr = (arr) => {
	let mid = Math.round(arr.length / 2) 
 	let left = arr.slice(0, mid)
	let right = arr.slice(mid, arr.length)
	return [left, right]
}

const merge = (left, right) => {
	let merged = []
	let tempLeft = [...left]
	let tempRight = [...right]
	let rightIdx = 0
	let leftIdx = 0

	while (leftIdx < left.length && rightIdx < right.length) {
		if (left[leftIdx] < right[rightIdx]) {

			merged.push(left[leftIdx])
			leftIdx += 1
			tempLeft = tempLeft.slice(leftIdx, tempLeft.length)

		} else {

			merged.push(right[rightIdx])
			rightIdx += 1
			tempRight = tempRight.slice(rightIdx, tempRight.length)

		}
	}

	if (tempLeft.length > tempRight.length) {
		tempLeft.forEach(v => merged.push(v))
	} else {
		tempRight.forEach(v => merged.push(v))
	}

	return merged
}

unsortedArr
let result = mergeSort(unsortedArr)
result