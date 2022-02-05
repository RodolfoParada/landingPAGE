


function procesarFormulario(evento){
  evento.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email =  document.getElementById('email').value;
  var check =  document.getElementById('check');
  var error = document.getElementById('error');
  error.style.color = 'red';

  console.log(nombre);
  console.log(apellido);

  const mensajesNode = document.getElementById("mensajes");
  mensajesNode.innerHTML = "datos guardados";
  mensajesNode.className = "ok";
  
  return false;
}

function enviarFormulario(e){
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email =  document.getElementById('email').value;
  var error = document.getElementById('error');
  error.style.color = 'red';

  var mensajesError = [];

  if(nombre.value === null  || nombre.value === ''){
    mensajesError.push('ingresa tu nombre');
 
  }

  if(email.value === null || email.value === ''){
    mensajesError.push('ingresa tu email');
  
  }
console.log(nombre);
console.log(email);

  /*if(check.value === null || check.value === ''){
    mensajesError.push('acepta los terminos y condiciones');
  
  }

  error.innerHTML = mensajesError.join(', ');
*/
  return false;


}


