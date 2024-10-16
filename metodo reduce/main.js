const p_array = document.getElementById('array')
const btnReduzir = document.getElementById('btnReduzir')
const resultado = document.getElementById('resultado')

const elementos_array=[1,2,3,4,5]

let ante=[]

let atua=[]

let dobro=[]

p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click", (evt)=>{
    dobro.push(elementos_array[0]*2)
    resultado.innerHTML = elementos_array.reduce((ant,atu,pos)=>{
        ante.push(ant)
        atua.push(atu)
        dobro.push(atu*2)
        return atu+ant
    })

    resultado.innerHTML+="<br/>"+ante
    resultado.innerHTML+="<br/>"+atua
    resultado.innerHTML+="<br/>"+dobro


})