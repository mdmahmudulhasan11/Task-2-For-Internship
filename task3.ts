const num = [1, 2, 3, 5, 6];

for (let i = 0; i < num.length; i++) {
  if (num[i] !== i + 1) {
    console.log(i + 1);
    break;
  }
}