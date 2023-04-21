const botonMensajes = document.getElementById("btnBadge");
const cajaMensajes = document.querySelector(".cajaMensajes");

botonMensajes.onclick = function(){
    cajaMensajes.classList.toggle("visually-hidden");
 
    if(cajaMensajes.classList.contains("visually-hidden")){
        cajaMensajes.previousElementSibling.textContent = "4+";
    }else{
        cajaMensajes.previousElementSibling.textContent = "";
    }
}