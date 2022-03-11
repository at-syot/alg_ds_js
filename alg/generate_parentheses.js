// backtracking
let nums = [5, 7, 9];

const permutation = (nums, place, solutions) => {
  if (place.length == nums.length) {
    solutions.push(place.slice());
    return;
  }

  for (let [i, n] of Object.entries(nums)) {
    if (place.indexOf(n) == -1) {
      n = Number(n);
      place.push(n);
      permutation(nums, place, solutions); // sol [[1, 2]]
      place.pop();
    }
  }

  return solutions;
};

let solutions = permutation([1, 2, 3], [], []);

/*
 */
// const generateBalancedParentheses = (n) => {};
// generateBalancedParentheses(Number(2));
