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
