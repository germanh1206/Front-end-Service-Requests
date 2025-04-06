document.getElementById('serviceRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
  
    // Construir el objeto con los datos de la solicitud de servicio
    const serviceRequestData = { name, description };
  
    // Enviar la solicitud al backend (sin trailing slash)
    fetch('https://backend-lyf2.onrender.com/service-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceRequestData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      alert('Service Request creado exitosamente! ID: ' + data._id);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error en la solicitud: ' + error.message);
    });
  });