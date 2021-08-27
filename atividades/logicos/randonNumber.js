// Em uma lista de 0 à 100, retorne um número aleatório;

function sorteio (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`O número sorteiado foi:`);
console.log(sorteio(1, 100));
