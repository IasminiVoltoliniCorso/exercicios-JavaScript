//Indicar o antecessor e o sucessor.

function antSuc(number){
    let antecessor;
    let sucessor;
    let i = 0
    while (i < number.length){
        if(number[i] != 0){
            antecessor = number[i] - 1
            sucessor = number[i] + 1
            console.log(`O antecessor de ${number[i]} é ${antecessor} E o sucessor é ${sucessor}`)
            i++
        }
    }
}
antSuc([2, 7, 9, 13, 20]);