/* a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.*/
function aluguel(dias=0, km=0){
    let porDia = dias * 60
    let porKm = km * 0.15
    let total = porDia + porKm
    return total
    
}
console.log(`O valor total a pagar é ${aluguel(10, 1000)}`);
