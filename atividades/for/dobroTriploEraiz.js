function multiplos(num){
    let dobro;
    let triplo;
    let raiz;
    for (i = 0; i < num.length; i++){
        if (num[i] > 0){
            dobro = num[i] * 2
            triplo = num[i] * 3
            raiz = Math.sqrt(num[i])
            console.log(`O dobro de ${num[i]} é ${dobro}, o triplo é ${triplo} e a raiz quadrada é ${raiz}`)
        } else {
            console.log(`Valor invalido`)
        }
    }
}
multiplos([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
multiplos([0, 13, 65, 1000, 2598, 'Iasmini']);
