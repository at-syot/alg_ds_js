function twosum(nums, target) {
  const visited = {};
  for (let i = 0; i < nums.length; i++) {
    const curr_v = nums[i];
    const diff = target - curr_v;
    if (diff in visited) {
      return [visited[diff], i];
    }

    visited[curr_v] = i;
  }
}

// const o = twosum([2, 7, 11, 15], 9);
// const o = twosum([3, 2, 4], 6);

function rec_twosum(nums, target) {
  const visited = {};
  const _do = (acc, i, nums) => {
    if (nums.length <= 0) return acc;
    if (acc.length == 2) return acc;

    const [n, ...rest] = nums;
    const diff_v = target - n;
    if (diff_v in visited) {
      acc[0] = visited[diff_v];
      acc[1] = i;
    } else {
      // marks curr_v as visited
      visited[n] = i;
      i += 1;
    }

    return _do(acc, i, rest);
  };
  return _do([], 0, nums);
}

// const o = rec_twosum([2, 7, 11, 15], 9);
const o = rec_twosum([3, 2, 4], 6);

function _reduce(fn, init, list) {
  const _do = (acc, list) => {
    if (list.length == 0) return acc;

    const [x, ...xs] = list;
    acc = fn(acc, x);
    return _do(acc, xs);
  };

  return _do(init, list);
}

// const r = _reduce((acc, curr) => (acc += `${curr}, `), "", [1, 2, 3]);
const r = _reduce(
  (acc, curr) => {
    acc.push(curr);
    return acc;
  },
  [],
  Object.entries({ a: 0, b: 0, c: 0 })
);

r;
