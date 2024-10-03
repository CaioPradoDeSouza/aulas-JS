"use strict"

const curso = "javascript";

let nome2 = "amora";

function teste() {

    let nome = "caio"

    if (true) {;
        console.log(" dentro do escopo de teste");
        console.log(nome);
        console.log(nome2);
        console.log("----------------------------------------");
    }

    console.log(" fora do if do teste porém dentro do escopo de teste");
    console.log(nome);
    console.log(nome2);
    console.log("----------------------------------------");
}

teste();
console.log(" fora do escopo de teste");
console.log(nome2);
//console.log(nome);


console.log("----------------------------------------");
console.log("constantes não pode ser reatribuidas")
curso = "java";