let string = '';
const n = 5;
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += ' ';
  }
  for (let j = 1; j <= i; j++) {
    string += '*  ';
  }
  string += '\n';
}

console.log(string);
