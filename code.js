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
  