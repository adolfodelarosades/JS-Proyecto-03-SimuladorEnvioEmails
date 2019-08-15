//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

eventListeners();

//Event Listener
function eventListeners(){
    //Inicio de la aplicación y desabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);
}

//FUNCIONES
function inicioApp(){
    //Deshabilitar botón de envío
    btnEnviar.disabled = true;
}