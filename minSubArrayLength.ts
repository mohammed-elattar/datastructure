//  https://leetcode.com/problems/minimum-size-subarray-sum/submissions/
// 209. Minimum Size Subarray Sum

function minSubArrayLen(target: number, nums: number[]): number {
    let total = 0;
        let start =0;
        let end=0;
        let minLen = Infinity;
        
        while(start < nums.length) {
            if(total < target && end < nums.length) {
                total += nums[end];
                end++;
            } else if(total >= target) {
                minLen = Math.min(minLen, end-start);
                total -= nums[start];
                start++;
            } else {
                break;
            }
        }
        
        return minLen === Infinity ? 0 : minLen;
    };

console.log(7, [2,3,1,2,4,3])    //2