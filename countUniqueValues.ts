// array of values is sorted
// using 2 pointers technique
const countUniqueValues = (values: number[]): number => {
 
    let i = 0;
    for(let j = 1; j< values.length; j++) {
      if(values[i] !== values[j]) {
        i++;
        values[i] = values[j];
      } else {
        j++;
      }
    }
    return i + 1;
  }
  