
// manipulando objetos do DOM com getById

const dc1 = document.getElementById('c1')
const dc2 = document.getElementById('c2')
const dc3 = document.getElementById('c3')
const dc4 = document.getElementById('c4')
const dc5 = document.getElementById('c5')
const dc6 = document.getElementById('c6')

console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)

console.log(dc2)
console.log(dc2.id)
console.log(dc2.innerHTML)

// dc1.innerHTML = 'Novo Texto'

// dc2.innerHTML = 'Novo Texto'

console.log(dc1.innerHTML)
console.log(dc2.innerHTML)

const arrayElementos =[dc1,dc2,dc3,dc4,dc5,dc6]
console.log(arrayElementos)

// for(d of arrayElementos){
//     d.innerHTML = "linguagens"


// }

arrayElementos.map((e)=>{
    console.log(e.innerHTML)
})

// console.log(arrayElementos)