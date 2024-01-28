function redirectToPage2() {
    var buttonValue = document.getElementById('d1').value;
    window.location.href = 'booking.html?buttonValue=' + encodeURIComponent(buttonValue);
  }
