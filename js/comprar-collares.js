// COLLARES
document.querySelector("#submit25").addEventListener("click", e => {
e.preventDefault();

//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "573172171691";

let ref25 = document.querySelector("#ref25").textContent;
let n25 = document.querySelector("#n25").textContent;
let precio25 = document.querySelector("#precio25").textContent;

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
*_Bienvenidos a KAOG Accesorios_*%0A%0A
*Sección collares*%0A%0A
*Tu compra:*%0A%0A
*Ref del producto:*%0D
${ref25}%0A%0A
*Nombre del producto:*%0D
${n25}%0A%0A
*Precio:*%0D
${precio25}%0A%0A`;

window.open(url);    
});


document.querySelector("#submit26").addEventListener("click", e => {
e.preventDefault();

//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "573172171691";

let ref26 = document.querySelector("#ref26").textContent;
let n26 = document.querySelector("#n26").textContent;
let precio26 = document.querySelector("#precio26").textContent;

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
*_Bienvenidos a KAOG Accesorios_*%0A%0A
*Sección collares*%0A%0A
*Tu compra:*%0A%0A
*Ref del producto:*%0D
${ref26}%0A%0A
*Nombre del producto:*%0D
${n26}%0A%0A
*Precio:*%0D
${precio26}%0A%0A`;

window.open(url);    
});