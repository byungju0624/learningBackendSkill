const buf = Buffer.from("Hi");
//유니코드로 표현
console.log(buf);
console.log(buf.length);
//ASCII CODE로 표현
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

//create

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); //fast
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

const newBuf = Buffer.concat([buf, buf2, buf3]);

console.log(newBuf.toString());
