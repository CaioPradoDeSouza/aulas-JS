

function Pessoa(nome,pidade){

        this.nome = nome,
        this.idade = pidade,
    
    this.getNome=()=>{
        return this.nome
    },
    this.getIdade=()=>{
        return this.idade
    },
    this.setNome=(nome)=>{
        this.nome=nome
    },
    this.setTipo=(idade)=>{
        this.idade=idade
    },
    this.info=()=>{
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

