
const cursosTodos=[...document.querySelectorAll(".curso")]
const div1=document.querySelector(".div_1")
const btnTransferir=document.querySelector("#btnTransferir")
const div2=document.querySelector(".div_2")

cursosTodos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
        curso.classList.add("destaque")
    })
})

btnTransferir.addEventListener("click",()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    const cursosNaoSelecionados=[...document.querySelectorAll(".curso:not(.selecionado)")]
    console.log(cursosNaoSelecionados)
    cursosSelecionados.map((el)=>{
        el.classList.remove("destaque")
        div2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        div1.appendChild(el)
        el.classList.remove("destaque")
    })
})