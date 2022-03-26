let nums = [1, 2, 3];

{
  const buildUsableNums = (nums) => {
    let usableNums = {};
    for (let n of nums) {
      if (n in usableNums) usableNums[Number(n)] = 0;
      usableNums[Number(n)] = nums.filter((j) => j == n).length;
    }

    return usableNums;
  };

  const validState = (state, goal) => state.length == goal;
  const makeSolutions = (state, solutions, paths) => {
    let cpState = state.slice();
    let cpStateStr = cpState.join("-");
    if (!paths.has(cpStateStr)) {
      paths.add(cpStateStr);
      solutions.push(cpState);
    }
    return solutions;
  };

  const getCandidates = (state, nums, usableNums) => {
    usableNums = { ...usableNums };
    if (state.length == 0) {
      for (let k in usableNums) usableNums[k] = 0;
      return nums.slice();
    }

    let candidates = [];
    for (let n of nums) {
      n = Number(n);
      let existingLen = state.filter((j) => j == n).length;

      if (existingLen < usableNums[n] || existingLen == 0) {
        candidates.push(n);
        usableNums[n] -= 1;
      }
    }
    return candidates;
  };

  const solve = (nums, usableNums, state, paths, solutions) => {
    if (validState(state, nums.length))
      solutions = makeSolutions(state, solutions, paths);

    let candidates = getCandidates(state, nums, usableNums);
    for (candidate of candidates) {
      state.push(candidate);
      solve(nums, usableNums, state, paths, solutions);
      state.pop();
    }

    return solutions;
  };

  const permuteUniq = (nums) => {
    let usableNums = buildUsableNums(nums);
    let solutions = [];
    let state = [];
    let paths = new Set();

    return solve(nums, usableNums, state, paths, solutions);
  };
}
