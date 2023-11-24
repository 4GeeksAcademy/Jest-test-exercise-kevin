const {oneEuroIs,convertTo} = require('./convert.js')

test('One euro should be 1.07 USD',()=>{
    expect(convertTo(oneEuroIs.USD,32)).toBe(34.24)
})

test('One euro should be 156.5 JPY',()=>{
    expect(convertTo(oneEuroIs.JPY,32)).toBe(5008)
})

test('One euro should be 0.87 GBP',()=>{
    expect(convertTo(oneEuroIs.GBP,32)).toBe(27.84)
})