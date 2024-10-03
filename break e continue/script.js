
let n = 0
let max = 1000
let pares = 0

for(let i = n; i < max; i++){
    // console.log(i);
    if(i%2 != 0){
        continue
    }
    pares++
}
console.log("Quantos pares: " + pares)

// while(n < max) {
//     console.log("caio " + n)
//     if(n > 100){
//         break
//     }
//     n++
// }

console.log("fim do loop")