const str = "abcabcbb";
let max = "";

for (let i = 0; i < str.length; i++) {
  let temp = "";

  for (let j = i; j < str.length; j++) {
    if (temp.includes(str[j])) {
      break;
    }
    temp += str[j];
  }

  if (temp.length > max.length) {
    max = temp;
  }
}

console.log(max);