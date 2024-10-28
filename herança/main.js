
// classe pai / classe base
class Carro{
    constructor(nome,portas){
        this.cor = undefined;
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.vel = 0;
    }

    ligar=function(){
        this.ligado = true;
    }
    desligar=function(){
        this.ligado = false;
    }
    setCor=function(cor){
        this.cor = cor;
    }
}

// classe filho
class Militar extends Carro{
    constructor(nome,portas,blindagem,municao){

        super(nome,portas)
        this.blindagem = blindagem;
        this.municao = municao;
        this.setCor("Verde")
    }
    atirar=function(){
        if(this.municao > 0){
            this.municao--;
        }
        
    }
}

class Utilitario extends Carro{
    constructor(nome,portas,lugares){

        super(nome,portas)
        this.lugares=lugares;
    }
    setLugares=function(lugares){
        this.lugares=lugares;
    }

}


const c1=new Carro("Normal",4)
c1.ligar();
c1.setCor("preto");

const c2=new Militar("Lutador",1,100,50)
// c2.setCor("Azul");
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();
c2.atirar();


const c3=new Utilitario("Van",5)
c3.ligar();
c3.setCor("branco");
c3.setLugares(4);


console.log(`Nome: ${c1.nome} `)
console.log(`Portas: ${c1.portas} `)
console.log(`Ligado: ${(c1.ligado? "Sim":"Não")} `)
console.log(`Velocidade: ${c1.vel} `)
console.log(`Cor: ${c1.cor} `)
console.log("--------------------------")

console.log(`Nome: ${c2.nome} `)
console.log(`Portas: ${c2.portas} `)
console.log(`Ligado: ${(c2.ligado? "Sim":"Não")} `)
console.log(`Velocidade: ${c2.vel} `)
console.log(`Cor: ${c2.cor} `)
console.log(`Blindagem: ${c2.blindagem} `)
console.log(`Munição: ${c2.municao} `)
console.log("--------------------------")

console.log(`Nome: ${c3.nome} `)
console.log(`Portas: ${c3.portas} `)
console.log(`Ligado: ${(c3.ligado? "Sim":"Não")} `)
console.log(`Velocidade: ${c3.vel} `)
console.log(`Cor: ${c3.cor} `)
console.log(`Blindagem: ${c3.blindagem} `)
console.log(`Munição: ${c3.municao} `)
console.log(`Lugares: ${c3.lugares} `)
console.log("--------------------------")