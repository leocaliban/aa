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
    if (n < 1) {
        return 0;
    }
    return 1 + contarDigitos(n / 10);
};

/**
 * * Programa para testar @method {contarDigitos}
 */
var entrarNumerosContarDigitos = () => {
    var n = Number(prompt('Digite um número: '));
    alert('O número ' + n + ' possui ' + contarDigitos(n) + ' dígitos.');
};

/**
 * * 8 - Escreva uma função recursiva que retorne o menor elemento de um vetor com 10 elementos. 
 * * Para isso, ela receberá como entrada o vetor e o número de elementos no mesmo. 
 * * A função retornará o menor número do vetor.
 */
var buscarMenorNumeroNoVetor = () => {
    var vetor = [4, 6, 4, 3, 2, 8, 9, 5, 2, 6];
    var tamanho = vetor.length;
    return procurarMenor(tamanho, vetor);
};

/**
 * Função recursiva
 * @param {number} tamanho 
 * @param {Array} vetor 
 */
var procurarMenor = (tamanho, vetor) => {
    console.log('Tamanho: ' + tamanho);
    var aux = vetor;
    if (tamanho > 0) {
        console.log('POSIÇÃO VETOR ***: ' + aux[tamanho - 1]);
        if (aux[9] >= aux[tamanho - 1]) {
            aux[9] = aux[tamanho - 1];
            console.log('POSIÇÃO VETOR MENOR: ' + aux[tamanho - 1]);
            return procurarMenor(tamanho - 1, aux);
        }
        return procurarMenor(tamanho - 1, aux);
    }
    return aux[9];
};

/**
 * * 9 - Escreva uma função recursiva que resolve o problema da Torre de Hanoi. 
 * * Um "quebra-cabeça" que consiste em uma base contendo três pinos, em um dos quais são dispostos alguns discos uns sobre os outros, em ordem crescente de diâmetro, de cima para baixo. 
 * * O problema consiste em passar todos os discos de um pino para outro qualquer, usando um dos pinos como auxiliar, de maneira que um disco maior nunca fique em cima de outro menor em nenhuma situação.
 * @param {number} n Quantidade de barras
 * @param {string} origem 
 * @param {string} destino 
 * @param {string} aux 
 * @variation https://tinyurl.com/gfgth
 */
var torreHanoi = (n, origem, destino, aux) => {
    if (n === 1) {
        console.log('Mover disco 1 de ' + origem + ' para ' + destino);
        return;
    }
    torreHanoi(n - 1, origem, aux, destino);
    console.log('Mover disco ' + n + ' de ' + origem + ' para ' + destino);
    torreHanoi(n - 1, aux, destino, origem);
};

/**
 * * 10 – Escreva uma função recursiva que recebe como entrada duas strings A e B e conta o número de ocorrências de B em A.
 * @param {string} nome 
 * @param {string} substring 
 */
var contarOcorrencia = (nome, substring) => {
    console.log(verificar(0, nome, substring));
};

var verificar = (int, nome, substring) => {
    if (int === nome.length) {
        return;
    }
    if (nome.substring(int, substring.length + int) === substring) {
        console.log('OCORRÊNCIA ENCONTRADA');
        return verificar(int + 1, nome, substring) + 1;
    }
    verificar(int + 1, nome, substring);
    return 1;
};