// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
    let lowestPrice = prices[0];
        let max = 0
        for(let i = 1; i< prices.length ;i++) {
            if(lowestPrice > prices[i]) {
                lowestPrice = prices[i];
            } else {
                max = Math.max(max, prices[i] - lowestPrice);
            }
        }
        
        return max;
    
    };