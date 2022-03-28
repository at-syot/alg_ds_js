let nums = [1, 2, 3];

{
  // first try
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

{
  // second try -> permutation with group or number only # first stage #1

  // done
  const makeHashedNums = (nums) =>
    nums.reduce((pre, curr, _, arr) => {
      curr = Number(curr);
      pre[curr] = arr.filter((n) => n == curr).length;
      return pre;
    }, {});

  const validState = (state, goal) => state.length == goal;
  const makeCandidates = (state, nums, hashedNums) => {
    hashedNums = { ...hashedNums };
    if (state.length == 0) {
      // first state
      // candidates will have only distincted values
      return Object.keys(hashedNums).map((k) => Number(k));
    }

    let candidates = [];
    for (let n of nums) {
      n = Number(n);
      let existingLen = state.filter((i) => i == n).length;
      if (existingLen < hashedNums[n] || existingLen == 0) {
        candidates.push(n);
        hashedNums[n] -= 1;
      }
    }
    return candidates;
  };

  const solve = (nums, hashedNums, state, solutions, level) => {
    if (validState(state, nums.length)) {
      cpState = state.slice();
      cpStateStr = cpState.join(",");
      if (!solutions.has(cpStateStr)) solutions.add(cpStateStr);
    }
    let candidates = makeCandidates(state, nums, hashedNums);

    for (candidate of candidates) {
      state.push(candidate);
      solve(nums, hashedNums, state, solutions, level + 1);
      state.pop();
    }

    return solutions;
  };

  let nums = [1, 1, 3];
  let state = [];
  let solutions = new Set();
  let hashedNums = makeHashedNums(nums);
  solve(nums, hashedNums, state, solutions, 0);

  let response = [];
  for (let solution of solutions) {
    response.push(solution.split(",").map((n) => Number(n)));
  }
}
