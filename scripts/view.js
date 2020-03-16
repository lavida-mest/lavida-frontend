const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}




const viewByTrip = async () => {
    let response =  await fetch(`https://lavida-api.herokuapp.com/trip/5&1`, {
        method:'GET',
        headers: new Headers(
            {
                'Content-Type': 'application/json',
            }
        )
    });
    trip = await response.json();
    console.log(trip)
    localStorage.setItem("trip", JSON.stringify(trip));
}

const viewTrip = () => {
    trip = JSON.parse(localStorage.getItem("trip"));
    console.log(trip)
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

{/* <div class="itinerary-overview__content">
                <h1 class="itinerary-overview__title">Busia Weekend Escape</h1>
                <h5 class="location"><span class="icon icon-map-marker"></span> Secondi</h5>
                <div class="itinerary-overview__tags">
                  <ul class="tag-list">
                    <li class="tag"><span class="tag__text" title="Off the beaten track">
                      Highlights</span></li>
                  </ul>
                </div>
                Explore the stunning Chilean scenery and an endless variety of outdoor
                activities at your own pace with our carefully prepared 7 day, self-drive
                road trip! Ideal for those who prefer the 'non-plan' plan mixed with wind
                in their hair and a shot of adventure, all you have to do is grab the keys
                to the rental upon arrival and enjoy the ride (Some of it may be bumpy as
                not all the roads are paved). Ou...
              </div> */}