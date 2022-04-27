// https://leetcode.com/problems/fibonacci-number/
function fib(n: number): number {
    const values ={'0':0, '1':1};
    for(let i =2; i<= n; i++) {
        values[i] = values[i-1] + values[i-2];
    }
    
    return values[n];
};