// https://leetcode.com/problems/palindromic-substrings/
const countPalindromic = (s: string, left: number, right:number): number => {
    let result = 0;
    while(left >= 0 && right < s.length && s[left] === s[right]) {
            result++;
            left--;
            right++;
        }
    
    return result;
}
function countSubstrings(s: string): number {
  let result = 0 ;
    for(let i = 0; i < s.length; i++) {        
        result += countPalindromic(s, i, i);
        result += countPalindromic(s, i, i + 1);
    }
    
    return result;
};
