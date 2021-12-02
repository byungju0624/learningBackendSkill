// abcd1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm
type User = {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  url?: string;
};
let users: User[] = [
  {
    id: "1",
    username: "bob",
    password: "$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm",
    name: "Bob",
    email: "bob@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    username: "ellie",
    password: "$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm",
    name: "Ellie",
    email: "ellie@gmail.com",
  },
];

export async function findByUsername(username: string) {
  return users.find((user) => user.username === username);
}

export async function findById(id: string) {
  return users.find((user) => user.id === id);
}

export async function createUser(user: User) {
  const created = { ...user, id: Date.now().toString() };
  users.push(created);
  return created.id;
}
