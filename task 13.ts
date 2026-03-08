const u = [
  { name: "Hasan", username: "hasan123", email: "hasan@gmail.com" },
  { name: "Rahim", username: "rahim01", email: "rahim@yahoo.com" },
  { name: "Karim", username: "karim99", email: "karim@hotmail.com" }
];

const t = "rahim".toLowerCase();

const r = u.filter((x) =>
  x.name.toLowerCase().includes(t) ||
  x.username.toLowerCase().includes(t) ||
  x.email.toLowerCase().includes(t)
);

console.log(r);