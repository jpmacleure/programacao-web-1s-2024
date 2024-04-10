/**
 * Soma dois números inteiros
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}   a soma entre a e b
 */
function somar(a, b) {
    return Number(a) + Number(b);
}

function subtrair(a, b) {
    return Number(a) - Number(b);
}

function multiplicar(a, b) {
    return Number(a) * Number(b);
}

function dividir(a, b) {
    return Number(a) / Number(b);
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};