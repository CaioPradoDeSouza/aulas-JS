// parametros rest com spread

function somar(...valores){
    let tam=valores.length
    let res = 0 
    for(let v of valores){
        res+=v
    }

    return res
}

console.log(somar(10,5,7,8))