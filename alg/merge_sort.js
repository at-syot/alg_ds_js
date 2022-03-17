const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let [left, right] = split(arr);
  let l = mergeSort(left);
  let r = mergeSort(right);

  return merge(l, r);
};

const split = (arr) => {
  let mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
};

const merge = (a, b) => {};

mergeSort([3, 2, 1, 5, 10]);
