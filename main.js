// Function to show project details
function showProjectDetails(projectName) {
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  document.getElementById("modalText").innerText = `You clicked on ${projectName}`;
  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

// Smooth scrolling for anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Your message has been sent!");
});
