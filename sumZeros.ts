// input is ordered 
const countUniqueValues = (arr: number[]): number => {
    let j = 0;
    for(let i = 1; i< arr.length ; i++) {
        if(arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }

    return j + 1;
}


console.log(countUniqueValues([1,1,1,1,2,2,2,2,3,3,3,4,5,6,7,7,8,8,8,8,8]));

