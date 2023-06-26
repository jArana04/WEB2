const diaa = document.getElementById('dia');
const horaa =document.getElementById('hora');
const minutoo= document.getElementById('minuto');
const segundoos= document.getElementById('segundos');
const finalMessagee= document.querySelector('.final');


const countdownDate= new Date('7 25, 2023 10:28:00').getTime();

let interval= setInterval(function(){
    const now= new Date().getTime();
    let distance = countdownDate - now;

    let dia= Math.floor(distance / (1000 * 60 * 60 * 24));
    let hora= Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
    let minuto= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let segundos= Math.floor((distance % (1000 * 60 )) / (1000));
    diaa.innerHTML= dia;
    horaa.innerHTML= hora;
    minutoo.innerHTML= minuto;
    segundoos.innerHTML= segundos; 

    if (distance<0){
        clearInterval(interval);
    }
}, 1000);









