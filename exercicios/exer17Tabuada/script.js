function tabuada() {
    let num = document.getElementById('txtn')
    let tabuada = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}
