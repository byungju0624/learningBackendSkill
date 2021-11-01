const path = require("path");
/*
PSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
windows:'C:\\temp\\myfile.html'
*/
console.log(__dirname); //현재 수행되는 디렉토리
console.log(__filename); // 현재 실행되는 파일

console.log(path.sep); //경로구분자
console.log(path.delimiter); //환경변수 구분자

//basename

console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname));
console.log("isAbsolute?", path.isAbsolute("../"));

//nomalize

console.log(path.normalize("./filder///////sub"));

//join
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
