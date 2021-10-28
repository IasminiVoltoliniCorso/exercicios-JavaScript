
function myList(...nomes) {
    console.log(nomes);
}
myList("Matheus", "Lucas", "João", "Maria")

function cadastrar(usuarios, ...novosUsuarios) {
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];
    return console.log(totalUsuarios);

}
let usuarios = ["Matheus", "João"];
let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");

// Operação em Array.

const lista = [1, 2, 3, 4, 5, 6];

const novaLista = lista.map(function (item, index) {
    return item + index;
});
console.log(novaLista);

// Reduce: Usado para fazer operação sequenciais

const soma = lista.reduce(function (total, proximo) {
    return total + proximo;
});
console.log(soma)

// find: encontrar elemento

const find = lista.find(function (item) {
    return item === 5; // Se o valor/elemento não existir irá retornar undefined
});
console.log(find);

// Função anônima

function add(...numbers) {
    let total = numbers.reduce((total, proximo) => {
        let soma = total + proximo;
        return soma;
    });
    console.log(total)
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

