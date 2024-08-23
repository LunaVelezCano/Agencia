function generarValorTicket() {
 
  const valorGenerado = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

 
  document.getElementById('ticketValue').innerText = `$${valorGenerado}`;
}

function confirmarCompra() {
  const destination = document.getElementById('destination').value;
  const numTickets = document.getElementById('numTickets').value;

  if (destination.trim() === '' || numTickets <= 0) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
  }

  const ticketValue = document.getElementById('ticketValue').innerText;
  const date = document.getElementById('date').value;

  const confirmMessage = `¡Compra confirmada!\nDestino: ${destination}\nCantidad de Tickets: ${numTickets}\nValor del Ticket: ${ticketValue}\nFecha de Tickets: ${date}`;

  alert(confirmMessage);
}

function cancelarCompra() {

  alert('Compra cancelada');
}


