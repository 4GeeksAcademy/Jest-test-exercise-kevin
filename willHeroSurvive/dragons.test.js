const willHeroSurvive = require('./willHeroSurvive');

test('Si el heroe lleva 2 balas contra un dragon sobrevive', () => {
    // condicion
    expect(willHeroSurvive(2, 1)).toBeTruthy();
});

test('Si el heroe lleva 3 balas contra 2 dragones no sobrevive', () => {
    expect(willHeroSurvive(3, 2)).toBeFalsy();
});