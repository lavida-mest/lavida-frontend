const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}

document.querySelector('#save-trip').addEventListener('click', (e) => {
    e.preventDefault();
    alertSnack = document.getElementById('show-on-success');
    if (alertSnack.style.display === "none") {
       alertSnack.style.display = "none"
   } else {
       alertSnack.style.display = "block"
   }
   window.location = 'travelersdashboard.html';
})

const viewTrip = () => {
    trip = JSON.parse(localStorage.getItem("trip"));
    row = document.getElementById('trip');
    activities = document.getElementById('trip-activities');
    tourGuide = document.getElementById('tour-guide');
    tripDuration = document.getElementById('trip-duration');
    price = document.getElementById('trip-price');
   
        let tripName = createNode('h1'),
            tripLocation = createNode('h5'),
            locationIcon = createNode('span'),
            tripCategory = createNode('p'),
            tripDescription = createNode('p');
            tripActivity = createNode('p');
            tripGuide = createNode('h4');
            duration = createNode('h4');
            tripPrice = createNode('h4');

            tripName.classList.add('itinerary-overview__title');
            tripLocation.classList.add('location');
            locationIcon.classList.add('icon','icon-map-marker');
            tripName.setAttribute("text-align", "center");
            tripName.innerHTML = trip.trip_name;
            tripLocation.innerHTML = trip.trip_location;
            tripCategory.innerHTML = trip.trip_status;
            tripDescription.innerHTML = trip.trip_description;
            tripActivity.innerHTML = trip.trip_activity;
            tripGuide.innerHTML = trip.trip_month;
            duration.innerHTML = trip.trip_duration;
            tripPrice.innerHTML = trip.trip_price + " USD";

            append(row, tripName);
            append(row, tripLocation);
            append(row, tripCategory);
            append(row, tripDescription);
            append(activities, tripActivity);
            append(tourGuide, tripGuide);
            append(tripDuration, duration);
            append(price, tripPrice);
}

viewTrip();