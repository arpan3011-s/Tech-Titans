document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Application Submitted Successfully!');
    this.reset();
  });