import bcrypt from "bcrypt";
const password = "abcd1234";
const hashed = bcrypt.hashSync(password, 10);
console.log(hashed);

const result = bcrypt.compareSync("abcd1234", hashed);
console.log(result);
