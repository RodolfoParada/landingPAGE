var nombre = document.getElementById('nombre');
var email =  document.getElementById('email');
var check =  document.getElementById('check');
var error = document.getElementById('error');
error.style.color = 'red';

const mensajesNode = document.getElementById("mensajes");
mensajesNode,innerHTML = "datos guardados";
mensajesNode.className = ok;


function enviarFormulario(){
  var mensajesError = [];

  if(nombre.value === null  || nombre.value === ''){
    mensajesError.push('ingresa tu nombre');
 
  }

  if(email.value === null || email.value === ''){
    mensajesError.push('ingresa tu email');
  
  }


  if(check.value === null || check.value === ''){
    mensajesError.push('acepta los terminos y condiciones');
  
  }

  error.innerHTML = mensajesError.join(', ');

  return false;


}


