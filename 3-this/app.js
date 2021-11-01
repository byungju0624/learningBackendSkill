function hello() {
  console.log(this);
  console.log(global === this);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberfunction() {
    console.log("------- class");
    console.log(this);
    console.log(this === global);
  }
}

const a = new A(1);
a.memberfunction();
console.log(this === module.exports);
