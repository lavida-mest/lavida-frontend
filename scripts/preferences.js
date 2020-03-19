const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}

const viewTrip = () => {
    trip = JSON.parse(localStorage.getItem("trip"));
    tripLocation = document.getElementById('trip-location');
    tripDuration = document.getElementById('trip-duration');
    tripName = document.getElementById('trip-name');
    tripGuide = document.getElementById('trip-guide');
   
    trname = createNode('h3');
    // location = createNode('span');
    // duration = createNode('span');
    // guide = createNode('span');

    // location.classList.add('text-muted');
    // duration.classList.add('text-muted');
    
     trname.innerHTML = trip.trip_name;
    // location.innerHTML = trip.trip_location;
    // duration.innerHTML = trip.trip_duration;
    // guide.innerHTML = trip.trip_month;

    // append(tripLocation, location);
    // append(tripDuration, duration);
    append(tripName, trname);
    // append(tripGuide, guide);
}

viewTrip();