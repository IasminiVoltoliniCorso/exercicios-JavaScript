// Dada uma lista de letras substitua por names;

function list(name){
    let a = name.indexOf('a')
    let e = name.indexOf('e')
    for(i = 0; i < name.length; i++){
        if (name[i] === 'a'){
            a = 'Felipe'
            console.log(a)
        }else if (name[i] === 'e'){
            e = 'Marjorie'
            console.log(e)
        }else{
            console.log('Pedro')
        }
    } 
}

list(['ua', 'e', 'a', 'o', 'u']);
