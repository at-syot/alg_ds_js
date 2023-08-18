function two_sum(numbers, target) {
  let pair = [];
  let rp = 0;
  let lp = numbers.length - 1;
  while (rp < lp) {
    const r_v = numbers[rp];
    const l_v = numbers[lp];
    const sum = r_v + l_v;
    sum;
    if (sum == target) {
      pair.push(rp, lp);
      break;
    }

    if (sum > target) {
      lp -= 1;
    } else {
      rp += 1;
    }
  }

  return pair;
}
