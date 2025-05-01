document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const course = document.getElementById("course").value;
  
    if (!name || !email || !password || !confirmPassword || !course) {
      alert("Please fill out all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Simulate successful registration
    document.getElementById("successMsg").textContent = "Registration successful!";
    this.reset();
  });
  