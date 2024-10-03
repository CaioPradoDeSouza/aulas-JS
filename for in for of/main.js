const objs = document.getElementsByTagName('div');

// let num = [10, 20, 30, 40, 50];

//for of
for(n of objs){
    console.log(n.innerHTML="raphaela");
    
}

console.log("-------------------------------------------------------");

//for in
for(n in objs){
    console.log(objs[0].innerHTML);
}

console.log("-------------------------------------------------------");


 //for
// for(let i =0; i < objs.length; i++) {
//     console.log(objs[i]);
// }

// console.log("-------------------------------------------------------");