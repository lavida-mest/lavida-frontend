let form = document.querySelector('.traveler-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let itenary = new FormData(form);
    for (choice of itenary) {
        localStorage.setItem(choice[0], choice[1])
        console.log(choice[0] + choice[1])
    }
});

const getTrips = async () => {
    let response =  await fetch("http://127.0.0.1:8080/trip", {
        method:'GET',
        headers: new Headers(
            {
                'Content-Type': 'application/json',
            }
        )
    });
    data = await response.json();
    console.log(data);
}

window.onload = getTrips();