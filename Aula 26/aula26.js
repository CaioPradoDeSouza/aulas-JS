// ARROW function aninhada parametrizada com REST e com SPREAD

const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(5,5,5))