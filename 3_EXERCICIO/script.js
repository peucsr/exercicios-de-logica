// - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição

const peso = (Number(prompt('Seu peso é:')));
const altura = (Number(prompt('Sua altura é:')));
var IMC;

// calculo do IMC, transferindo valor do resultado para uma constante pra ser usada nas condicionais
function calculo(n1, n2) {
    const resultadoIMC = n1 / (n2 * n2);
// condicionais (fazendo o uso do && para que as duas condições sejam verdadeiras para dar o resultado)
    if ( resultadoIMC < 18.5) {
        IMC = "abaixo do peso";
    } else if (resultadoIMC >= 18.5 && resultadoIMC < 25) {
        IMC = "peso ideal";
    } else if (resultadoIMC >= 25 && resultadoIMC < 30) {
        IMC = "levemente acima do peso";
    } else if (resultadoIMC >= 30 && resultadoIMC < 35) {
        IMC = "obesidade grau I";
    } else if (resultadoIMC >= 35 && resultadoIMC < 40) {
        IMC = "obesidade grau II";
    } else {
        IMC = "obesidade grau III";
    }
}
calculo(peso, altura);

console.log(IMC);

