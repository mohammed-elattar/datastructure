// https://leetcode.com/problems/longest-common-prefix/submissions/
function longestCommonPrefix(strs: string[]): string {
    let min = Infinity;
    for(let i=0; i<strs.length; i++) {
        min = Math.min(min, strs[i].length);
    }

    let prefix = '';
    for(let j = 0; j < min; j++) {
        for(let i = 0; i< strs.length; i++) {
                if(strs[0][j] !== strs[i][j]) return prefix;
        }
        prefix += strs[0][j];
    }
    
    return prefix;
};