
let btn = document.getElementById('btn');

btn.addEventListener('click', mudarTexto);  //adiciona um evento de clique ao botão

//declaração da função

function mudarTexto(){
    let d1=document.getElementById("d1");
    let d2=document.getElementById("d2");
    let d3=document.getElementById("d3");
    d1.innerHTML="luiza";
    d2.innerHTML="nascimento";
    d3.innerHTML="prado";
}

// chamada da função

// mudarTexto();
