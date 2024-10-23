const caixa = document.querySelector('#caixa');

let musicas= new Set(["musica1","musica boa","musica10"]);

console.log(musicas);

musicas.add("musica muito legal");
musicas.add("musica1");
musicas.add("musica10");
musicas.add("musica101");

console.log(musicas);

musicas.forEach((el)=>{
    caixa.innerHTML+=el + "<br/>";
})

for(let m of musicas){
    console.log(m);
    caixa.innerHTML+=m ="new music<br/>"
}

musicas.delete("musica1");
console.log(musicas);

musicas.clear();

console.log(musicas);


// Set não permite a entradas duplicadas