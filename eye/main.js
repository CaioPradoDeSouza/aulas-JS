const olhos = [...document.getElementsByClassName('olho')];

let posx_mouse = 0
let posy_mouse = 0

window.addEventListener("mousemove",(evt)=>{

    posx_mouse = evt.clientX;
    posy_mouse = evt.clientY;

    const rotacao =Math.atan2(posx_mouse, posy_mouse)*180/Math.PI;

    olhos.forEach((o)=>{
        o.style.transform="rotate("+rotacao+"deg)"
    })
})

