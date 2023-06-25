
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

const cosas= document.getElementById("carrito")
const productos=[
    {
        nombre: "Jordan 1", precio: 150, 
        img: "https://nikearprod.vtexassets.com/arquivos/ids/700161-800-800?v=638229717864100000&width=800&height=800&aspect=true"

    },
    {
        nombre: "Air Force", precio: 100, 
        img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f8dfa191-60b3-44c1-b730-b25e0a908c35/calzado-air-force-1-07-flyease-vpmlK3.png"
    },
    {
        nombre: "Yeezy", precio: 850,
        img: "https://cdn.shopify.com/s/files/1/0548/7362/0655/products/snakerstoreAdidas_Yeezy_700_V2_Tephra-FU7914-0.png?v=1673889642"   
    },
    {
        nombre: "Dunk Low", precio: 110,
        img: "https://media.gq.com.mx/photos/6234b98c1982a4c011ad4c10/master/w_3000,h_1688,c_limit/nike-dunk-low-panda-negros-para-hombre-laterales.jpeg"
    }


];

let carrito=[];

productos.forEach((zapas)=> {
    let content= document.createElement("div");
    content.innerHTML= `
        <img src="${zapas.img}">
        <h3>${zapas.nombre}</h3>
        <p>${zapas.precio} $</p>

     `;

     cosas.append(content)


})







