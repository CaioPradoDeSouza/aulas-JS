const c1=document.getElementById("c1")
const c2=document.getElementById("c2")
const c3=document.getElementById("c3")
const c4=document.getElementById("c4")
const c5=document.getElementById("c5")
const c6=document.getElementById("c6")

const arrayElementos=[c1,c2,c3,c4,c5,c6]
console.log(arrayElementos)

const colecaoHTML=document.getElementsByTagName("div")
console.log(colecaoHTML)

// Ira apresentar erro pois um html collection não pode ser operado de tantas maneiras quanto uma array

// colecaoHTML.map((e)=>{
//     console.log(e)
// })

// arrays de elementos são iteráveis de formas mais diversas, coleções HTML não são iteráveis da mesma forma, mas pode ser aplicado spread para que se torne iterável 

const colecaoHTMLSpread=[...document.getElementsByTagName("div")]

console.log(colecaoHTMLSpread)

colecaoHTMLSpread.map((e)=>{
    console.log(e)
})