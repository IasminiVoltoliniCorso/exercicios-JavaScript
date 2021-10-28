/* includes: verifica array ou objeto a existência de uma determinada string ou number. Retorno booleano.
 endswith: Terminação 
 startswith: ínicio 
Obs: Para usar o terminal integrado, digite 'node';
*/

let nomes = ["Matheus", "Lucas", "João", "Maria"];

console.log(nomes.includes("João"));

if (nomes.includes("Maria Eduarda")) {
    console.log('O nome Maria está na lista');
} else {
    console.log('O nome Maria não está na lista')
}
// some: verifica a existência de pelo mesmos um.

console.log(nomes.some(nome => nome === 'Matheus'));

// every: Todos satisfazem a condição 

let inscritos = [
    { nome: 'Matheus', idade: 18 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Henrique', idade: 20 }
];
const maioridade = inscritos.every(nome => nome.idade >= 18)

console.log(`Todos são maiores de idade? ${maioridade}`);
