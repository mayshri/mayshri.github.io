// Function to show project details
function showProjectDetails(projectName) {
  alert(`You clicked on ${projectName}`);
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Your message has been sent!");
});
