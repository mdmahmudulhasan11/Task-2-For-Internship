const arr = [1, 2, 3, 4, 5, 6, 7];
const page = 2;
const limit = 3;

const start = (page - 1) * limit;
const end = start + limit;

const r = {
  data: arr.slice(start, end),
  totalPages: Math.ceil(arr.length / limit)
};

console.log(r);