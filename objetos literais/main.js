

const Pessoa ={
    nome:'',
    idade:'',
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    },
    getIdade:function(){
        return this.idade
    },
    setIdade:function(idade){
        this.idade=idade
    }
}

const btnAdc = document.querySelector('#btn_adicionar')
const divAdc = document.querySelector('#div2')

let pessoas={}

const addPessoa=() => {
    console.log('click')
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