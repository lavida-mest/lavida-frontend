const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}


const getTrips = async () => {
    let response =  await fetch("https://lavida-api.herokuapp.com/trip", {
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
            tripActivities = createNode('span'),
            guideID = createNode('input'),
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
        console.log(trip)
        window.location = 'single-trip.html'
        console.log(trip)
    }
    
    // <h1 class="itinerary-overview__title">Busia Weekend Escape</h1>
    //             <h5 class="location"><span class="icon icon-map-marker"></span> Secondi</h5>
    //              <p>Highlights</p>
    //             <p> Explore the stunning Chilean scenery and an endless variety of outdoor
    //             activities at your own pace with our carefully prepared 7 day, self-drive
    //             road trip! Ideal for those who prefer the 'non-plan' plan mixed with wind
    //             in their hair and a shot of adventure, all you have to do is grab the keys
    //             to the rental upon arrival and enjoy the ride (Some of it may be bumpy as
    //             not all the roads are paved). Ou...</p>

    // localStorage.setItem("trips", JSON.stringify(trips));
    // trips = JSON.parse(localStorage.getItem("trips"));
    // console.log(trips[1].trip_activity);
}
window.onload = getTrips();

