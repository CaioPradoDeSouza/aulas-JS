const caixa = document.querySelector('#caixa');

let mapa = new Map();

mapa.set('curso','Javascript');
mapa.set('linguagem','Java');
mapa.set('db','Postgresql');



console.log(mapa);

let pesq='db';
let has;
if(mapa.has(pesq)){
    res="Chave na coleção com o valor: " + mapa.get(pesq);
}else{
    res="Curso não encontrado";
}

res +="<br/> O tamanho da coleção é " + mapa.size;
caixa.innerHTML=res

mapa.forEach((el)=>{
    console.log(el)
})

mapa.delete('db');

mapa.forEach((el)=>{
    console.log(el)
})