function getRandomNumbers(balas, dragones){
    const numberOfBullets = Math.floor(Math.random() * balas + 1);
    const numberOfDragons = Math.floor(Math.random() * dragones + 1);
    return [numberOfBullets, numberOfDragons];
}

module.exports = getRandomNumbers;