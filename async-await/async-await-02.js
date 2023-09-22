function numberRandom(min, max, numberForbidden) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve, reject) => {
    const _fator = max - min + 1;
    const _random = parseInt(Math.random() * _fator) + min;

    if (numberForbidden.includes(_random)) {
      reject("Número repetido");
    } else {
      resolve(_random);
    }
  });
}

async function generateNumbers(qtd) {
  try {
    const numbers = [];
    for (let _ of Array(qtd).fill()) {
      // await numberRandom(1, 60, numbers);

      numbers.push(await numberRandom(1, 60, numbers));
    }

    return numbers;
  } catch (e) {
    throw "Repetido";
  }
}

generateNumbers(12).then(console.log).catch(console.log);

// numberRandom(1, 5, [1, 2, 4]).then(console.log).catch(console.log);
