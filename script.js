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
 

 document.getElementById("formSubmit").addEventListener("click", function() {
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   let launchStatus = document.getElementById("launchStatus");
   let pilotLine = document.getElementById("pilotStatus");
   let copilotLine = document.getElementById("copilotStatus");
   let fuelLine = document.getElementById("fuelStatus");
   let cargoLine = document.getElementById("cargoStatus")


   form.addEventListener("submit", function(event) {

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if ((isNaN(cargoMass.value)) || (isNaN(fuelLevel.value)) || (!isNaN(copilotName.value)) || (!isNaN(pilotName.value))) { 
         alert  ("Make sure the pilot's and copilot's names are letters and the fuel and cargo level entries are numerical!");
         event.preventDefault();
      } else if (cargoMass.value > 1001 || fuelLevel.value < 10000) {
         launchStatus.innerHTML = "Shuttle not ready for launch" ;
         launchStatus.style.color = "#a7240d";
         event.preventDefault();
      } else {
         launchStatus.innerHTML = "Shuttle is ready for launch" ;
         launchStatus.style.color = "#008000";
         event.preventDefault();
      };



      
      if(cargoMass.value > 10000){
         console.log('cargo else if')
         cargoLine.style.visibility = "visible";
         cargoLine.innerHTML = `Cargo Mass is too high for launch`;
         event.preventDefault();
      } else if(cargoMass.value < 10000){
          console.log('cargo else')
          cargoLine.style.visibility = "visible";
          cargoLine.innerHTML = "Cargo mass is low enough for launch";
          event.preventDefault();
      };
      

      if(fuelLevel.value < 10000) {
            console.log('fuel else if')
            fuelLine.style.visibility = "visible";
            fuelLine.innerHTML = `Fuel Level is too low for launch`;
            event.preventDefault();
      } else if(fuelLevel.value > 10000) {
            console.log('fuel else')
            fuelLine.style.visibility = "visible";
            fuelLine.innerHTML = "Fuel level is high enough for launch"
            event.preventDefault();
      };
      
      if (!isNaN(copilotName.value)) {
         event.preventDefault();
      } else if (copilotName.value !== "") {
         console.log('copilot else')
         copilotLine.style.visibility = "visible";
         copilotLine.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         event.preventDefault();
      };

      if (!isNaN(pilotName.value)) {
         event.preventDefault();
      } else if (pilotName.value !== "") {
         console.log('pilot else')
         pilotLine.style.visibility = "visible";
         pilotLine.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         event.preventDefault();
      };
   });
 });
});






