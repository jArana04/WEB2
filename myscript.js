
//let numeros= [15,25,25,65]
//array comienza en 0, em la primera posicion
//el array se declara con const y se escribe todo en mayuscula , const ARRAY = [11,"JUAN"]
//array puede modificar const. 

//metodos de array:
//1= push, agrega un valor al array y le tenemos que indicar que queremos agregar
//2= pop, quita ultimo elemento aca no tenemos que indicar nada xq es el ultimo
//3= shift, elimina el primer elemento
//4= unshift, agrega un elemento, debemos indicar que agregar 


//let profesor= { ---------> esto quiere decir objeto literal
//nombre="esteban"
//edad=29+1
//consol.log(mejor.profesor.nombre) printea esteban}

//formas de declarar variables:

//1))
//function saludar (){
    //console.log("hola mundo")
//} 
//saludar() ----->(aca lo que estamos haceindo es llamar a la funcion para que se printee)


//2))
//function (){
    //let saludar = finction

//}
//en este tipo de fromas de declarar funciones no se puede printear antes de que se declare 
//como se podia en el anterior metodo

//3)
//const materials = [
    //'Hydrogen',
    //'Helium',
    //'Lithium',
    //'Beryllium'
//];
  
//console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]

//15/6/23
//el "do while" ejecuta aunque no se cumpla la condicion dada
// i++ (quiero que vaya en 1 en 1)
//1++2(quiero que sume de dos en dos)
// .map recorre todo el ARRAY, MAP recibe una funcion como parametro
//no aplicad for a nuestras paginas
//hacer una cuenta atras y calcular segun el precio en dolar blue convertirlo a peso argentino

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









