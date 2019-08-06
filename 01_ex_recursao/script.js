/**
 * * 01 - Escreva um procedimento recursivo que recebe como entrada um número K do tipo inteiro.
 * * O procedimento recursivo escreve no console o fatorial de K
 * @param {number} x 
 */
function fatorial(x) {
    if (x === 0) {
        return 1;
    }
    else if (x === 1) {
        return 1;
    } else {
        return x * fatorial(x - 1);
    }
}

/**
 * * 2 - Escreva um procedimento recursivo que recebe como entrada um número K do tipo inteiro. 
 * * O procedimento recursivo escreve no console o número de Fibonacci de K.
 * @param {number} k 
 */
var fibonacci = (k) => {
    if (k === 0) {
        return 0;
    }
    else if (k === 1 || k == 2) {
        return 1;
    } else {
        return fibonacci(k - 1) + fibonacci(k - 2);
    }
};

/**
 * * 3 - Escreva um procedimento recursivo que recebe como entrada um número K do tipo inteiro. 
 * * O procedimento recursivo escreve no console todos os números n, onde n é um número natural e menor ou igual a K.
 * @param {number} k 
 */
var antecessor = (k) => {
    if (k === 0) {
        return -1;
    }
    antecessor(k - 1);
    console.log(k);
};

/**
 * * 4 - Escreva um procedimento recursivo que recebe como entrada um número K do tipo inteiro. 
 * * O procedimento recursivo escreve no console todos os números n, onde n é um número natural e menor ou igual a K, de forma decrescente e, depois, crescente.
 * @param {number} k 
 */
var sucessorAntecessor = (k) => {
    if (k === 0) {
        return -1;
    }
    console.log(k);
    sucessorAntecessor(k - 1);
    console.log(k);
};

/**
 * * 5 - Escreva um procedimento recursivo que recebe como entrada uma mensagem do tipo caractere e um número K do tipo inteiro. 
 * * O procedimento recursivo escreve no console a mensagem passada K vezes.
 * @param {string} nome 
 * @param {number} k 
 */
var escreverMensagem = (nome, k) => {
    if (k === 0) {
        return;
    }
    console.log(nome);
    escreverMensagem(nome, k - 1);
};

/**
 * * 6 - Escreva uma função recursiva para calcular o produto de dois números inteiros. Ela receberá como entrada os dois números e retorna como resultado o produto deles. 
 * * Crie também um programa para testar essa função que você escreveu (dica: tente representar o produto como uma soma).
 * @param {number} a 
 * @param {number} b 
 * @returns {number} produto dos números a * b
 */
var calcularProduto = (a, b) => {
    if (a === 0 || b === 0) {
        return 0;
    }
    return (a + calcularProduto(a, b - 1));
};

/**
 * * Programa para testar @method {calcularProduto}
 */
var entrarNumerosCalcularProduto = () => {
    var a = Number(prompt('Digite o número A:'));
    var b = Number(prompt('Digite o número B:'));
    alert('Resultado: ' + a + ' X ' + b + ' = ' + calcularProduto(a, b));
};

/**
 * * 7 - Escreva uma função recursiva que receba um número inteiro e retorne a quantidade de dígitos deste número. 
 * * Crie um programa para testar essa função, onde você lerá um número fornecido pelo usuário e, sem seguida, informará a quantidade de dígitos desse número.
 * @param {number} n 
 */
var contarDigitos = (n) => {
    if (n % 1 !== 0) {
        return 1;
    }
    return 1 + contarDigitos(n / 10);
};

