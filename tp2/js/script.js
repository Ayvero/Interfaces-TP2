document.addEventListener("DOMContentLoaded", function () {
  let percent = 0;
  const loadingPercentElement = document.getElementById("loading-percent");
  const spinnerElement = document.querySelector(".spinner");

  function updateLoadingPercent() {
      loadingPercentElement.textContent = percent + "%";
      spinnerElement.style.transform = `rotate(${percent * 3.6}deg)`; // Hace que la ruedita gire
  }

  function incrementPercent() {
      percent++;
      updateLoadingPercent();

      if (percent < 100) {
          setTimeout(incrementPercent, 50); // Incrementa el porcentaje cada 50 ms
      } else {
          // Redirige a la siguiente página cuando llega al 100%
          window.location.href = "index.html";
      }
  }

  // Inicia la animación del porcentaje
  incrementPercent();
});

document.getElementById('miFormulario').addEventListener('submit', function (e) {
    
    var correo = document.getElementsByName('correo')[0].value;
    var contrasena = document.getElementsByName('contrasena')[0].value;
  
    if ( !correo || !contrasena) {
      alert('Por favor, complete todos los campos requeridos.');
      e.preventDefault();
    } else {
      // Mostrar el mensaje de confirmación
      var mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
      mensajeConfirmacion.style.display = 'block';
  
      // Ocultar el mensaje después de unos segundos (puedes ajustar el tiempo)
      setTimeout(function () {
        mensajeConfirmacion.style.display = 'none';
      }, 3000); // El mensaje se ocultará después de 3 segundos (3000 ms)
    }
  });
  