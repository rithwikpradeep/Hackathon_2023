document.addEventListener('DOMContentLoaded', function() {
    // Get all the dropdown headings
    const dropdownHeadings = document.querySelectorAll('.dropdown-heading');
  
    // Add click event listeners to each dropdown heading
    dropdownHeadings.forEach(function(heading) {
      heading.addEventListener('click', function() {
        // Toggle the visibility of the dropdown content
        const content = this.nextElementSibling;
        if (content.style.display === 'none') {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
  document.addEventListener("click", function(event) {
    const dropdowns = document.querySelectorAll(".dropdown");
    for (const dropdown of dropdowns) {
        if (!dropdown.contains(event.target)) {
            const dropdownContent = dropdown.querySelector(".dropdown-content");
            dropdownContent.style.display = "none";
        }
    }
});

  