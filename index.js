const localTrips = [{destination:"gym",hour:"14",minute:"10",passengers:"3",start:"mcdonalds",wheelchair:"on", caregiver: "off"}
];
const updateLocalTrips = (localTripData) => {
    console.log(localTripData);
    const localTrips = document.getElementById("localTrips");
    const localTripCard = document.createElement("div");
    localTripCard.className = "column"

    localTripCard.innerHTML = (
        `<div class="column">
        <h3>${"Trip to " + localTripData.destination}</h3>
        <p>${"From: " + localTripData.start + "\nSeats Remaining: " + (6 - (localTripData.passengers)) + (
            localTripData.wheelchair == "on" ? "\nWheelchair ramp included" : ""
        ) + (
            localTripData.caregiver == "on" ? "\nCaregiver included" : ""
        )}</p>
        </div>`
    );

    console.log(localTripCard)
    localTrips.appendChild(localTripCard);
}

let form = document.getElementById("rideForm");

const rideFormHandler = (event) => {
    event.preventDefault()
    alert("Order Confirmed");

    let form = document.getElementById("rideForm");
    var formData = new FormData(form);

    console.log(formData.get("start"));
    
    // iterate through entries...
    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    
    // ...or output as an object
    console.log(Object.fromEntries(formData));

    updateLocalTrips({
        destination: formData.get("destination"),
        hour: formData.get("hour"),
        minute: formData.get("minute"),
        passengers: formData.get("passengers"),
        start: formData.get("start"),
        wheelchair: formData.get("wheelchair"),
        caregiver: formData.get("caregiver")
    })
}

addEventListener('submit', rideFormHandler);



// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }