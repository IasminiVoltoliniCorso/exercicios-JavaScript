
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
