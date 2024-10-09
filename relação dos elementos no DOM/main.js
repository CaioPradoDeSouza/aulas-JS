
const caixa1=document.querySelector('#caixa1')
const btn_c=[...document.querySelectorAll('.curso')]
const c1_2=document.querySelector('#c1_2')
const cursos=["HTML","CSS","JAVASCRIPT","PHP","REACT","MYSQL","REACT NATIVE"]

// create element

// const novoElemento=document.createElement("div")
// novoElemento.setAttribute("id","c7")
// novoElemento.setAttribute("class","curso c1")


//append child
// adicionando cursos dinâmicamente
cursos.map((el,chave)=>{

    // console.log(chave)

    const novoElemento=document.createElement("div")

    novoElemento.setAttribute("id","c"+chave)

    novoElemento.setAttribute("class","curso c1")

    novoElemento.innerHTML = el

    const btn_lixeira=document.createElement("img")

    btn_lixeira.setAttribute("src","./lixeira-de-reciclagem.png")

    btn_lixeira.setAttribute("class","icone")

    novoElemento.appendChild(btn_lixeira)

    btn_lixeira.addEventListener("click",(evt)=>{
        
        caixa1.removeChild(evt.target.parentNode)
    })

    caixa1.appendChild(novoElemento)
})








// caixa1.appendChild(novoElemento)
// novoElemento.innerHTML = "nova div"

// console.log(c1_2.parentNode.parentNode.parentNode.children[2])

// console.log(caixa1.hasChildNodes())
// console.log(btn_c[0].hasChildNodes())
// console.log(btn_c[0].childNodes)

// console.log(caixa1.children.length > 0 ? "possui elementos filhos" : "não possui elementos filhos")

// console.log(caixa1.firstElementChild.innerHTML = "caixa element")

// console.log(caixa1.children[4].innerHTML = "caixa element2")


// console.log(btn_c)
// console.log(caixa1.children[caixa1.children.length-1])

// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)


// console.log(btn_c[0].getRootNode())
// console.log(btn_c[0].ownerDocument)