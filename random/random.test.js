const getRandomNumbers = require('./random');


test('El numero aleatorio de balas sera menor que el limite', () => {
    expect(getRandomNumbers(100, 500)[0]).toBeLessThanOrEqual(100);
})

test('El numero aleatorio de dragones sera menor que el limite', () => {
    expect(getRandomNumbers(100, 500)[1]).toBeLessThanOrEqual(500);
})