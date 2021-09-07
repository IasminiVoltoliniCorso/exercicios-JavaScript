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
            let maiorInicio;
            let maiorInicioIndice;
            let maiorFim;
            let maiorFimIndice;
            for (let i = 0; i < k; i++) {
                if ((pontuacao[i] >= 1 && pontuacao[i] <= 109) && (maiorInicio === undefined || pontuacao[i] > maiorInicio)) {
                    maiorInicio = pontuacao[i]
                    maiorInicioIndice = i
                }

                let j = (pontuacao.length - 1) - i
                if ((pontuacao[j] >= 1 && pontuacao[j] <= 109) && (maiorFim === undefined || pontuacao[j] > maiorFim)) {
                    maiorFim = pontuacao[j]
                    maiorFimIndice = j
                }
            }

            if (maiorInicio || maiorFim) {

                if (maiorInicio >= maiorFim) {
                    soma += maiorInicio
                    pontuacao.splice(maiorInicioIndice, 1)

                } else {
                    soma += maiorFim
                    pontuacao.splice(maiorFimIndice, 1)
                }
            }
        }

        tamanho_do_time--
    }

    return soma
}


