// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/

function generate(numRows: number): number[][] {
    const triangle: number[][] = [];
for(let i = 0;i< numRows; i++) {
    const row: number[] = [];
    row[0] = 1;
    row[i] = 1;
    for(let j = 1; j <=i; j++) {
        if(!row[j]) {
            row[j] = triangle[i-1][j] + triangle[i-1][j-1];
        }
    }
    
    triangle[i] = row;
}
    
    return triangle;
};