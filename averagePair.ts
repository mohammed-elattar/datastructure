const averagePair = (nums: number[], targetAverage: number): boolean => {
    let start = 0;
    let end = nums.length -1;
  
    while(start < end) {
      const avg = (nums[start] + nums[end]) / 2;
      if ( avg === targetAverage) return true;
      else if (avg < targetAverage) start++;
      else end --;
    }
    
    return false;
  }
  
      console.log(averagePair([1,3,3,5,6,7,20,12,9], 8));
  