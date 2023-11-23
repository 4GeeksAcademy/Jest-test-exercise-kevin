function suma(a, b){
    return parseInt(a) + parseInt(b);
}

// true -> par | false -> impar
function esPar(numero){
    return numero % 2 === 0;
}

const math = {
    suma: suma,
    esPar: esPar
}

// exportacion
module.exports = math;