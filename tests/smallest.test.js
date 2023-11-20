const smallestInArray = require('../smallestInArray/smallestInArray.js');

test("El resultado debe ser 1", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const expected = 1
    expect(smallestInArray(testArray)).toBe(expected);
})