function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), time);
  });
}

// waitFor(2000)
//   .then(() => console.log("Console 1"))
//   .then(waitFor)
//   .then(() => console.log("Console 2"));

function returnValue() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 3000);
  });
}

async function execute() {
  let valor = await returnValue();

  await waitFor(1500);
  console.log(`Async/Await, ${valor}`);

  await waitFor(1500);
  console.log(`Async/Await, ${valor + 1}`);

  await waitFor(1500);
  console.log(`Async/Await, ${valor + 2}`);
}

execute();
