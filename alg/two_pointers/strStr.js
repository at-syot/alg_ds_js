const strStr = (haystack, needle) => {
  if (needle.length == 0) return 0;
  if (needle.length > haystack.length) return -1;
  for (let i in haystack) {
    let curr = haystack[i];
    let strFrame = haystack.slice(i, Number(i) + needle.length);
    if (curr == needle[0] && strFrame == needle) {
      return i;
    }
  }
  return -1;
};

let r = strStr("mississippi", "issip");
