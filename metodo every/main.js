const p_array = document.getElementById('array')
const btnVerificar = document.getElementById('btnVerificar')
const resultado = document.getElementById('resultado')

const elementos_array=[21,25,19,16,18,22]

p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click", (evt)=>{
    
    const ret =elementos_array.every((e,i)=>{
        if(e<18){
            resultado.innerHTML="Array não conforme na posição :" + i
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML="Array ok"
    }
    console.log(ret)

})