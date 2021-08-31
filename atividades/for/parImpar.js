// Indentifique os números pares e ímpares;

function parImpar(num) {
    for (i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            console.log(`${num[i]} é PAR`)
        } else {
            console.log(`${num[i]} é ÍMPAR`)
        }
    }
}
parImpar([0, 4, 1, 8, 12, 15, 22, 55, 98, 47, 52]);
