// Wait for the document to be fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function () {

    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
  
    // Add click event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default behavior of anchor links
  
        // Get the target section's ID from the href attribute (e.g., #about, #projects)
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        // Scroll to the target section smoothly
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust the offset for header space (if any)
          behavior: 'smooth' // Enable smooth scrolling
        });
      });
    });
    document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("body > *:not(header)");

  header.addEventListener("mouseenter", () => {
    sections.forEach((section) => {
      section.style.opacity = "0.2";
      section.style.filter = "blur(3px)";
      section.style.transition = "opacity 0.5s ease, filter 0.5s ease";
    });
  });

  header.addEventListener("mouseleave", () => {
    sections.forEach((section) => {
      section.style.opacity = "1";
      section.style.filter = "none";
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const changeStyleButton = document.getElementById("change-style-btn");
  
    // Toggle style on button click
    changeStyleButton.addEventListener("click", () => {
      header.classList.toggle("alt-style");
    });
  
    // Hover effect: Apply temporary style when the header is hovered
    header.addEventListener("mouseover", () => {
      header.style.transform = "scale(1.02)";
      header.style.transition = "transform 0.5s ease";
    });
  
    header.addEventListener("mouseout", () => {
      header.style.transform = "scale(1)";
    });
  });
  


  
  });
  