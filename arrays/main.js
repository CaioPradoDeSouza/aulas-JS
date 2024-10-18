const caixa=document.querySelector('#caixa')
const btnSomar=document.querySelector('#btnSomar')
const btnSubtrair=document.querySelector('#btnSubtrair')
const btnDividir=document.querySelector('#btnDividir')
const btnMultiplicar=document.querySelector('#btnMultiplicar')
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let result = document.querySelector('#res')

btnSomar.addEventListener('click',()=>{
    
    result.value=Number(num1.value)+Number(num2.value)
})
btnSubtrair.addEventListener('click',()=>{

    result.value=Number(num1.value)-Number(num2.value)
})
btnDividir.addEventListener('click',()=>{

    result.value=Number(num1.value)/Number(num2.value)
})
btnMultiplicar.addEventListener('click',()=>{

    result.value=Number(num1.value)*Number(num2.value)
})




// const op=[
//     ()=>{
        
//         const val=[num1.value,num2.value]
//         res.value=Number(val[0])+Number(val[1])

//     },
//     ()=>{
        
//         const val=[num1.value,num2.value]
//         res.value=Number(val[0])-Number(val[1])
//     },
//     ()=>{
        
//         const val=[num1.value,num2.value]
//         res.value=Number(val[0])/Number(val[1])
//     },
//     ()=>{
        
//         const val=[num1.value,num2.value]
//         res.value=Number(val[0])*Number(val[1])
//     }
// ]

// btnSomar.addEventListener('click',()=>{op[0]()})
// btnSubtrair.addEventListener('click',()=>{op[1]()})
// btnDividir.addEventListener('click',()=>{op[2]()})
// btnMultiplicar.addEventListener('click',()=>{op[3]()})










// let cores=["AZUL","VERDE","VERMELHO",["claro","medio","escuro"]]
// let cursos=["HTML","CSS","JAVASCRIPT"]

// // cursos[3]=1001

// cursos.push(cores)

// console.log(cursos[3][3][2])

// cursos.pop()

// console.log(cursos[0])

// cursos.unshift("PYTHON")

// console.log(cursos)

// cursos.shift()

// cursos.map((el)=>{
//     let p =document.createElement("p")
//     p.innerHTML = el
//     caixa.appendChild(p)
// })
// console.log(cursos)

