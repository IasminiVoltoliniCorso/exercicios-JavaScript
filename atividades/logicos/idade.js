// Indentifique a idade;

function idade(nascimento) {
    let data = new Date()
    let ano = data.getFullYear()
    let idade = ano - nascimento
    console.log(idade)
}
idade(1922);
idade(2000);
