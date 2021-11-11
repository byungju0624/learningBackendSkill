import jwt from "jsonwebtoken";
const secret = "2-fhSeuAhs+HYh%G&_jE7uzv6g_Gg^Rk";
const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secret,
  {
    expiresIn: 2,
  }
);
setTimeout(() => {
  jwt.verify(token, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);

console.log(token);
