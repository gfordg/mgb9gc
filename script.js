// Function to display the review modal with the form details
function reviewAndSubmit() {
  // Get the form element
  var form = document.getElementById('application-form');

  // Get the form data
  var formData = new FormData(form);

  // Create an empty string to store the form details
  var reviewContent = '';

  // Iterate over the form data
  for (var pair of formData.entries()) {
      // Append the form field name and value to the review content string
      reviewContent += '<p><strong>' + pair[0] + ':</strong> ' + pair[1] + '</p>';
  }

  // Display the review content in the modal
  document.getElementById('review-modal-content').innerHTML = reviewContent;

  // Show the review modal
  document.getElementById('review-modal').style.display = 'block';
}

// Function to close the review modal
function closeReviewModal() {
  // Hide the review modal
  document.getElementById('review-modal').style.display = 'none';
}

// Function to go back to the form for editing
function goBack() {
  // Hide the review modal
  document.getElementById('review-modal').style.display = 'none';
}
