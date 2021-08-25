function antEsuc (number){
    let antecessor;
    let sucessor;
    for (i = 0; i < number.length; i++){
        if (number[i] != 0){
            antecessor = number[i] - 1
            sucessor = number[i] + 1
            console.log(`O antecessor de ${number[i]} é ${antecessor} e o sucessor é ${sucessor}`)
        } 
    }
}
antEsuc([1, 2, 4, 5, 11, 55, 69, 100]);
antEsuc([0]);
