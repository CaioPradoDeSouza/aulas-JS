// Funções geradoras

function* contador(){

    let i=0
    while(true){
        yield i++
        if(i>10){
            break
        }
    }
}

const itp=contador()
for(let c of itp){
    console.log(c)
}



// function* perguntas(){

//     const nome=yield 'Qual seu nome?'
//     const esporte=yield 'Qual seu esporte favorito?'

//     return "Seu nome é " + nome + ", seu esporte favorito é " + esporte

// }

// const itp=perguntas()
// console.log(itp.next().value)
// console.log(itp.next('Caio').value)
// console.log(itp.next('Calistenia').value)