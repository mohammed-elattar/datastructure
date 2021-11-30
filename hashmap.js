/**
 * https://leetcode.com/problems/jewels-and-stones/
 */
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  let valuesWithFreq = {};

  for (let index = 0; index < stones.length; index++) {
    if (valuesWithFreq[stones[index]] == undefined) {
      valuesWithFreq[stones[index]] = 1;
    } else {
      valuesWithFreq[stones[index]] = valuesWithFreq[stones[index]] + 1;
    }
  }

  for (let index = 0; index < jewels.length; index++) {
    if (valuesWithFreq[jewels[index]] !== undefined) {
      count += valuesWithFreq[jewels[index]];
    } else {
      count += 0;
    }
  }

  return count;
};
