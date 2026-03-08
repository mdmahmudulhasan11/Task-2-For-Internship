const arr = [1, 2, 3, 4, 5];
const size = 2;
const result: number[][] = [];

for (let i = 0; i < arr.length; i += size) {
  result.push(arr.slice(i, i + size));
}

console.log(result);