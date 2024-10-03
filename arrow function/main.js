
// arrow function

const soma = (v1,v2) => {
    return v1 + v2
}

console.log(soma(10,10))

// somente um valor de entrada não precisa de parenteses ()

const nome = n => {
    console.log(n)
}

console.log(nome("caio"))

// forma mais simplificada sem chaves sem parenteses sem return

const add = n => n + 10

console.log(add(10))

// uma função mais elaborada precisa de toda a estrutura normal de função

const somar = (v3,v4) =>{
    let res = v3+v4;
    return res
    
}
console.log(somar(5,5))