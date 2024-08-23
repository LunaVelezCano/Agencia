function generarValorReserva() {
    
    const valorGenerado = Math.floor(Math.random() * (8000 - 3000 + 2)) + 2000;
  
    
    document.getElementById('reservaValue').innerText = `$${valorGenerado}`;
}
function confirmarReservacion() {
    alert('Reservación confirmada');
}

function cancelarReservacion() {
    document.getElementById('reservations-form').reset();
}
