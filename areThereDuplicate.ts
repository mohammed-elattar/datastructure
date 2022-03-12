const areThereDuplicate = (...arguments): boolean => {
    const freq: {[key: number]:boolean} = {};
    
      for(let i = 0; i < arguments.length; i++) {
        if(freq[arguments[i]]) return true;
        
        freq[arguments[i]] = true; 
      }
      
      return false;
    }
    
    // one line solution
    // const areThereDuplicate = (...arguments): boolean => {
    // return new Set(arguments).size !== arguments.length;
    // }
        console.log(areThereDuplicate(1, 2, 2));
    