// Escreva o fatorial de qualquer número;

function fatorial(num) {
    let resultado = num
    let text = ''
    while (num > 1){
        resultado = resultado * (num - 1)
        text += `${num} x ` 
        num--
    }
    console.log(`${text}1 = ${resultado}`)
}
fatorial(5);
fatorial(7);
fatorial(10);
