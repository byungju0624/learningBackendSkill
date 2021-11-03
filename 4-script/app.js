const fs = require("fs");
const path = require("path");
const folder = process.argv[2];
const workingDir = path.join(__dirname, folder);
if (!folder || !fs.existsSync(workingDir)) {
  console.error("please enter folder name in 4-script");
}
console.log(workingDir);
const videoDir = path.join(workingDir, "video");
const duplicatedDir = path.join(workingDir, "duplicate");
const ficturedDir = path.join(workingDir, "fictured");

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);
!fs.existsSync(ficturedDir) && fs.mkdirSync(ficturedDir);

fs.promises //
  .readdir(workingDir) //
  .then(processFiles)
  .catch(console.error);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isFictureFile(file)) {
      move(file, ficturedDir);
    } else if (isDuplicateFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isFictureFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}

function isDuplicateFile(files, file) {
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }

  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises.rename(oldPath, newPath).catch(console.error);
}
