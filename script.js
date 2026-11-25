// Sample data for testing
const sampleFlight = {
    number: "TEST123",
    departureAirport: "Gdańsk (EPGD)",
    departureIcao: "EPGD",
    departureTime: "10:00",
    arrivalAirport: "Warsaw (EPWA)",
    arrivalIcao: "EPWA",
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

const airportForm = document.getElementById("airport-form");
const airportInput = document.getElementById("airport-code");
const directionSelect = document.getElementById("flight-direction");
const flightList = document.getElementById("flight-list");
const matchingFlights = document.getElementById("matching-flights");

airportForm.querySelector("button").disabled = false;

airportForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const airportCode = airportInput.value.trim().toUpperCase();
    const isDeparture = directionSelect.value === "departures";

    // Clear the previous results before each search.
    matchingFlights.replaceChildren();
    flightDetails.hidden = true;
    flightList.hidden = false;

    let flightAirport = sampleFlight.arrivalIcao;
    let flightTime = sampleFlight.arrivalTime;

    if (isDeparture) {
        flightAirport = sampleFlight.departureIcao;
        flightTime = sampleFlight.departureTime;
    }

    const listItem = document.createElement("li");
    matchingFlights.appendChild(listItem);

    if (airportCode !== flightAirport) {
        listItem.textContent = "No matching flights found.";
        return;
    }

    const flightButton = document.createElement("button");
    flightButton.type = "button";
    flightButton.textContent =
        `${flightTime} | ${sampleFlight.number} | ` +
        `${sampleFlight.departureAirport} → ${sampleFlight.arrivalAirport}`;

    listItem.appendChild(flightButton);

    flightButton.addEventListener("click", function () {
        // Use the flight-number search you already built to show the details.
        flightInput.value = sampleFlight.number;
        flightList.hidden = true;
        flightForm.requestSubmit();
    });
});