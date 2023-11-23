// deestructurar
const math = require("./math");

test('la suma de 1 y 2 es igual a 3', () => {
    expect(math.suma(1, 2)).toBe(3);
});

test('la suma de "1" y 2 es igual a 3', () => {
    expect(math.suma("1", 2)).toBe(3);
});

test('el numero 2 es par', () => {
    expect(math.esPar(2)).toBeTruthy();
});

test('el numero 3 es impar', () => {
    // expect(math.esPar(3)).not.toBeTruthy();
    expect(math.esPar(3)).toBeFalsy();
});