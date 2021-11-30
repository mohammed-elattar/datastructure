/**
 * https://leetcode.com/problems/length-of-last-word/
 * @param {string}
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;

  const stringLength = s.length;
  for (let i = stringLength - 1; i >= 0; i--) {
    if (s[i] == ' ') {
      if (count > 0) {
        return count;
      }
    } else {
      ++count;
    }
  }
  return count;
};
