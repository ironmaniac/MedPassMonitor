// Function to check the state in local storage and apply properties accordingly
function checkAndApplyProperties(button) {
  var state = localStorage.getItem(button.id + "_state");
  console.log(state);
  console.log(button);

  if (state === null || state === "vacant") {
    button.classList.remove("occupied");
  } else if (state === "occupied") {
    button.classList.add("occupied");
  }
}

// Initial setup: Check and apply properties for each button
var numberOfButtons = document.querySelectorAll(".btn-all").length;

for (var i = 0; i < numberOfButtons; i++) {
  var button = document.querySelectorAll(".btn-all")[i];
  checkAndApplyProperties(button);
}

// Function to change properties on button click
function changePropertiesOnClick(button) {
  var state = localStorage.getItem(button.id + "_state");

  if (state === null || state === "vacant") {
    localStorage.setItem(button.id + "_state", "occupied");
    button.classList.add("occupied");
  } else if (state === "occupied") {
    localStorage.setItem(button.id + "_state", "vacant");
    button.classList.remove("occupied");
  }
}

// Add click event listeners to each button
for (var i = 0; i < numberOfButtons; i++) {
  document
    .querySelectorAll(".btn-all")[i].addEventListener("click", function () {
      changePropertiesOnClick(this);
    });
}
