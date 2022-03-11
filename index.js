const arr = [1, 2, 3, 4, 5]

function mod(_arr) {
	if (!_arr) { return }
	if (_arr.length <= 0) { return _arr }
	
	const copiedArr = [..._arr]
	copiedArr[0] = 10
}

const linkedListModule = require("./linked_list")
const Node = linkedListModule.Node
const LinkedList =  linkedListModule.LinkedList

const linkedList = new LinkedList()
linkedList.addHead(10)
linkedList.addHead(0)
linkedList.addHead(12)
linkedList.addTail(20)
linkedList.addTail(30)

const tail = linkedList.tail()
const linkedListStr = linkedList.toString()
// linkedListStr

// reverse linkedList
// merge sort linkedList