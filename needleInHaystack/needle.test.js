const needleInHaystack = require("./needleInHaystack");

test('debe retornar "found the needle at position 5"', () => {
    const testArray = [
        "hay",
        "junk",
        "hay",
        "hay",
        "moreJunk",
        "needle",
        "randomJunk"
    ];
    expect(needleInHaystack(testArray)).toBe("found the needle at position 5");
});