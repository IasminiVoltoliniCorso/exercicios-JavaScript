// Verificar se 3 segmentos podem formar um triângulo;

function triangulo(n1, n2, n3) {
    if (n1 + n2 > n3 && n2 + n3 > n1 && n1 + n3 > n2) {
        console.log('Esses três segmentos formam um triângulo.')
    } else {
        console.log('NÃO formam um triângilo, algum segmento é pequeno ou muito grande')
    }
}
triangulo(9, 13, 5);
triangulo(15, 2, 75);
