// Indentificar números primos;

function primos(num) {
    let contador = 0
    let text = ''
    for (let divisor = 1; divisor <= num; divisor++) {
        if (num % divisor === 0) {
            text += `${divisor}-> `
            contador += 1
        }
    }
    console.log(text)
    console.log(`O número ${num} foi divisível ${contador} vezes.`)
    if (contador === 2) {
        console.log('Esse é um número PRIMO.')
    } else {
        console.log('Esse número NÃO é primo, por ser divisível mais de 2 vezes.')
    }
}
primos(12);
primos(29);