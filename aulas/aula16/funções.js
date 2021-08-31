function parImpar(n) {
    if (n%2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
} 
console.log(parImpar(59))

// Operações
function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(5, 8))

// função dentro de uma variável 
let v = function(x) {
    return x*2
}
console.log(v(5))

// Fatorial
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(6))

// Recusividade
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}
console.log(fatorial(5))
