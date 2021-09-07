// Raiz quadrada de cada número.

function quadrado(num) {
    let elevado;
    for (i = 0; i < num.length; i++) {
        if (num[i] != 0) {
            elevado = Math.pow(num[i], 1 / 2)
            console.log(`A raiz quadrada de ${num[i]} é ${elevado}`)
        }
    }
}
quadrado([25]);
quadrado([9]);
quadrado([16, 64, 81, 49, 100]);