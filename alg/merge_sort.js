function rec_length(list) {
  if (list.length == 0) return 0;
  let [, ...tail] = list;
  return 1 + length(tail);
}

function split(list) {
  if (list.length == 0) return [[], []];
  if (list.length == 1) {
    const [h] = list;
    return [[h], []];
  }

  const pivot = Math.floor(list.length / 2);
  const left = list.slice(0, pivot);
  const right = list.slice(pivot);

  return [left, right];
}

function merge(left, right) {
  const merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  if (right.length == 0) left.forEach((l) => merged.push(l));
  if (left.length == 0) right.forEach((r) => merged.push(r));
  return merged;
}

function merge_sort(list) {
  if (list.length == 0) return [];
  if (list.length == 1) return list;

  const [left, right] = split(list);
  const merged_left = merge_sort(left);
  const merged_right = merge_sort(right);
  return merge(merged_left, merged_right);
}

const merged = merge_sort([4, 1, 2, 5, 3]);

// function merge(left, right) {
//   const aux_merge = (acc, left, right) => {
//     if (left.length == 0 && right.length == 0) return acc;

//     const head = ([h]) => h;
//     const tail = ([, ...tail]) => tail;
//     if (left.length > 0 && right.length > 0) {
//       if (head(left) < head(right)) {
//         return aux_merge(acc.concat([head(left)]), tail(left), right);
//       }
//       return aux_merge(acc.concat([head(right)]), left, tail(right));
//     }

//     if (left.length == 0) {
//       return aux_merge(acc.concat([head(right)]), left, tail(right));
//     }
//     return aux_merge(acc.concat([head(left)]), tail(left), right);
//   };

//   return aux_merge([], left, right);
// }

// const merged = merge([1, 3, 7], [2, 6]);

function is_palindrom(list) {
  if (list.length <= 0) return true;

  let palindrom = true;
  let left = 0;
  let right = list.length - 1;
  while (left < right) {
    const left_v = list[left];
    const right_v = list[right];
    if (left_v != right_v) {
      palindrom = false;
    }

    left += 1;
    right -= 1;
  }
  return palindrom;
}

// const r = is_palindrom([1, 2, 3, 2, 1]);

function reverse(list) {
  if (list.length <= 1) return list;

  let lp = 0;
  let rp = list.length - 1;
  while (lp < rp) {
    const lv = list[lp];
    const rv = list[rp];
    list[lp] = rv;
    list[rp] = lv;

    lp += 1;
    rp -= 1;
  }

  return list;
}

// [1, 1, 2, 3, 3]
// f| s|
// .  -

function rm_duplicate(list) {
  const empty = "_";
  let f = 0;
  let s = 1;

  while (f != list.length - 1 && s != list.length - 1) {
    // check f value is empty
    if (typeof list[f] === "string") {
      const t = list[f];
      list[f] = list[s];
      list[s] = t;
      s += 1;
    } else {
      if (list[f] == list[s]) {
        list[s] = empty;
        f += 1;
        s += 1;
      } else {
        f += 1;
        // s += 1;
      }
    }
  }

  return list;
}

const r = rm_duplicate([1, 1, 2, 3, 3]);

function two_sum(list, target) {
  let pair_memo = [];
  let running_sum = 0;
  let lp = 0;
  let rp = list.length - 1;
  while (lp < rp && running_sum !== target) {
    pair_memo.push([lp + 1, rp + 1]);
    running_sum = list[lp] + list[rp];
    if (running_sum > target) {
      rp -= 1;
    } else {
      lp += 1;
    }
  }

  return pair_memo.pop();
}

two_sum([2, 7, 11, 15], 9);

function rotate_list(list, k) {
  let i = 0;
  while (i < list.length) {
    const t = list[i];
    list[i] = list[i + k];
    list[i + k] = t;

    i += 1;
  }
}

rotate_list([1, 2, 3, 4, 5, 6], 3);
