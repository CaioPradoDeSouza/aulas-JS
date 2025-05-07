
let todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{

        let el=evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML)
        
    })
})