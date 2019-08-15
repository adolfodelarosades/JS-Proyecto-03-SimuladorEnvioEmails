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

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
}

//FUNCIONES
function inicioApp(){
    //Deshabilitar botón de envío
    btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo(){
    
    //Se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    //Validar unicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    //Habilitar botón Enviar
    if(email.value !== '' && asunto.value != '' && mensaje.value !== ''){
        if(errores.length === 0){
           btnEnviar.disabled = false;
        }
    }else{
        btnEnviar.disabled = true;
    }
}

function validarLongitud(campo){
    if( campo.value.length > 0 ){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}

function validarEmail(campo){
    const email = campo.value;
    if(email.indexOf('@') !== -1 ){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }

}