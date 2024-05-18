// Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.

let lista = [5,4,7];

function ordemCrescente (n1,n2,n3) {
    // se n1 for maior que n2, sera feita a troca de valores entre eles
    if (n1 > n2) {
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }
    // se n1 for maior que n3, sera feita a troca de valores entre eles
    if (n1 > n3) {
        let temp = n1;
        n1 = n3;
        n3 = temp;
    }
    // ...
    if (n2 > n3) {
        let temp = n2;
        n2 = n3;
        n3 = temp;
    }
    return [n1, n2, n3]  
}
// dando o valor dos parametros para a função de forma individual
let numerosOrdenados = ordemCrescente(lista[0], lista[1], lista[2]);
console.log(numerosOrdenados);

