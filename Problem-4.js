const arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const value = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = {};

for (let v of value) {
  let count = 0;
  for (let x of arr) {
    if (x % v === 0) count++;
  }
  result[v] = count;
}

console.log(result);
