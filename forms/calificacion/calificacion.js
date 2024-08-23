function enviarCalificacion() {
   
    const vuelo = parseInt(document.getElementById('vuelo').value);
    const hospedaje = parseInt(document.getElementById('hospedaje').value);
    const servicios = parseInt(document.getElementById('servicios').value);

    
    const promedio = (vuelo + hospedaje + servicios) / 3;

   
    alert(`¡Gracias por calificar! Tu calificación promedio es: ${promedio.toFixed(2)}`);
}
