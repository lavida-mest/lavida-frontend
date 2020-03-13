const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}


const viewTrip = () => {
    rows = document.getElementById('trip');
        let tripName = createNode('h1'),
            tripLocation = createNode('h5'),
            locationIcon = createNode('span'),
            tripCategory = createNode('p'),
            tripDescription = createNode('p');

            tripName.classList.add('itinerary-overview__title');
            tripLocation.classList.add('location');
            locationIcon.classList.add('icon','icon-map-marker');
            tripName.innerHTML = localStorage.getItem('trip_name');
            tripLocation.innerHTML = locationIcon + ' '+ localStorage.getItem('trip_location');
            tripCategory.innerHTML = localStorage.getItem('trip_status');
            tripDescription.innerHTML = trip.trip_description;

            append(rows, tripName);
            append(rows, tripLocation);
            append(rows, tripCategory);
            append(rows, tripDescription);

}

viewTrip();