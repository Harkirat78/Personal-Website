// code.js

// Function to open a specific tab and hide others
function opentab(tabName) {
    var i, tabcontent, tablinks;
    
    // Get all elements with class "tab-contents" and hide them
    tabcontent = document.getElementsByClassName("tab-contents");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // Get all elements with class "tab-links" and remove the "active-link" class
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-link", "");
    }
    
    // Show the selected tab and add the "active-link" class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active-link";
  }
  
  // Function to submit the form data to Google Sheets (dummy implementation)
  function submitForm(event) {
    event.preventDefault();
    
    // Dummy code to show a success message
    document.getElementById("msg").innerHTML = "Form submitted successfully!";
    document.getElementById("msg").style.color = "green";
  }
  
  // Event listener to submit the form
  document.querySelector("form[name='submit-to-google-sheet']").addEventListener("submit", submitForm);
  


  /* For Projects Section */

  // Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Get the projects section
  var projectsSection = document.getElementById('projects');

  // Function to check if an element is in the viewport
  function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  // Function to handle scroll events
  function handleScroll() {
      // Check if the projects section is in the viewport
      if (isInViewport(projectsSection)) {
          // Add the 'animated' class to each project element
          var projects = document.querySelectorAll('.work:not(.animated)');
          projects.forEach(function (project) {
              project.classList.add('animated');
          });

          // Remove the scroll event listener to avoid unnecessary processing
          window.removeEventListener('scroll', handleScroll);
      }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check on page load
  handleScroll();
});




ddocument.getElementById('seeMoreBtn').addEventListener('click', function () {
  var hiddenProjects = document.querySelectorAll('.work.hidden');
  for (var i = 0; i < hiddenProjects.length; i++) {
    hiddenProjects[i].classList.remove('hidden');
  }
  this.style.display = 'none';
});