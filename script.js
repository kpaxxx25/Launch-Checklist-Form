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
 //json



 document.getElementById("formSubmit").addEventListener("click", function() {
   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let copilotName = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");

   let pilotLine = document.getElementById("pilotStatus");
   let copilotLine = document.getElementById("copilotStatus");
   let fuelLine = document.getElementById("fuelStatus");
   let cargoLine = document.getElementById("cargoStatus")


   form.addEventListener("submit", function(event) {

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      };
      if (isNaN(cargoMass.value)) {
         alert('Cargo Mass must be a number');
         event.preventDefault();
       } else if(cargoMass.value > 10001){
         console.log('cargo else if')
         cargoLine.style.visibility = "visible";
         cargoLine.innerHTML = `Cargo Mass is too high for launch`;
         event.preventDefault();
         } else {
            console.log('cargo else')
            cargoLine.style.visibility = "visible";
            event.preventDefault();
         };
      if (isNaN(fuelLevel.value)) {
         alert('Fuel Level must be a number');
         event.preventDefault();
       } else if(fuelLevel.value < 10000){
         console.log('fuel else if')
         fuelLine.style.visibility = "visible";
         fuelLine.innerHTML = `Fuel Level is too low for launch`;
         event.preventDefault();
         } else {
            console.log('fuel else')
            fuelLine.style.visibility = "visible";
            event.preventDefault();
         };
      if (!isNaN(copilotName.value)) {
         alert('Copilot must be a name');
         event.preventDefault();
       } else {
         console.log('copilot else')
         copilotLine.style.visibility = "visible";
         copilotLine.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
         event.preventDefault();
      }
      if (!isNaN(pilotName.value)) {
         alert('Pilot must be a name');
         event.preventDefault();
      }  else {
         console.log('pilot else')
         pilotLine.style.visibility = "visible";
         pilotLine.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
         event.preventDefault();
      }
   });
 });
});


// let launchStatus = document.getElementById("launchStatus");
// launchStatus = "Shuttle not ready for launch" 
// launchStatus.style.color = "#a7240d"

// let launchStatus = document.getElementById("launchStatus");
// launchStatus = "Shuttle is ready for launch" 
// launchStatus.style.color = "#008000"


