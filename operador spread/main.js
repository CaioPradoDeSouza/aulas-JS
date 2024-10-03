// operador spread

// let n1 = [10,20,30];
// let n2 = [11,22,33,44,55];
// let n3 = [...n1, ...n2];

// console.log("n1: " + n1);
// console.log("n2: " + n2);
// console.log("n3: " + n3);

// const jogador = {nome:"caio", energia:100, vidas:3, magia:150}
// const jogador1 = {nome:"luiza", energia:100, vidas:5, velocidade:80}

// const jogador3 = {...jogador1, ...jogador}

// console.log(jogador3);

// const soma=(v1,v2,v3) => {
//     return v1 + v2 + v3;
// }

// let valores = [20, 20, 20]

// console.log(soma(...valores));


// por conter valores html nao pode se percorrer com foreach

const objs1 = document.getElementsByTagName("div");


// pode se percorrer com forEach pelo uso do spread

const objs2 = [...document.getElementsByTagName("div")];

objs2.forEach(element => {
    element.innerHTML = "curso"
});
