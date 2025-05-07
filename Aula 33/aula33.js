// QUERY SELECTOR(retorna o primeiro elemento) && QUERY SELECTOR ALL(retorna todos os elementos)


const divTodos=document.querySelectorAll("div[class]")
const cursosC1=[...document.querySelectorAll(".c1")]
const cursosC2=[...document.querySelectorAll(".c2")]
const cursoSelecionado=document.querySelectorAll(".curso")[0]
const divP=document.querySelectorAll("div > p")

console.log(divTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoSelecionado.innerHTML)
console.log(divP)

cursosC2.map((e)=>{
    e.classList.add("destaque")
})