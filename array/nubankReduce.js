'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'formacaoDeTime' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY pontuacao
 *  2. INTEGER tamanho_do_time
 *  3. INTEGER k
 */

function formacaoDeTime(pontuacao, tamanho_do_time, k) {
    let soma = 0;

    if (k < 1) {
        return soma
    }

    while (tamanho_do_time) {
        if (k > pontuacao.length) {
            let maior;
            let maiorIndice;
            pontuacao.filter(function (valor, indice) {
                if ((valor >= 1 && valor <= 109) && (maior === undefined || valor > maior)) {
                    maior = valor
                    maiorIndice = indice
                }
            })
            if (maior >= 0) {
                soma += maior
                pontuacao.splice(maiorIndice, 1)
            }

        } else {

            function maiorPontuacao(acumulador, valorAtual) {
                if (!(valorAtual >= 1 && valorAtual <= 109)) {
                    return acumulador
                }
                if (valorAtual > acumulador) {
                    acumulador = valorAtual
                }
                return acumulador
            }

            const inicio = pontuacao.slice(0, k)
            let maiorInicio = inicio.reduce(maiorPontuacao, 0)

            const fim = pontuacao.slice(-k)
            let maiorFim = fim.reduce(maiorPontuacao, 0)

            if (maiorInicio || maiorFim) {
                if (maiorInicio >= maiorFim) {
                    soma += maiorInicio
                    pontuacao.splice(pontuacao.indexOf(maiorInicio), 1)

                } else {
                    soma += maiorFim
                    const indice = (pontuacao.length - 1) - k
                    pontuacao.splice(pontuacao.indexOf(maiorFim, indice), 1)
                }
            }
        }
        tamanho_do_time--
    }

    return soma
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const pontuacaoCount = parseInt(readLine().trim(), 10);

    let pontuacao = [];

    for (let i = 0; i < pontuacaoCount; i++) {
        const pontuacaoItem = parseInt(readLine().trim(), 10);
        pontuacao.push(pontuacaoItem);
    }

    const tamanho_do_time = parseInt(readLine().trim(), 10);

    const k = parseInt(readLine().trim(), 10);

    const result = formacaoDeTime(pontuacao, tamanho_do_time, k);

    ws.write(result + '\n');

    ws.end();
}
