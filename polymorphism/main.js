
class Carro{
    constructor(tipo, estagioTurbo){
        this.turbo=new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome="normal"
        }else if(tipo==2){
            this.velMax=160
            this.nome="esportivo"
        }else if(tipo==3){
            this.velMax=200
            this.nome="super luxo"
        }

        this.velMax+=this.turbo.pot
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade máxima: ${this.velMax} km/h`)
        console.log(`Estágio do turbo: ${this.turbo.pot}%`)
        console.log("---------------------------------")  // separador entre carros
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }else if(e==1){
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
        }
    }
}

class CarroEspecial extends Carro{

    constructor(estagioTurbo){
        super(4,estagioTurbo)
        //this.tipoInfo=1
        this.nome="carro especial"
        this.velMax=300+this.turbo.pot
    }
    info(){

        if(this.tipoInfo==1){
            super.info()
        }else{
        console.log(`Nome do veiculo: ${this.nome}`)
        console.log(`Velocidade máxima do veiculo: ${this.velMax} km/h`)
        console.log(`Estágio do turbo do veiculo: ${this.turbo.pot}%`)
        console.log("---------------------------------")
        }
    }
}


const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new CarroEspecial(3)

c1.info()
c2.info()
c3.info()