let form = document.querySelector('.traveler-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    getSearchTrip();
})

    const getSearchTrip = async () => {
        const travelerType = document.getElementsByName('traveler-type').value;
        const travelMonth = document.getElementById('date-select').value;
        const hiking = document.getElementById('hiking').value;
        let response = fetch(`http://127.0.0.1:8080/trip/search/solo&September&hiking`, {
            method:'GET',
            headers: new Headers(
            {
                'Content-Type': 'application/json',
            }
        )
        });
        trips = await response.json();
        window.location = 'search.html'
        return trips.map((trip) => {
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
                viewTrip.classList.add('price');
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
        });

    }
