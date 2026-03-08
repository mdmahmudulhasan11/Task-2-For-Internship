const str = "aaabbcccc";
let r = "";
let c = 1;

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    c++;
  } else {
    r = r + str[i] + c;
    c = 1;
  }
}

console.log(r);