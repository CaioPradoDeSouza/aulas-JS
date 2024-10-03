
// função com retorno

function canal(){
    
    let n1 = 11
    let n2 = 3
    let res = n1*n2
    if(res%2 == 0){
        return "par"
        
    }else{
        return "impar"
        
    }

}

// chamando a função e imprimindo o retorno
let num = canal()

console.log(num)
console.log("fim da função")
