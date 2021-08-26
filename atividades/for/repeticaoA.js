// Indicar a quantidade total de vezes que a letra 'a' aparece, o primeiro indice e último;

function words(str) {
    let primeira = str.indexOf('a')
    // no caso quando tem muitas repetições indexOf não ajuda, pois só retorna o primeiro, perfeito para esse caso que eu quero saber só o primeiro; 
    let ultima;
    let total = 0

    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            total++ 
            ultima = i // retorna o último índice porque está dentro do [for];         
        }
    }
    console.log(`Essa frase contem ${total} letras [a].`)
    console.log(`A primeira vez que aparece a letra [a] é no índice ${primeira}`)
    console.log(`A última vez que aparece a letra [a] é no índice ${ultima}`)
}
words('Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.')
