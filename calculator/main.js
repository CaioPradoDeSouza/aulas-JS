

const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelectorAll('.res')
const display = document.querySelector("#display")
const teclaCopy=document.querySelector('#keyCopy')
const tLimpar=document.querySelector('#keyClean')
const tIgual=document.querySelector('#keyEquals')
const aba = document.getElementById("calcAba")
const calc = document.getElementById("calc")

// const teste = document.querySelector("#teste")

let sinal=false
let decimal=false

teclasNum.forEach((el) => {
    el.addEventListener("click", (evt)=>{
        sinal=false
    
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML="0,"
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }               
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
});

teclasOp.forEach((el) => {
    el.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
        
    })
});

tLimpar.addEventListener("click", (evt)=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
});

tIgual.addEventListener("click", (evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
});

teclaCopy.addEventListener("click", (evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
    // teste.select()

    // teste.setSelectionRange(0,99999)//Mobile

    // navigator.clipboard.writeText(teste.value)
});

aba.addEventListener("click",(evt)=>{

    calc.classList.toggle("calcExibir")

})