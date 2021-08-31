/*Indentifique os triângulos como equilátero, isósceles e escaleno;
1) Equilátero todos segmentos iguais;
2) Isósceles dois segmentos iguais;
3) Escaleno todos os segmentos diferentes;*/

function triangulo(n1, n2, n3) {
    if (n1 + n2 > n3 && n2 + n3 > n1 && n1 + n3 > n2) {
        if (n1 === n2 && n2 === n3) {
            console.log('MARAVILHA! Formou um triângulo EQUILÁTERO.')
        } else if (n1 == n2 & n2 != n3 || n2 == n3 && n3 != n1 || n1 == n3 && n3 != n2) {
            console.log('Temos um triângulo ISÓSCELES.')
        } else if (n1 != n2 && n2 != n3 && n3 != n1) {
            console.log('Obtemos um triângulo ESCALENO.')
        }
    } else {
        console.log('NÃO formam um triângulo, algum segmento é pequeno ou muito grande')
    }
}
triangulo(9, 9, 9);
triangulo(7, 8, 8);
triangulo(12, 15, 20);
triangulo(15, 2, 75);
