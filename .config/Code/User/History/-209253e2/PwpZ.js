// Write your JavaScript code here!

window.addEventListener("load" , function() {

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
 
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");

       if (pilotName.value === ""|| copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        alert("All fields are required!");
        event.preventDefault();
     }

     // Making sure the pilot name and co-pilot name input values are strings
     if (isNaN(pilotName.value) || isNaN(copilotName.value)){
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready`;
     }
     else{
        alert("Pilot & Co-pilot need to be human names, not integers!");
        event.preventDefault();
     }

     // Making sure the fuel level and cargo mass input values are numbers
     if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
        alert("Fuel level & cargo mass need to be integers!");
        event.preventDefault();
     }

   });





   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});