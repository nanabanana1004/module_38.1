const users = [
  { name: "Анна", age: 17 },
  { name: "Иван", age: 25 },
  { name: "Ольга", age: 18 },
  { name: "Алексей", age: 15 }
];

const adults = users.filter(user => user.age >= 18);
const names = adults.map(user => user.name);

console.log(names); // ["Иван", "Ольга"]
