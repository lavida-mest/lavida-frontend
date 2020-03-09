
let form =  document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let stage = new FormData(form);
    console.log(stage)
    for (choice in stage){
        console.log(choice[1])
    }
    // const tripIdeas = document.getElementById('talk-type-1').value;
    // const planTrip  = document.getElementById('talk-type-2').value;
    // const bookTrip = document.getElementById('talk-type-1').value;
    
    // if(tripIdeas != '' || planTrip != '' || bookTrip != ''){

    // }

    // localStorage.setItem('trip-ideas', tripIdeas);
    // localStorage.setItem('plan-trip', planTrip);
    // localStorage.setItem('book-trip', bookTrip);
    console.log('successful');
    alert('clicked')
});
