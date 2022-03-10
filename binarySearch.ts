// given array has to be sorted
const search = (arr: number[], num: number) => {
    let min = 0;
    let max = arr.length -1;
    while(min <= max) {
        const middle = Math.floor((min+max)/2);
        const currentItem = arr[middle];

        if(currentItem === num) return middle;

        if(currentItem < num) {
            min = middle + 1;
        } else {
            max = middle - 1;
        }
    }

    return -1;
}

console.log(search([1,4,5,6,8,9], 8));