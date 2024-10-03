
const converterInt=(e) =>parseInt(e)

const dobrar=(e)=>e*2

let num = ["1", "2", "3", "4", "5"].map(converterInt)

console.log(num)

let num1 = ["1", "2", "3", "4", "5"].map(dobrar)

console.log(num1)

// const el = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el,({innerHTML})=>
//     innerHTML
// )

// console.log(val)

// let el = document.getElementsByTagName("div")
// el=[...el]
// console.log(el)
// el.map((e,i)=>{
//     e.innerHTML="Cursos"
//     console.log(e.innerHTML)
// })

// const cursos=[
//     "React"
//     "Html",
//     "Css",
//     "JavaScript",
//     "PHP",
// ]

// let c = cursos.map((el,i)=>{
//     return el
// })

// console.log(c)