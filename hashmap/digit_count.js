function digit_count(num) {
  const memo = new Map();
  const _num = num.split("");
  _num.forEach((n) => {
    !memo.has(n)
      ? memo.set(n.toString(), 0)
      : (() => {
          let curr_digits = memo.get(n);
          curr_digits += 1;
          memo.set(n.toString(), curr_digits);
        })();
  });

  return _num.every((should_occur, i) => {
    const count = memo[i] ?? 0;
    return should_occur == count;
  });
}

const o = digit_count("1210");
// const o = digit_count("030");
o;
