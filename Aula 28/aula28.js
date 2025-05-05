const converteInt=(e)=>parseInt(e)
const dobrar=(e)=>e*2
let num=['1','2','3','4','5'].map(converteInt)
let num2=['1','2','3','4','5'].map(dobrar)
console.log(num)
console.log(num2)


// const el = document.getElementsByTagName("div")
// const val=Array.prototype.map.call(el,({innerHTML})=>{
//     innerHTML
// })
// console.log(val)


// let el=document.getElementsByTagName("div")
// el=[...el]
// el.map((e,i)=>{
//     console.log(e.innerHTML)
//     e.innerHTML="CFB CURSOS"
    
// })


// const cursos=["HTML","CSS","JAVASCRIPT","PHP","REACT"]

// let c = cursos.map((el,i)=>{
//     return el
    
//      console.log("Curso: " + el + " - posição do curso: " +i)
// })

// console.log(c)