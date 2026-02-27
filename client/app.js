// ----------------------------------------
// Booking page: pre-select room from URL param
// e.g. booking.html?room=Deluxe+Room
// ----------------------------------------
const params = new URLSearchParams(window.location.search);
const roomParam = params.get('room');
if (roomParam) {
  const select = document.getElementById('room');
  if (select) select.value = roomParam;
}

// ----------------------------------------
// Handle booking form submission
// ----------------------------------------
const form = document.getElementById('booking-form');
if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name     = document.getElementById('name').value;
    const email    = document.getElementById('email').value;
    const room     = document.getElementById('room').value;
    const checkin  = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (!name || !email || !room || !checkin || !checkout) {
      alert('Please fill in all fields.');
      return;
    }

    alert(
      'Booking confirmed!\n\n' +
      'Name      : ' + name + '\n' +
      'Email     : ' + email + '\n' +
      'Room      : ' + room + '\n' +
      'Check-in  : ' + checkin + '\n' +
      'Check-out : ' + checkout
    );
  });
}
