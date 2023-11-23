const getRandomNumbers = require("../random/random");

function willHeroSurvive(bullets, dragons){
    // 1 dragon = 2 balas
    return bullets % dragons === 0;
}


function dragonQuest(){
    // deestructuracion
    const [heroBullets, dragonCount] = getRandomNumbers(100, 500);
    willHeroSurvive(heroBullets, dragonCount);
}

module.exports = willHeroSurvive;