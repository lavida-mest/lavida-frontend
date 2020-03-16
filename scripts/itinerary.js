let form = document.querySelector('.traveler-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const travelerType = document.querySelector('input[name="traveler-type"]:checked').value;
    const travelMonth = document.getElementById('date-select').value;
    const category = document.getElementsByClassName('category');
    let checkedCategory = ''
    for (let i = 0; i < 4; i++) {
        if (category[i].checked == true) {
            checkedCategory += category[i].value+""
        }       
    }
    const activity = document.getElementsByClassName('activity');
    let checked = ''
    for (let i = 0; i < 7; i++) {
        if (activity[i].checked == true) {
            checked += activity[i].value+""
        }
    }
    fetch(`https://lavida-api.herokuapp.com/trip/search/${travelerType}&${travelMonth}&${checked}&${checkedCategory}`, {
        method:'GET',
        headers: new Headers(
        {
            'Content-Type': 'application/json',
        }
        )
    }).then((response) => response.json())
    .then((data)=> {
        let trips = data;
        localStorage.setItem("preferences", JSON.stringify(trips));
        window.location = 'search.html'
    }).catch((error)=> {
        console.log(error)
    })
})
const createNode = (element) => {
    return document.createElement(element);
}


const append = (parent, el) => {
    return parent.appendChild(el);
}

