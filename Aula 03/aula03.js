"use strict";
var nome1 = "caio escopo global";
function teste(){
    let nome = "caio escopo local";
if(true){
        
        console.log(nome);
    
        console.log(nome1); 
    }
        console.log(nome);

        console.log(nome1); 
}
teste()


console.log(nome1); 

// escopo errado
console.log(nome); 


// var - escopo aberto mutavel visivel em qualquer parte

// let - escopo local e mutavel, dentro do bloco aonde foi declarado

// const - escopo local e imutavel, não pode ser alterado