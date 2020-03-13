const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}


const viewTrip = () => {
    trip = JSON.parse(localStorage.getItem("trip"));
    row = document.getElementById('trip');
        let tripName = createNode('h1'),
            tripLocation = createNode('h5'),
            locationIcon = createNode('span'),
            tripCategory = createNode('p'),
            tripDescription = createNode('p');

            tripName.classList.add('itinerary-overview__title');
            tripLocation.classList.add('location');
            locationIcon.classList.add('icon','icon-map-marker');
            tripName.innerHTML = trip.trip_name;
            tripLocation.innerHTML = trip.trip_location;
            tripCategory.innerHTML = trip.trip_status;
            tripDescription.innerHTML = trip.trip_description;

            append(row, tripName);
            append(row, tripLocation);
            append(row, tripCategory);
            append(row, tripDescription);

}

viewTrip();