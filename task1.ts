type User = {
  id: number;
  name: string;
};

const data: User[] = [
  { id: 10, name: "A" },
  { id: 20, name: "B" },
  { id: 10, name: "A" },
  { id: 20, name: "C" },
  { id: 50, name: "B" }
];

const seen: { [key: number]: boolean } = {};

const uniqueData: User[] = data.filter((item: User) => {
  if (seen[item.id]) {
    return false;
  } else {
    seen[item.id] = true;
    return true;
  }
});

console.log(uniqueData);