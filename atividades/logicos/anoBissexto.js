// Analizar se é ano bissexto
function bissexto(ano) {
    if (ano === 0) {
        let data = new Date()
        console.log(data.getFullYear())
    } else if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        console.log(`O ano ${ano} é BISSEXTO.`)
    } else {
        console.log(`O ano ${ano} NÃO é BISSEXTO.`)
    }
}
bissexto(2020);
bissexto(1994);
bissexto(1992);
bissexto(1990);
bissexto(0);
