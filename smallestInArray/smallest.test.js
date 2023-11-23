const smallestInArray = require('./smallestInArray');


test('El numero menor en el arreglo [1000, 1, 100] es 1', () => {
    // la comparacion
    const testArray = [1000, 1, 100];
    expect(smallestInArray(testArray)).toBe(1);
});