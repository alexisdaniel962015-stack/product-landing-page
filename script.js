const boton = document.getElementById('btn-modo');
const cuerpo = document.body;

boton.addEventListener('click', () => {

  // Agregar/quitar la clase "oscuro" en el body
  cuerpo.classList.toggle('oscuro');

  // Cambiar el emoji del botón según el modo actual
  if (cuerpo.classList.contains('oscuro')) {
    boton.textContent = '☀️'; // estamos en oscuro → ofrecer modo claro
    boton.setAttribute('aria-label', 'Cambiar a modo claro');
  } else {
    boton.textContent = '🌙'; // estamos en claro → ofrecer modo oscuro
    boton.setAttribute('aria-label', 'Cambiar a modo oscuro');
  }

});