const arr = [1, 1, 1, 2, 2, 3];
const k = 2;

const obj: { [key: number]: number } = {};

for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
}

const r = Object.entries(obj)
  .sort((a, b) => b[1] - a[1])
  .slice(0, k)
  .map((x) => Number(x[0]));

console.log(r);