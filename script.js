// Write your JavaScript code here!
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   // i am disapointed that K-PAX is not an option
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         console.log(json);
         let missionTargetLine = document.getElementById("missionTarget");
            missionTargetLine.innerHTML = ` <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src="${json[3].image}">
             `
    });   
  });
   let listAllStatus = document.getElementById("faultyItems");
   listAllStatus.style.visibility = "hidden";
   let form = document.querySelector("form");
   let pilotLine = document.getElementById("pilotStatus");
   let copilotLine = document.getElementById("copilotStatus");
   let fuelLine = document.getElementById("fuelStatus");
   let cargoLine = document.getElementById("cargoStatus");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      event.preventDefault();
         if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
            alert("All fields are required!");
         } else if (!isNaN(pilotName) || !isNaN(copilotName) || isNaN(fuelLevel) || isNaN(cargoMass)) { 
            alert ("Make sure the pilot's and copilot's names are letters and the fuel and cargo level entries are numerical!");
         } else {
            listAllStatus.style.visibility = "visible";
            pilotLine.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotLine.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
            let launchStatus = document.getElementById("launchStatus");
            if (fuelLevel < 10000 && cargoMass > 10000) {
               fuelLine.innerHTML = `Fuel Level is too low for launch`;
               cargoLine.innerHTML = `Cargo Mass is too high for launch`;
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "#a7240d";
            } else if (fuelLevel >= 10000 && cargoMass > 10000) {
               fuelLine.innerHTML = "Fuel level is high enough for launch";
               cargoLine.innerHTML = `Cargo Mass is too high for launch`;
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "#a7240d";
            } else if (fuelLevel < 10000 && cargoMass < 10000) {
               fuelLine.innerHTML = `Fuel Level is too low for launch`;
               cargoLine.innerHTML = "Cargo mass is low enough for launch";
               launchStatus.innerHTML = "Shuttle not ready for launch";
               launchStatus.style.color = "#a7240d";
            } else {
               fuelLine.innerHTML = "Fuel level is high enough for launch";
               cargoLine.innerHTML = "Cargo mass is low enough for launch";
               launchStatus.innerHTML = "Shuttle is ready for launch" ;
               launchStatus.style.color = "#008000";
            }
         }
      });
   });