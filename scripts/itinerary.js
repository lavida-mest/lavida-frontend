let form = document.querySelector('.traveler-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let itenary = new FormData(form);
    for (choice of itenary) {
        localStorage.setItem(choice[0], choice[1])
        console.log(choice[0] + choice[1])
    }
});

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

    return trips.map((trip) => {
        
    });





    localStorage.setItem("trips", JSON.stringify(trips));
    trips = JSON.parse(localStorage.getItem("trips"));
    console.log(trips[1].trip_activity);
}

window.onload = getTrips();



const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}



{/* <div class="col-md-4 ftco-animate">
    <div class="project-wrap">
       <a href="#" class="img" style="background-image: url(images/destination-1a.png);"></a>
       		<div class="text p-4">
       			<span class="price">Sightntrips</span>
       			<span class="days">3 Days Tour</span>
       			<h3><a href="#">Busia Weekend Escape</a></h3>
        		<p class="location"><span class="ion-ios-map"></span>Sekondi-Takoradi</p>
        		<ul>
        	    	<li><span class="flaticon-sun-umbrella"></span>Near Beach</li>
            	</ul>
        	</div>
    </div>
</div> */}