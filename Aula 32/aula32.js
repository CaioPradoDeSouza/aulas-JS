const cursosTodos=[...document.getElementsByClassName("curso")]
const cursosC1=[...document.getElementsByClassName("c1")]
const cursosC2=[...document.getElementsByClassName("c2")]
const cursoSelecionado=document.getElementsByClassName("curso")[0]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursoSelecionado)

cursosC2.map((e,i)=>{
    e.classList.add("destaque")
})