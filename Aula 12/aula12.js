// Operador spread - espalhar [... ]
const objs = document.getElementsByTagName("div")

// HTML collection - não é possivel iterar os objetos

console.log(objs)
console.log(typeof objs)


// spread de objs

let arr =[... objs]

// Array de objetos - é permitido iterar os objetos

console.log(arr)
console.log(typeof arr)




// const soma=(v1,v2,v3)=>{
//     return v1 + v2 + v3
// }

// let valores=[1,5,4]

// console.log(soma(...valores))

//let n1 =[10,20,30]
//let n2 = [11,22,33,44,55]
//let n3 = [... n1, ... n2]

// const jagador1={nome:"Caio",energia:100,vidas:3,magia:150}

// const jogador2={nome:"Rafael",energia:80,vidas:2,velocidade:100}

// const jagador3={...jagador1,...jogador2}


// console.log(jagador3)
// console.log("n1: " + n1)
// console.log("n2: " + n2)
// console.log("n3: " + n3)
// console.log(typeof n3)
