let num =[10,20,30,40,50]

const objs= document.getElementsByTagName("div")

console.log("Percorrendo as posições dos elementos")
for(o of objs){
    
    console.log(o.innerHtml="Curso")
}


console.log("Percorrendo as posições dos elementos e exibindo conteudo da posição")
for(o in objs){
    
    console.log(objs[0].innerHTML)
    console.log(o)
}

