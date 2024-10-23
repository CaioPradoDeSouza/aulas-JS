const caixa = document.querySelector('#caixa')

class Pessoa{
    constructor(nome){
        this.nome = nome
        // this.idade = idade
    }
}

let p1=new Pessoa('Luiza')
let p2=new Pessoa('caio')
let p3=new Pessoa('Raphaela')

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)