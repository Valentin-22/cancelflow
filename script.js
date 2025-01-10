document.addEventListener('DOMContentLoaded', function() {
    const confirmationCheckbox = document.getElementById('confirmation');
    const confirmCancellationButton = document.querySelector('button[type="submit"]');

    // Initialize button state based on the initial state of the checkbox
    toggleButtonState(confirmationCheckbox.checked, confirmCancellationButton);

    // Event listener for the checkbox to enable/disable the "Confirm Cancellation" button
    confirmationCheckbox.addEventListener('change', function() {
        toggleButtonState(this.checked, confirmCancellationButton);
    });
});

// Function to enable or disable the button based on the checkbox state
function toggleButtonState(isValid, button) {
    button.disabled = !isValid;
    if (isValid) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

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
