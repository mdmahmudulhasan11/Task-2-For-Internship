const users = [
  { id: 1, name: "A", role: "admin" },
  { id: 2, name: "B", role: "user" },
  { id: 3, name: "C", role: "admin" }
];

const groupedUsers = users.reduce((acc, user) => {
  if (!acc[user.role]) {
    acc[user.role] = [];
  }

  acc[user.role].push(user);
  return acc;
}, {} as { [key: string]: { id: number; name: string; role: string }[] });

console.log(groupedUsers);