const fs = require("fs");
const path = require("path");

const _path = path.join(__dirname, "dados.txt");

// function viewContent(_, content) {
//   console.log(content.toString());
// }

// fs.readFile(_path, viewContent);

function readFile(path) {
  return new Promise((resolve) => {
    // assicrono
    fs.readFile(path, function (_, content) {
      resolve(content.toString());
    });

    console.log("Lendo");
  });
}

readFile(_path).then((r) => console.log(r));
