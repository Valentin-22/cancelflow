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

    // Initial state setup for the button according to the checkbox
    toggleButtonState(confirmationCheckbox.checked, submitButton);

    // Event listener to handle changes on the checkbox
    confirmationCheckbox.addEventListener('change', function() {
        toggleButtonState(this.checked, submitButton);
    });

    // Optionally: Attach form change handler to re-validate on other form element changes
    const feedbackForm = document.querySelector('.feedback-form');
    feedbackForm.addEventListener('change', function() {
        // Revalidating the form based on various conditions beyond just the checkbox
        let isFormValid = confirmationCheckbox.checked; // Extend this logic as needed
        toggleButtonState(isFormValid, submitButton);
    });
});

// Function to toggle button state and appearance based on validity
function toggleButtonState(isValid, button) {
    button.disabled = !isValid;
    if (isValid) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}
