const isPalindrome = (x) => {
  const isPalindrome = (x, length) => {
    let str = padLeadingZero(length, String(x));
    str;
    if (length <= 1) return true;

    return (
      str[0] === str[str.length - 1] &&
      isPalindrome(Number(str.slice(1, str.length - 1)), str.length - 2)
    );
  };

  return isPalindrome(x, String(x).length);
};

const padLeadingZero = (pad, str) => {
  while (str.length < pad) str = "0" + str;
  return str;
};

const r = isPalindrome(100021);

function isPalindrome_twoPt(num) {
  let numStr = String(num);
  let start = 0;
  let end = numStr.length - 1;

  let isPalindrome = true;
  while (start <= end) {
    if (start == end) return true;

    let leftStr = numStr[start];
    let rightStr = numStr[end];
    console.log((start, leftStr), (end, rightStr));
    isPalindrome = leftStr == rightStr;

    start += 1;
    end -= 1;
  }

  return isPalindrome;
}
