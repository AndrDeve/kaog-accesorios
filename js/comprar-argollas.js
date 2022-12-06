// ARGOLLAS
document.querySelector("#submit37").addEventListener("click", e => {
e.preventDefault();

//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "573172171691";

let ref37 = document.querySelector("#ref37").textContent;
let n37 = document.querySelector("#n37").textContent;
let precio37 = document.querySelector("#precio37").textContent;

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
*_Bienvenidos a KAOG Accesorios_*%0A%0A
*Sección argollas*%0A%0A
*Tu compra:*%0A%0A
*Ref del producto:*%0D
${ref37}%0A%0A
*Nombre del producto:*%0D
${n37}%0A%0A
*Precio:*%0D
${precio37}%0A%0A`;

window.open(url);    
});