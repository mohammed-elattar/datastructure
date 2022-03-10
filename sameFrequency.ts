const sameFrequency = (n1: number, n2: number): boolean => {
    if(n1 === n2) return true;
    const freq1: {[key: number]: number} = {};
  const freq2: {[key: number]: number} = {};
    while(n1 > 0) {
       const digit = n1 % 10 ;
        freq1[digit] ? freq1[digit] ++ : freq1[digit] = 1;
        
        n1 = Math.floor(n1 / 10);
    }

  while(n2 > 0) {
       const digit = n2 % 10 ;
        freq2[digit] ? freq2[digit] ++ : freq2[digit] = 1;
        
        n2 = Math.floor(n2 / 10);
    }

if (Object.keys(freq1).length !== Object.keys(freq2).length) {
  return false;
}

  for(let key in freq1) {
    if(!freq2[key]) return false;
    if(freq2[key] !== freq1[key]) return false;
  }

  return true;
  }

    console.log(sameFrequency(10029, 10092));
