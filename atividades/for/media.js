function mediaNotas(num){
    let soma = 0
    let total = num.length
    let media;  
    for (i = 0; i < num.length; i++){
        if (typeof num[i] === 'number'){
            soma += num[i]
            media = soma / total
        }
    }
    console.log(`A soma de todos os número é ${soma} e a média é ${media}`)
}

mediaNotas([8, 9, 7, 4, 5.5, 1]);
mediaNotas([2, 2, 2, 2]);
mediaNotas([7, 8, 10, 5, 3]);
