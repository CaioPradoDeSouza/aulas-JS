const p_array = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnPesquisar = document.getElementById('btn_Pesquisar')
const resultado = document.getElementById('resultado')

const elementos_array=["html","css","javascript","json"]

p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click", (evt)=>{
    resultado.innerHTML= " Valor não encontrado"
    const ret = elementos_array.find((e,i,)=>{
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML=" Valor encontrado : " + e + " na posicao: " + i
            return e
        }
    })

    console.log(ret)
})