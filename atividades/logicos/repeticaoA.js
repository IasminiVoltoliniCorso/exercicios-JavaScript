function letter(letra, str) {
    let primeira = str.indexOf(letra)
    let ultima = str.lastIndexOf(letra)
    let total = str.split('').filter(item => item === letra).length
    //filter: filtra, retorna todos os itens que satisfazem a comdição === letra;

    console.log(`Essa frase contem ${total} letras [${letra}].`)
    console.log(`A primeira vez que aparece a letra [${letra}] é no índice ${primeira}`)
    console.log(`A última vez que aparece a letra [${letra}] é no índice ${ultima}`)
}

const frase = 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.'
letter('a', frase)
letter('e', frase)
letter('d', frase)