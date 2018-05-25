
// When user clicks the register button
$("#register-submit").on("click", function(event) {
    event.preventDefault();


 // Creates a new registered user object
 var newUser = {
    firstName: $("#exampleInputName").val().trim(),
    lastName: $("#exampleInputLastName").val().trim(),
    email: $("#exampleInputEmail1").val().trim(),
    password: $("#exampleInputPassword1").val().trim(),
    confirmPassword: $("#exampleConfirmPassword").val().trim(),
  };

//   logs user object
  console.log(newUser);

  // Send an AJAX POST-request with jQuery
  $.post("/api/newUser", newUser)
  // On success, run the following code (work from here)
  .then(function(data) {
    // Log the data we found
    console.log(data);
  });

    // Empty each input box by replacing the value with an empty string
    $("#exampleInputName").val("");
    $("#exampleInputLastName").val("");
    $("#exampleInputEmail1").val("");
    $("#exampleInputPassword1").val("");
    $("#exampleConfirmPassword").val("");
  });
