const caixa = document.querySelector('#caixa');

const carros=["polo","golf","t-cross","HRV"]
const curso="Javascript";
const canal ="CFB cursos";

let ol=`<ul> `
carros.map((el)=>{
    ol+=`<li>${el}<li/>`
})
ol+=`<ul/>`

// Template string ou String formatada

// \n pula uma linha no console.log()

// <br/> quebra a linha no DOM

const frase=`Este é o curso <br/> \n de ${curso} <br/> \n do canal <br/> \n ${canal}`;

console.log(frase)

caixa.innerHTML=ol;