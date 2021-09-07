//O quadrado de cada número.

function quadrado(num) {
    let elevado;
    for (i = 0; i < num.length; i++) {
        if (num[i] != 0) {
            elevado = Math.pow(num[i], 2)
            console.log(`O quadrado de ${num[i]} é ${elevado}`)
        }
    }
}
quadrado([4]);
quadrado([2]);
quadrado([5, 8, 11, 56, 100]);


