//1.sort array based on name.
const arr = [
  {
    name: "yash",
  },
  {
    name: "harsh",
  },
  { name: "priya" },
];

// arr.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });

//alternative solution
arr.sort((a, b) => b.name.localeCompare(a.name));
// console.log(arr);

//2.sort array based on lastSeen.
const data = [
  { id: 2, name: "Bob", lastSeen: "2024-11-29T22:15:00Z" },
  { id: 3, name: "Charlie", lastSeen: "2024-11-27T16:45:00Z" },
  { id: 1, name: "Alice", lastSeen: "2024-11-28T14:30:00Z" },
  { id: 4, name: "Diana", lastSeen: "2024-11-28T09:15:00Z" },
];

data.sort((a, b) => {
  new Date(a.lastSeen).getTime() - new Date(b.lastSeen).getTime();
});
console.log(data, "data");
