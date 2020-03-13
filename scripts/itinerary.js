let form = document.querySelector('.traveler-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    getSearchTrip();
})
const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}

    const getSearchTrip = async () => {
        const travelerType = document.getElementsByName('traveler-type').value;
        const travelMonth = document.getElementById('date-select').value;
        const hiking = document.getElementById('hiking').value;
        let response = await fetch(`https://lavida-api.herokuapp.com/trip/search/family&November&culture`, {
            method:'GET',
            headers: new Headers(
            {
                'Content-Type': 'application/json',
            }
        )
        });
        trips = await response.json();
        localStorage.setItem("preferences", JSON.stringify(trips));
        window.location = 'search.html'
    }
