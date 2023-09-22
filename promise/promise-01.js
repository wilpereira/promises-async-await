const name = ["João", "Pedro", "Tiago"];
const firstName = (name) => name[0];
const firstChar = (first) => first[0];

new Promise(function (resolve) {
  resolve(["João", "Pedro", "Tiago"]);
})
  .then(firstName)
  .then(firstChar)
  .then(console.log);
