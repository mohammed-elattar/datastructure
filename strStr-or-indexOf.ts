function strStr(haystack: string, needle: string): number {
    if(!needle) return 0;
    let slideWindow =  '';
    for(let j =0; j < needle.length; j++) {
         slideWindow += haystack[j];
    }
    
for(let i = 0; i < haystack.length ; i++) {
        if(slideWindow === needle) return i ;
    
    slideWindow = slideWindow.substring(1);
    slideWindow += haystack[i+needle.length];
    
}
    
    return -1;
};

console.log(strStr("hello", 'll'));