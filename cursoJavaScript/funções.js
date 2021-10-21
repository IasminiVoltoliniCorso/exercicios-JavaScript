// includes: verifica array ou objeto a existência de uma determinada string ou number. Retorno booleano.

let nomes = ["Matheus", "Lucas", "João", "Maria"];

console.log(nomes.includes("João"));

if (nomes.includes("Maria")) {
    console.log('O nome Maria está na lista');
} else {
    console.log('O nome Maria não está na lista')
}