// Get the button element
var saveButton = document.getElementById("save-button");
var deleteButton = document.getElementById("del-local");

// Add event listener to delete-local element
if(deleteButton){
    deleteButton.addEventListener("click", del_local);
}
if(saveButton){
// Add event listener to save-button element
saveButton.addEventListener("click", saveInput);
}

//Function to delete local storage
function del_local(){
    localStorage.removeItem("inputs");
}

dropdown.addEventListener("change", function() {

});


// Function to save input to local storage
function saveInput() { 
    // Get selected transfer option
    var input = document.getElementById("input-dropdown").value;
    // Get existing saved inputs from local storage
    var savedInputs = JSON.parse(localStorage.getItem("inputs")) || [];
    // Check if input already exists in savedInputs array
    if (!savedInputs.includes(input)) {
      // Add new input to saved inputs array
      savedInputs.push(input);
      // Save updated saved inputs to local storage
      localStorage.setItem("inputs", JSON.stringify(savedInputs));
      // Show success message
      alert("Input saved!");
    } else {
      alert("Input already exists!");
    }
  }