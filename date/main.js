let divData = document.getElementById('div_data')
let divRelogio = document.getElementById('div_relogio')
let timerContent = document.querySelector('.timerContent')
let inputAlarme = document.getElementById('tmp_alarme')
let btnAtivar = document.querySelector('.buttonAtivar')
let btnParar = document.querySelector('.buttonParar')
let horaAlarme = document.querySelector('#horaDoAlarme')


let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

btnAtivar.addEventListener('click',()=>{

    ts_atual=Date.now()
    ts_alarme=ts_atual+(inputAlarme.value*1000)
    alarme_ativado=true
    const dt_alarme= new Date(ts_alarme)
    horaAlarme.innerHTML="Hora do alarme: " + dt_alarme.getHours()+":"+dt_alarme.getMinutes()+":"+dt_alarme.getSeconds()
    

}
);

btnParar.addEventListener('click',()=>{
    
    alarme_ativado=false
    horaAlarme.innerHTML="Hora do Alarme"
    inputAlarme.value=0
    timerContent.classList.remove("alarme")

}
);

const data = new Date()

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

    if(alarme_ativado){
        if(data.getTime() >=ts_alarme){
            
            timerContent.classList.add("alarme")
            
        }
    }

}

const intervalo=setInterval(relogio,1000)






