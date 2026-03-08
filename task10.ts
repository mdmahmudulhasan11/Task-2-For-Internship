const str = "A man a plan a canal Panama";

const clean = str.toLowerCase().replaceAll(" ", "");
const rev = clean.split("").reverse().join("");

console.log(clean === rev);