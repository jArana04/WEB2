const cosas= document.getElementById("carrito");
const vercarrito= document.getElementById("verCarrito");
const modalcontainer= document.getElementById("modal-container");

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
        nombre: "Forum Bad Bunny", precio: 850,
        img: "https://media.sivasdescalzo.com/media/catalog/product/H/Q/HQ2153_sivasdescalzo-adidas-BAD_BUNNY_FORUM-1669729714-1.jpg?quality=70&auto=webp&fit=bounds&width=420"   
    },
    {
        nombre: "Dunk Low", precio: 110,
        img: "https://nikearprod.vtexassets.com/arquivos/ids/700122-800-800?v=638229717021670000&width=800&height=800&aspect=true"
    },
    {
        nombre: "Vans Potato", precio: 400,
        img: "https://cdn.shopify.com/s/files/1/0630/8082/5070/products/vans-vault-x-imran-potato-ua-knu-skool-vr3-lx-schwarz-weiss-244053.jpg?v=1665683026&width=1445"   
    },
    {
        nombre: "Jordan3 PINE GREEN", precio: 180,
        img: "https://libur.com.co/cdn/shop/products/IMG_6324.jpg?v=1669333432"   
    },
    {
        nombre: "Adidas Ozweego", precio: 110,
        img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/86dbbccdb3db4f5f846eaa7600ee8b42_9366/Zapatillas_OZWEEGO_Negro_EE6999_01_standard.jpg"   
    },
    {
        nombre: "Adidas Adilette", precio: 100,
        img: "https://www.highsnobiety.com/static-assets/thumbor/-BdiNCRRcCbW2Sbs4sodJS_gvGQ=/1600x1068/www.highsnobiety.com/static-assets/wp-content/uploads/2022/05/02222019/adidas-adilette-22-slide-sandal-colorways-5-e1656071849575.jpg"   
    },

    
    
    


];

let carrito=[];

productos.forEach((product)=> {
    let content= document.createElement("div");
    content.className="card";
    content.innerHTML= `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="precioo">${product.precio} $</p>

    `;
     
    cosas.append(content);
    
    let comprar= document.createElement("button");
    comprar.innerText= "comprar";
    comprar.className= "comprar";
    content.append(comprar);

    comprar.addEventListener("click",()=>{
        carrito.push({
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
});


verCarrito.addEventListener("click", () =>{
    modalcontainer.innerHTML= "";
    modalcontainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML= `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalcontainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText= "X";
    modalbutton.className= "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalcontainer.style.display = "none";

    });

    modalHeader.append(modalbutton);

    carrito.forEach((product)=> {
        let carritoContent = document.createElement("div");
        carritoContent.className= "modal-content";
        carritoContent.innerHTML= `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $ </p>
        `;

        modalcontainer.append(carritoContent);
    });

    const total= carrito.reduce((acc,productos) => acc + productos.precio, 0);

    const precio = document.createElement("div");
    precio.className= "total-content";
    precio.innerHTML= `Total a pagar: ${total}`;
    modalcontainer.append(precio)
});