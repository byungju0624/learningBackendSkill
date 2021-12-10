// abcd1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm
type User = {
  id: string;

  password: string;

  email: string;
};
let users: User[] = [
  {
    id: "1",
    email: "bob@gmail.com",
    password: "$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm",
  },
];

export async function findByUsername(email: string) {
  return users.find((user) => user.email === email);
}

export async function findById(id: string) {
  return users.find((user) => user.id === id);
}

export async function createUser(user: User) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
