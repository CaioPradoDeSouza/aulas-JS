
const c1= document.querySelector('#c1')
const todosCursos=[...document.querySelectorAll(".curso")]

const msg=()=>{
    alert('clicou')
}

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const eve = evt.target
        eve.classList.add("destaque")

        console.log(el.innerHTML + " foi clicado")
    })
})

// c1.addEventListener('click',(event)=>{
//     const eve = event.target
//     eve.classList.add("destaque")
// })

