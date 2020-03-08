
const errorMessage = () => {
    alert("fill in this field since it is empty");
}

document.getElementById("location").oninput = function(event) {
    password = getValue(event);
    alert(location)
  };

  function getValue(event) {
    return event.target.value;
  }
window.onload = () => {
    let lcn = document.getElementById("location").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let price = document.getElementById("price");

    let search = document.querySelector(".default-search");

    console.log(lcn)
            console.log(checkin)
            console.log(checkout)
            console.log(price)
    search.addEventListener("click", searchTrip)
    function searchTrip ()  {
        if(lcn !== '' && checkin !== '' && checkout !== '' && price !== '') {
            localStorage.setItem("location", lcn)
            localStorage.setItem("check in", checkin)
            localStorage.setItem("checkout", checkout)
            localStorage.setItem("price", price)
            alert("storage successfull")
        }
        errorMessage();
    }
}