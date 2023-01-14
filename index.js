// const localTrips = [
//     {

//     }
// ]

// for (localTrip in localTrips) {
//     updateLocalTrips(localTrip);
// }

const updateLocalTrips = (localTripData) => {
    const localTrips = document.getElementById("localTrips");
    // select div, create card, add card as child node of div
}

let form = document.getElementById("rideForm");

const rideFormHandler = (event) => {
    event.preventDefault()

    let form = document.getElementById("rideForm");
    var formData = new FormData(form);
    
    // iterate through entries...
    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    
    // ...or output as an object
    console.log(Object.fromEntries(formData));

    updateLocalTrips(localTrips)
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