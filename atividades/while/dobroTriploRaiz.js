// Indique O dobro, triplo e a raiz quadrada de um array:

function doTriRa (num){
    let dobro;
    let triplo;
    let raiz;
    let i = 0
    while (i < num.length){
        if (num[i] > 0){
            dobro = num[i] * 2
            triplo = num[i] *3
            raiz = num[i] ** (1/2)
            console.log(`O dobro de ${num[i]} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raiz}`)
        } else {
            console.log(`Valor invalido`)
        }
        i++
    }
}


doTriRa([1, 3, 0, 25, 9, 64, -1, 'o']);