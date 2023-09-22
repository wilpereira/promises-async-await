function numberRandom(min, max, time) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      const _fator = max - min + 1;
      const _random = parseInt(Math.random() * _fator) + min;

      resolve(_random);
    }, time);
  });
}

function generateNumbers() {
  return Promise.all([
    numberRandom(1, 60, 2000),
    numberRandom(1, 60, 4000),
    numberRandom(1, 60, 500),
    numberRandom(1, 60, 100),
    numberRandom(1, 60, 1000),
  ]);
}
generateNumbers().then(console.log);
