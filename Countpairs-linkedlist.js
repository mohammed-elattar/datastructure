// { Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printlist(head) {
  let current = head;
  let s = '';
  while (current !== null) {
    s += current.data + ' ';
    current = current.next;
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let n = parseInt(readLine());
    let input_ar1 = readLine()
      .split(' ')
      .map((x) => parseInt(x));
    let head1 = new Node(input_ar1[0]);
    let tail1 = head1;
    for (let i = 1; i < n; i++) {
      tail1.next = new Node(input_ar1[i]);
      tail1 = tail1.next;
    }
    let m = parseInt(readLine());
    let input_ar2 = readLine()
      .split(' ')
      .map((x) => parseInt(x));
    let head2 = new Node(input_ar2[0]);
    let tail2 = head2;
    for (let i = 1; i < m; i++) {
      tail2.next = new Node(input_ar2[i]);
      tail2 = tail2.next;
    }
    let x = parseInt(readLine());
    let obj = new Solution();
    let res = obj.countPairs(head1, head2, x);
    console.log(res);
  }
}

// } Driver Code Ends

//User function Template for javascript

/**
 * @param {Node} head1
 * @param {Node} head2
 * @param {number} x
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  countPairs(head1, head2, x) {
    let count = 0;
    let data = new Set();
    while (head1 !== null) {
      data.add(head1.data);
      head1 = head1.next;
    }

    while (head2 !== null) {
      if (data.has(x - head2.data)) {
        count++;
      }
      head2 = head2.next;
    }

    return count;
  }
}
