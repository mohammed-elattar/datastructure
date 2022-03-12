function findLengthOfLCIS(nums: number[]): number {
    let temp = 1;
      let count = 0;
      for(let i = 0; i < nums.length - 1; i++) {
          if(nums[i+1] > nums[i]) {
              temp++
          } else {
              count = Math.max(temp, count)
              temp = 1
          }
      }
      
      return Math.max(count, temp);
  };