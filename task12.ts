const d = [
  { product: "A", amount: 100 },
  { product: "B", amount: 200 },
  { product: "A", amount: 50 }
];

let total = 0;
const p: { [key: string]: number } = {};

for (let i = 0; i < d.length; i++) {
  total += d[i].amount;

  if (p[d[i].product]) {
    p[d[i].product] += d[i].amount;
  } else {
    p[d[i].product] = d[i].amount;
  }
}

const r = {
  totalSales: total,
  productSales: p
};

console.log(r);