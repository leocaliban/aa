
// Provocando um loop infinito (recursão sem caso base)
function loopRegressiva(i) {
    console.log(i);
    loopRegressiva(i - 1);
}

// Adicionando caso base
function regressiva(i) {
    console.log(i);
    if (i <= 1) {
        return;
    } else {
        regressiva(i - 1);
    }
}

// Calculando fatorial com recursão
function fatorial(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * fatorial(x - 1);
    }
}
