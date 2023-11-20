const willHeroSurvive = require('../willHeroSurvive/willHeroSurvive.js');

test("El resultado debe ser 'false'", () => {
    const bullets = 2
    const dragons = 2
    const expected = false
    expect(willHeroSurvive(bullets, dragons)).toBe(expected);
});

test("El resultado debe ser 'true'", () => {
    const bullets = 4
    const dragons = 2
    const expected = true
    expect(willHeroSurvive(bullets, dragons)).toBe(expected);
});