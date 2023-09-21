// callback hell
// setTimeout(function () {
//   console.log("Carregando callback");

//   setTimeout(function () {
//     console.log("Carregando callback");

//     setTimeout(function () {
//       console.log("Carregando callback");
//     });
//   });
// }, 2000);

function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Execute");
      resolve();
    }, time);
  });
}

waitFor()
  .then(() => waitFor())
  .then(waitFor());
