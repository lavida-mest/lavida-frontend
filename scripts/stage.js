let form =  document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let stage = new FormData(form);
    for (const choice of stage){
        localStorage.setItem('stage', choice[1]);
        window.location.href = './plan-tripdetails.html';
    }
    console.log('successful');
});
