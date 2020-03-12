const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}


const getTrips = async () => {
    let response =  await fetch("http://127.0.0.1:8080/trip", {
        method:'GET',
        headers: new Headers(
            {
                'Content-Type': 'application/json',
            }
        )
    });
    trips = await response.json();
    for (trip of trips){
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
            guideID = createNode('input')
            tripID = createNode('input')



            tripCard.classList.add('col-md-4');
            tripWrap.classList.add('project-wrap');
            tripContent.classList.add('text', 'p-4');
            tripImage.classList.add('img');
            tripImage.setAttribute('style', 'background-image: url(images/destination-1a.png);');
            tripImage.setAttribute('value', trip.trip_id);
            tripImage.addEventListener('click', ()=> viewByTrip())
            guideID.setAttribute('type', 'hidden');
            tripID.setAttribute('type', 'hidden');
            viewTrip.classList.add('price');
            viewTrip.setAttribute('value', trip.tour_guide);
            viewTrip.classList.add('guide_id');
            tripImage.classList.add('trip_image');
            tripDurationGuide.classList.add('days');
            tripActivities.classList.add('days');
            tripDurationGuide.innerHTML = `${trip.trip_duration}`;
            viewTrip.innerHTML = 'View Trip';
            tourName.innerHTML = trip.trip_name;
            tourLocation.innerHTML = trip.trip_location;
            tripActivities.innerHTML = trip.trip_activity;
            guideID.innerHTML = trip.tour_guide;
            tripID.innerHTML = trip.trip_id;


            append(tripCard, tripWrap);
            append(tripWrap, tripImage);
            append(tripWrap, tripContent);
            append(tripContent, viewTrip);
            append(tripContent, tripDurationGuide);
            append(tripContent, tourName);
            append(tripContent, tourLocation);
            append(tripContent, tripActivities);
            append(rows, tripCard);          
    }
    const viewByTrip = async () => {
        let response =  await fetch(`http://127.0.0.1:8080/trip/${trip.trip_id}&${trip.tour_guide}`, {
            method:'GET',
            headers: new Headers(
                {
                    'Content-Type': 'application/json',
                }
            )
        });
        trip = await response.json();
        window.location = 'single-trip.html'
        console.log(trip)
    }
    // localStorage.setItem("trips", JSON.stringify(trips));
    // trips = JSON.parse(localStorage.getItem("trips"));
    // console.log(trips[1].trip_activity);
}
window.onload = getTrips();

