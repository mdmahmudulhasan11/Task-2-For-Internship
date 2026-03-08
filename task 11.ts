const u = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

const p = [
  { userId: 1, age: 25 },
  { userId: 2, age: 30 }
];

const r = u.map((x) => {
  const f = p.find((y) => y.userId === x.id);

  return {
    id: x.id,
    name: x.name,
    age: f?.age
  };
});

console.log(r);