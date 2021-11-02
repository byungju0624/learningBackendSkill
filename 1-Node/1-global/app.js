const fs = require("fs");
global.hello = () => {
  global.console.log("hello");
};

global.hello();
hello();
