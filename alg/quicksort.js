console.log("quick sort");

function quicksort(array) {
  partition(array, 0, array.length - 1);
}

function partition(array, leftIdx, rightIdx) {
  let pivot = array[0];
  let leftValue = array[leftIdx];
  let rightValue = array[rightIdx];

  while (leftIdx < rightIdx) {
    do {
      leftValue = array[leftIdx];
      if (leftValue > pivot || leftIdx == array.length - 1) break;
      leftIdx += 1;
    } while (true);

    do {
      rightValue = array[rightIdx];
      if (rightValue < pivot || rightIdx === 0) break;
      rightIdx -= 1;
    } while (true);

    swap(array, leftIdx, rightIdx);
  }

  console.log("swap", array);
}

function swap(array, leftIdx, rightIdx) {
  let tempRightValue = array[rightIdx];
  array[rightIdx] = array[leftIdx];
  array[leftIdx] = tempRightValue;
}

const arr = [10, 2, 1, 5, 9, 20, 24, 21];
console.log("origin", arr);
partition(arr.slice(), 0, arr.slice().length - 1);
