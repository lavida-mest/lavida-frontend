const createNode = (element) => {
    return document.createElement(element);
}
const append = (parent, el) => {
    return parent.appendChild(el);
}

trips = JSON.parse(localStorage.getItem("preferences"));

trips.map((trip) => {
    rows = document.getElementById('trips');
    let tripCard = createNode('div'),
        tripWrap = createNode('div'),
        tripContent = createNode('div'),
        tripImage = createNode('a'),
        viewTrip = createNode('span'),
        tripDurationGuide = createNode('span'),
        tourName = createNode('h3'),
        tourLocation = createNode('h6'),
        tripActivities = createNode('span');


        tripCard.classList.add('col-md-4');
        tripWrap.classList.add('project-wrap');
        tripContent.classList.add('text', 'p-4');
        tripImage.classList.add('img');
        tripImage.setAttribute('style', 'background-image: url(images/destination-1a.png);');
        tripImage.addEventListener('click', ()=> viewByTrip())
        viewTrip.classList.add('price');
        viewTrip.setAttribute("id", "viewTrip")
        tripDurationGuide.classList.add('days');
        tripActivities.classList.add('days');
        tripDurationGuide.innerHTML = `${trip.trip_duration}`;
        viewTrip.innerHTML = 'View Trip';
        tourName.innerHTML = trip.trip_name;
        tourLocation.innerHTML = trip.trip_location;
        tripActivities.innerHTML = trip.trip_activity;

        append(tripCard, tripWrap);
        append(tripWrap, tripImage);
        append(tripWrap, tripContent);
        append(tripContent, viewTrip);
        append(tripContent, tripDurationGuide);
        append(tripContent, tourName);
        append(tripContent, tourLocation);
        append(tripContent, tripActivities);
        append(rows, tripCard);
        
        const viewByTrip = async () => {
            let response =  await fetch(`https://lavida-api.herokuapp.com/trip/${trip.trip_id}&${trip.tour_guide}`, {
                method:'GET',
                headers: new Headers(
                    {
                        'Content-Type': 'application/json',
                    }
                )
            });
            trip = await response.json();
            localStorage.setItem("trip", JSON.stringify(trip));
            window.location = 'single-trip.html'
        }
});