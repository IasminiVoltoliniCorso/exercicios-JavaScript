// Para adicionar informações à um objeto.

function cadastroPessoa(info) {
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '658df5ttg*/'
    };
    return novosDados;
}
console.log(cadastroPessoa({ nome: 'Matheus', sobrenome: 'Fraga', anoInicio: 2021 }))