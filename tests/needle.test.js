const findNeedle = require('../needleInHaystack/needleInHaystack')

test("El resultado debe ser 'found the needle at position 5'", () => {
    const testArray = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']
    const expected = 'found the needle at position 5'
    expect(findNeedle(testArray)).toBe(expected);
})