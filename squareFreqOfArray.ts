//check if square value of array elements is equal to another array elements , p.s arrays are not sorted
const same = (s1: number[], s2: number[]): boolean => {
    if(s1.length !== s2.length) return false;
    
    const freq1: any = {};
    const freq2: any = {};
    
    for(let i = 0; i< s1.length; i++) {
      freq1[s1[i]] = (freq1[s1[i]] || 0) + 1;
    }
  
    for(let i = 0; i< s1.length; i++) {
      freq2[s2[i]] = (freq2[s2[i]] || 0) + 1;
    }
  
    for(let i in freq1) {
      console.log(freq2[`${parseInt(i)**2}`], freq1[`${i}`]);
      if(!(parseInt(i)**2 in freq2)) return false;
      if(freq2[`${parseInt(i)**2}`] !== freq1[i]) return false;
    }
  
    console.log(freq1,freq2);
  
    return true;
  }
  
  console.log(same([1,3,7,4,3,3,3], [16,16,9,9,49,1]));  //false
  console.log(same([1,3,7,4,3,3], [16,16,9,9,49,1]));  //false
  console.log(same([1,3,7,4,3], [16,9,9,50,1]));  //false
  console.log(same([1,3,7,4,3], [16,9,9,49,1])); //true
  