//VARIABLES
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const btnReset = document.getElementById('resetBtn');
const formularioEnviar = document.getElementById('enviar-mail');

eventListeners();

//Event Listener
function eventListeners(){
    //Inicio de la aplicación y desabilitar submit
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Botón de enviar o Submit del formulario (Los dos hacen lo mismo)
    //btnEnviar.addEventListener('click', enviarEmail);
    formularioEnviar.addEventListener('submit', enviarEmail);

    //Botón de reset
    btnReset.addEventListener('click', resetFormulario);
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

//Enviar email
function enviarEmail(e){
    //console.log('Mail Enviado');
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que envia email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display= 'block';

    //Ocultar Spinner y mostrar git de enviado
    setTimeout( function() {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild( enviado );

        //Después de 5 seg. quita gif de enviado y limpia el formulario
        setTimeout( function() {
            enviado.remove();
            formularioEnviar.reset();
        }, 5000);

    }, 3000);

    e.preventDefault();
}

//Limpiar el formulario (Reset)
function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}