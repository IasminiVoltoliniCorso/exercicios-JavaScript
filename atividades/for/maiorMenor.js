// Identifique qual é o maoior número e o menor de qualquer tamanho de lista;
function maiorMenor(num) {
    let maior = num[0]
    let menor = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] > maior) {
            maior = num[i]
        } else if (num[i] < menor) {
            menor = num[i]
        }
    }
    console.log(`O maior número é ` + maior)
    console.log(`O menor número é ${menor}`)
}

maiorMenor([5, 7, 2, 1, 9, 10, 55]);