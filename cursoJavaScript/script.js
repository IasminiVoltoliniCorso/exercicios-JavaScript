// Armazenas histórico 

let name = '';
if (typeof localStorage.name == 'undefined') {
    localStorage.name = prompt("Digite seu nome:");
}
name = localStorage.name;
document.getElementById('name').innerHTML = name;
