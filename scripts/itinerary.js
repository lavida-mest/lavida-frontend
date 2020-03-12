let form = document.querySelector('.traveler-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let itenary = new FormData(form);
    for (choice of itenary) {
        localStorage.setItem(choice[0], choice[1])
        console.log(choice[0] + choice[1])
    }
});


