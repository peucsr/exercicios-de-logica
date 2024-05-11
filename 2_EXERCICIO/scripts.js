// EXERCICIO 2 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, 
//caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e
//imprimir seu valor na tela.

//dou valor de A e B, crio a variavel C para herdar o resultado da função
const A = 10;
const B = 20;
var C;

function teste (n1, n2) {
    // condicional caso for identico, fazendo a var C herdar o resultado
    if(n1 === n2) {
       C = n1 + n2;  
    }
    // condicional caso nao for identico, fazendo a var C herdar o resultado
    else {
       C = n1*n2;   
    };
};
// dando os valores à serem usados na função
teste(A, B);
// imprimindo o valor
console.log(C);

