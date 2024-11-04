

const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelectorAll('.res')
const display = document.querySelector("#display")
const teclaCopy=document.querySelector('#keyCopy')
const tLimpar=document.querySelector('#keyClean')
const tIgual=document.querySelector('#keyEquals')

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