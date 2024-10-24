

class Pessoa{

    constructor(nome,pidade){
        this.nome = nome
        this.idade = pidade
    
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(idade){
        this.idade=idade
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
    }
}

const btnAdc = document.querySelector('#btn_adicionar')
const divAdc = document.querySelector('#div2')
let pessoas=[]

const addPessoa=() => {
    divAdc.innerHTML=''
    pessoas.map((p)=>{
        const div=document.createElement('div')
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome: ${p.getNome()},<br/> Idade: ${p.getIdade()}`
        divAdc.appendChild(div)
    })
}

btnAdc.addEventListener('click', (evt) =>{
    
        
    const nome = document.querySelector('#nome')
    const idade = document.querySelector('#idade')
    
    const p=new Pessoa(nome.value,idade.value)

    pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()

    console.log(pessoas)

    addPessoa()
})

