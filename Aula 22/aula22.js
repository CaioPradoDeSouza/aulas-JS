const VALOR_PADRAO=0

let valor=0
console.log("Antes " + valor)
function adicionar(v){
    return valor + v
}

valor=adicionar(11)



console.log("Depois " + valor)

function soma(n1=VALOR_PADRAO,n2=VALOR_PADRAO){
    let res
    res = n1+n2
    return res
}

let resultado_soma=soma(5,5)
// console.log(resultado_soma)