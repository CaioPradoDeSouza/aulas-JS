let tipoMilitar = document.querySelector("#militar");
let tipoNormal =document.querySelector("#normal");
let blindagem = document.querySelector("#blindagem");
let municao = document.querySelector("#municao");
let carros = document.querySelector("#carros");
let btnAdcCarros = document.querySelector("#adicionarCarro");
let nomeCarro = document.querySelector("#nome");
let portasCarro = document.querySelector("#portas");


let arrCarros=[]

const removeCar=((who) => {
    arrCarros = arrCarros.filter((el) =>{
        if(el.nome !=who)
            return el.nome!=who
    })
})



tipoMilitar.addEventListener('click', (evt) => {
    nomeCarro.value ="";
    portasCarro.value ="";
    blindagem.value="";
    municao.value="";
    blindagem.removeAttribute("disabled")
    municao.removeAttribute("disabled")
});

tipoNormal.addEventListener('click', (evt) => {
    nomeCarro.value ="";
    portasCarro.value="";
    blindagem.value="";
    municao.value="";
    blindagem.setAttribute("disabled","disabled")
    municao.setAttribute("disabled","disabled")
});

const gerenciarExibiçãoCarros=()=>{

    carros.innerHTML = ""
    arrCarros.forEach((c)=>{
        const div=document.createElement("div")
        const btn=document.createElement("button")
        btn.innerHTML="Remover"
        btn.addEventListener("click", (evt)=>{
            const removeThat = evt.target.parentNode.dataset.nome
            removeCar(removeThat)
            gerenciarExibiçãoCarros()
        })
        div.setAttribute("class","carro")
        div.setAttribute("data-nome",c.nome)
        div.innerHTML =`Nome: ${c.nome} <br/>`
        div.innerHTML+= `Portas: ${c.portas} <br/>`
        div.innerHTML+= `Blindagem: ${c.blindagem} <br/>`
        div.innerHTML+= `Munição: ${c.municao} <br/>`
        div.appendChild(btn)
        carros.appendChild(div)
    })
    

}

btnAdcCarros.addEventListener('click', (evt) => {

    if(tipoNormal.checked){
        const carro = new Carro(nomeCarro.value,portasCarro.value)
        arrCarros.push(carro)
    }else{
        const carro = new Militar(nomeCarro.value,portasCarro.value,blindagem.value,municao.value)
        arrCarros.push(carro)
    }

    gerenciarExibiçãoCarros()

    nomeCarro.value ="";
    portasCarro.value="";
    blindagem.value="";
    municao.value="";
})


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