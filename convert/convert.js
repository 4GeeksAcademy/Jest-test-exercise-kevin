const oneEuroIs = {
    "JPY":156.5,
    "USD":1.07,
    "GBP":0.87
}

const convertTo = (coin, mount)=>{
    return coin * mount
}

module.exports = { oneEuroIs,convertTo}