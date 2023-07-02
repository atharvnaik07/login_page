function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validation logic
    if (username === "admin" && password === "password") {
      // Successful login
      alert("Login successful!");
      // You can redirect the user to another page here
    } else {
      // Failed login
      var errorMessage = document.getElementById("errorMessage");
      errorMessage.textContent = "Invalid username or password.";
    }
  }