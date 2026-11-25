// Sample data for testing
const sampleFlight = {
    number: "TEST123",
    departureAirport: "Gdańsk (EPGD)",
    departureTime: "10:00",
    arrivalAirport: "Warsaw (EPWA)",
    arrivalTime: "11:00"
};

const flightForm = document.getElementById("flight-form");
const flightInput = document.getElementById("flight-number");
const flightDetails = document.getElementById("flight-details");

flightForm.querySelector("button").disabled = false;

// Run the search when the user clicks Find flight or presses Enter
flightForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Keep the page from reloading

    const searchNumber = flightInput.value.trim().toUpperCase();

    if (searchNumber === sampleFlight.number) {
        document.getElementById("selected-flight-number").textContent = sampleFlight.number;
        document.getElementById("departure-airport").textContent = sampleFlight.departureAirport;
        document.getElementById("departure-time").textContent = sampleFlight.departureTime;
        document.getElementById("arrival-airport").textContent = sampleFlight.arrivalAirport;
        document.getElementById("arrival-time").textContent = sampleFlight.arrivalTime;

        flightDetails.hidden = false;
    } else {
        flightDetails.hidden = true;
        alert("No flight found. Try TEST123.");
    }
});
