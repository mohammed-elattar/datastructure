// input is ordered 
const sumZeros = (arr: number[]): number[] => {
    let left = 0; 
    let right = arr.length - 1;
    while(left < right) {
      console.log(arr[left], arr[right]);
      const sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        if(sum > 0) { right-- } 
        else left++;
    }

    return [0];
}


console.log(sumZeros([-6, -2, 0, 1,2,3,4,5]));

