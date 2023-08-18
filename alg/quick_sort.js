const input = [2, 1, 3, 5, 10, 4, 6];
const quick_sort = (list) => {
  const len = list.length;
  if (len == 0 || len == 1) return list; // base case

  const pivot = list[len - 1];
  let first_greater_p = 0;
  let running_p = 0;

  // sort
  while (running_p < len) {
    const running_v = list[running_p];
    // if (running_v > pivot) {
    //   if (running_p > first_greater_p) {
    //     first_greater_p = running_p;
    //     running_p += 1;
    //     continue;
    //   }
    // } else {
    //   // swap
    //   const temp = list[first_greater_p];
    //   list[first_greater_p] = running_v;
    //   list[running_p] = temp;
    // }

    running_p += 1;
  }

  return list;
};

const sorted = quick_sort(input);
sorted;
