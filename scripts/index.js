document.querySelector('.search-property-1').addEventListener('submit', (e) => {
    e.preventDefault();
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const price = document.getElementById('price').value;
    localStorage.setItem('location', location);
    localStorage.setItem('checkin', checkin);
    localStorage.setItem('checkout', checkout);
    localStorage.setItem('price', price);
    window.location.href = './plan-trip1.html';
});


function toggleSpinner(selector, text, showSpinner = true) {
    let spinner = '';
    if (showSpinner) {
      spinner = '<i class="fas fa-circle-notch fa-spin"></i>';
    }
    selector.innerHTML = `${spinner} ${text}`;
}