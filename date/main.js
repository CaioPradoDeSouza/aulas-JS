const data = new Date();
let divData = document.getElementById('div_data')
let divRelogio = document.getElementById('div_relogio')

// tratando dia

let dia=data.getDate()<10?"0"+data.getDate():data.getDate()

dia=dia<10?"0"+dia:dia

// tratando mes

let mes=data.getMonth()
mes=mes<10?"0"+mes:mes

const data_r= dia+"/"+mes+"/"+data.getFullYear()

divData.innerHTML = data_r

const relogio=()=>{

    const data = new Date();

    let hora = data.getHours()
    hora=hora<10?"0"+hora:hora
    

    let minuto = data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto

    let segundo = data.getSeconds()
    segundo=segundo<10?"0"+segundo:segundo

    const horaFormatada=hora + `:` + minuto + `:` + segundo

    divRelogio.innerHTML = horaFormatada

}

const intervalo=setInterval(relogio,1000)






