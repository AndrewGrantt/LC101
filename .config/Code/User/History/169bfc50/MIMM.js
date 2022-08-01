// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    window.addEventListener("load", function() {
        this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
           response.json().then(function(json) {
              const div = document.getElementById("missionTarget");
              const missionDestination = Math.round(Math.random()*5);
              div.innerHTML = `
              <h2>Mission Destination</h2>
              <ol>
                 <li>name: ${json[missionDestination].name}</li>
                 <li>Diameter: ${json[missionDestination].diameter}</li>
                 <li>Star: ${json[missionDestination].star}</li>
                 <li>Distance from Earth: ${json[missionDestination].distance}</li>
                 <li>Number of Moons: ${json[missionDestination].moons}</li>
              </ol>
              <img src="${json[missionDestination].image}">
              `;
           });
        });
    });

function validateInput(testInput) {
    if (testInput.pilotName.value === ""|| testInput.copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("Empty!");
        event.preventDefault();
     }

     // Making sure the pilot name and co-pilot name input values are strings
     if (isNaN(testInput.pilotName.value) || isNaN(testInput.copilotName.value)){
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
     }
     else{
        alert("Pilot and Co-pilot need to be names!");
        event.preventDefault();
     }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
