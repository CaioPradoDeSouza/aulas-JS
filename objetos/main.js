const caixa = document.querySelector('#caixa')

class Carro{
    canal="Cfb cursos"
    constructor(nome,ptipo){
        this.nome = nome
        if(ptipo==1){
            this.tipo = "Esportivo"
            this.velmax=300
        }else if(ptipo==2){
            this.tipo = "Utilitário"
            this.velmax=100
        }else if(ptipo==3){
            this.tipo = "Passeio"
            this.velmax=160
        }else{
            this.tipo = "Militar"
            this.velmax=180
        }
    
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return[this.nome,this.tipo,this.velmax]
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelMax(maxvalo){
        this.velmax=maxvalo
    }
    // setInfo(){
    //     return[this.nome,this.tipo,this.velmax]
    // }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade máxima: ${this.velmax} km/h`)
        console.log(`Canal: ${this.canal} `)
        console.log("---------------------------------")  // separador entre carros
    }
}

let c1=new Carro('Rapidao',1)
let c2=new Carro('Super luxo',3)
let c3=new Carro('Bombadão',4)
let c4=new Carro('Carrega tudo',2)

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
// console.log("---------------------------------")
// console.log(c2.nome)
// console.log(c2.tipo)
// console.log(c2.velmax)
// console.log("---------------------------------")
// console.log(c3.nome)
// console.log(c3.tipo)
// console.log(c3.velmax)
// console.log("---------------------------------")
// console.log(c4.nome)
// console.log(c4.tipo)
// console.log(c4.velmax)

c1.setNome("Porcaria")
c1.setTipo("Eletrico")
c1.setVelMax(300 + 'km/h no guincho')

c1.info()
// c2.info()
// c3.info()
// c4.info()

// console.log(c1.getInfo()[0]);