// Retornar apenas um nome de uma lista com vários, como um sorteio.

function sorteioName(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const names = ['Felipe', 'Bia', 'Lia', 'João', 'Pedro']
const indiceSorteado = sorteioName(0, names.length)
const valorIndiceSorteado = names[indiceSorteado]
console.log(`O nome sorteiado foi:`);
console.log(valorIndiceSorteado);
    