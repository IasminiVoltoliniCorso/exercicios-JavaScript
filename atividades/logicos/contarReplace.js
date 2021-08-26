// Indique a quantidade de letras.

function words(str){
    let total = str.replace(/ /g,'').length
    console.log(total)
}
words('Ia s m in i   Vo l t o l i ni Corso');
words('Felipe Loose Corso')