const users = [
  { name: "C", age: 20 },
  { name: "A", age: 18 },
  { name: "D", age: 40 },
  { name: "B", age: 13 }
];

users.sort((a, b) => {
  if (a.age !== b.age) {
    return a.age - b.age;
  } else {
    return a.name.localeCompare(b.name);
  }
});

console.log(users);