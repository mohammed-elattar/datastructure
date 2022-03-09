const validAnagram = (s1: string, s2:string): Boolean => {
    const freq: {[key:string]: number} = {};
    if(s1.length !== s2.length) return false;
    for(let i = 0; i < s1.length; i++) {
        const letter = s1[i];
        (freq[letter]) ? freq[letter]++ : freq[letter] = 1;
    }

    for(let i = 0; i < s1.length; i++) {
        const letter = s2[i];
       if(!freq[letter]) return false;
       else freq[letter]--;
    }
    
    return true;
  }

console.log(validAnagram('bazzb', 'bbzza')); // true
console.log(validAnagram('bazbb', 'bbzza')); // false
console.log(validAnagram('bazzba', 'bbzza')); // false