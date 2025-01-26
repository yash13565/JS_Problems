// Find total salary of employees.
const person = [
  {
    name: "John",
    salary: 1000,
  },
  {
    name: "Jane",
    salary: 2000,
  },
  {
    name: "John",
    salary: 3000,
  },
  {
    name: "Rutvik",
    salary: 4000,
  },
];

const obj = {};

person.forEach((item) => {
    obj[item.name] = (obj[item.name] || 0) + item.salary;
});
console.log(obj);