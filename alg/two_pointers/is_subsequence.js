{
  const isSubsequence = (s, t) => {
    if (s.length == 0) return true;

    let ptr_a = 0;
    for (let ptr_b in t) {
      if (t[ptr_b] == s[ptr_a]) {
        ptr_a += 1;
        if (ptr_a == s.length) return true;
      }
    }
    return false;
  };
  let res = isSubsequence("abc", "ahbgdc");
}
