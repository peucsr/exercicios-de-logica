// EXERCICIO 1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre 
// se a soma é menor que C.

// dou valor as letras
const A = 10
const B = 20
const C = 40

// função para somar os valores
function soma(n1, n2) {
const resultado = n1 + n2;
// condicional se o valor for menor que C
    if (resultado < C) {
        console.log("a soma de A + B é menor que C");
    };
    // retorna a função
    return resultado;   
};

const resultado = soma(A, B);
// retorna o valor da soma
console.log(resultado);









