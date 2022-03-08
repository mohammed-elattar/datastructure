const countChars = (s: string): { [key: string]: number; } => 
{
    const result: { [key: string]: number; } = {};
    const trimmedString = s.toLowerCase().trim();
    for(let i =0; i< trimmedString.length; i++) {
        const char = trimmedString[i];
        if((/[a-z0-9]/).test(char)) {
            result[char] ? result[char]++: result[char] = 1;
        }
    }
  return result;
}