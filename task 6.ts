const txt = "javascript is powerful and javascript is popular";

const arr = txt.split(" ");
const obj: { [key: string]: number } = {};

for (let i = 0; i < arr.length; i++) {
  const w = arr[i];

  if (obj[w]) {
    obj[w]++;
  } else {
    obj[w] = 1;
  }
}

let maxW = "";
let maxC = 0;

for (const w in obj) {
  if (obj[w] > maxC) {
    maxC = obj[w];
    maxW = w;
  }
}

console.log(maxW);