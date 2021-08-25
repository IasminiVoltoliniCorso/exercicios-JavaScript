// Indique a quantidade de letras.

function words(str){
    let total = 0
    for (i = 0; i < str.length; i++){
        if (str[i] != ' '){
            total++       
        } 
    }
    console.log(total)
}

words('Iasmini Voltolini Corso');