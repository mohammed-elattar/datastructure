const maxSubArraySum = (arr: number[], num: number) => {
    let tempSum = 0;
    let maxSum = 0;

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length ; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([1,2,1,2,6,9,55], 3));