let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];
let names = namify(users);

function namify(users) {
  let names = users.map((user) => user.name);
  return names;
}

console.log(names);
