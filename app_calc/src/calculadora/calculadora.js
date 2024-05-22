function calcular(v1, v2, op) {
    let resultado;
    switch (op) {
        case '+':
            resultado = v1 + v2;
            break;
        case '-':
            resultado = v1 - v2;
            break;
        case '*':
            resultado = v1 * v2;
            break;
        case '/':
            resultado = v1 / v2;
            break;
    }
    return resultado;
}

function nomeOperador(op) {
    let nmOperador;
    switch (op) {
        case '+':
            nmOperador = "soma";
            break;
        case '-':
            nmOperador = "subtração";
            break;
        case '*':
            nmOperador = "multiplicação";
            break;
        case '/':
            nmOperador = "divisão";
            break;
    }
    return nmOperador;
}

module.exports = {
    calcular,
    nomeOperador
}