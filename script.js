function showPopup(reason) {
    const popup = document.querySelector('.special-offer');
    const offerText = document.getElementById('offerText');
    
    if (reason === 'discount') {
        offerText.innerText = 'Get 50% off your next month if you stay. Limited time offer!';
    } else if (reason === 'pause') {
        offerText.innerText = 'Need a break? Pause your subscription instead and resume when you’re ready!';
    } else {
        offerText.innerText = 'We have special options for you. Let us know your needs!';
    }
    
    popup.classList.remove('hidden');
    popup.style.display = 'block';
}

function hidePopup() {
    const popup = document.querySelector('.special-offer');
    popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const confirmationCheckbox = document.getElementById('confirmation');
    const submitButton = document.querySelector('button[type="submit"]');

    // Event listener to enable submit button when checkbox is checked
    confirmationCheckbox.addEventListener('change', function() {
        submitButton.disabled = !confirmationCheckbox.checked;
    });

    // Optionally: Validate other form elements as needed
    const feedbackForm = document.querySelector('.feedback-form');
    feedbackForm.addEventListener('change', function() {
        // This callback can include more complex form validation logic as needed
        let isFormValid = confirmationCheckbox.checked; // Example: Extend this logic
        submitButton.disabled = !isFormValid;
    });
});
