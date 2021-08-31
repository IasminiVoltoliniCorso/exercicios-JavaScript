function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado = document.getElementById('resultado')
   
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = `Impossível de contar!` 
    } else {
        resultado.innerHTML = 'Contando:'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            resultado.innerHTML = `Valor mínimo para contar é um!`
            p = 1
        }
        if (i < f) { // Contagem crescente 
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `  ${c}  \u{1F449}`
            }
            
        } else { // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `  ${c}  \u{1F449}`
            }
        }
        resultado.innerHTML += `  \u{1F973}`

    }

}