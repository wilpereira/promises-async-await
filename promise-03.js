function numberRandom(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const _fator = max - min + 1;
    const _random = parseInt(Math.random() * _fator) + min;

    resolve(_random);
  });
}

numberRandom(100, 500)
  .then((num) => num * 10)
  .then(console.log);
