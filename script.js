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

   form.addEventListener("submit", function(event) {

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      if (isNaN(cargoMass.value)) {
         alert('Cargo Mass must be a number');
         event.preventDefault();
      }
      if (isNaN(fuelLevel.value)) {
         alert('Fuel Level must be a number');
         event.preventDefault();
      }
      if (!isNaN(copilotName.value)) {
         alert('Copilot must be a name');
         event.preventDefault();
      }
      if (!isNaN(pilotName.value)) {
         alert('Pilot must be a name');
         event.preventDefault();
      }
   });

   let pilotLine = document.getElementById("pilotStatus");
   let copilotLine = document.getElementById("copilotStatus");
   let fuelLine = document.getElementById("fuelStatus");
   let cargoLine = document.getElementById("cargoStatus")

   let pilotAnswer = document.getElementById("input[name=pilotName]")
   let copilotAnswer = document.getElementById("input[name=copilotName]");
   let fuelAnswer = document.getElementById("input[name=fuelLevel]");
   let cargoAnswer = document.getElementById("input[name=cargoMass]");

 form.addEventListener("submit", function(event){
   pilotLine.style.visibility = "visible";
   pilotLine.innerHTML = `1. Pilot ${pilotAnswer} is ready for launch`;
});
//    form.addEventListener("submit", function(event){
//       if(isNaN(copilotName.value)){
//       copilotLine.style.visibility = "visible";
//       copilotLine.innerHTML = `2. Copilot ${copilotAnswer} is ready for launch`;
//       }
//  });
 form.addEventListener("submit", function(event){
   if(fuelAnswer < 10000){
   fuelLine.style.visibility = "visible";
   fuelLine.innerHTML = `3. Fuel Level is too low for launch`;
   } else {
      fuelLine.style.visibility = "visible";
   }
});
form.addEventListener("submit", function(event){
   if(cargoAnswer > 10001){
   cargoLine.style.visibility = "visible";
   cargoLine.innerHTML = `4. Cargo Mass is too high for launch`;
   } else {
      cargoLine.style.visibility = "visible";
   }
});

});





// let launchStatus = document.getElementById("launchStatus");
// launchStatus = "Shuttle not ready for launch" 
// launchStatus.style.color = "#a7240d"

// let launchStatus = document.getElementById("launchStatus");
// launchStatus = "Shuttle is ready for launch" 
// launchStatus.style.color = "#008000"

});



//submit


