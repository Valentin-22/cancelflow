function showPopup(reason) {
    const modal = document.getElementById('popupModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const modalActionButton = document.getElementById('modalActionButton');

    modal.classList.remove('hidden');

    switch (reason) {
        case 'discount':
            modalTitle.textContent = "Exclusive Offer!";
            modalText.innerHTML = "We'd hate for you to miss out. Here's a <strong>special discount</strong> just for you!";
            modalActionButton.textContent = "Claim Discount";
            modalActionButton.onclick = () => alert('Discount applied!');
            break;

        case 'pause':
            modalTitle.textContent = "Pause Subscription";
            modalText.innerHTML = "We understand you need a break. You can <strong>pause</strong> your subscription and come back anytime.";
            modalActionButton.textContent = "Pause Subscription";
            modalActionButton.onclick = () => alert('Subscription paused!');
            break;

        case 'support':
            modalTitle.textContent = "Technical Support";
            modalText.innerHTML = "We're here to help! Start a <strong>chat with our support team</strong> to resolve any issues.";
            modalActionButton.textContent = "Chat with Support";
            modalActionButton.onclick = () => alert('Opening support chat!');
            break;

        default:
            modalTitle.textContent = "Thank You!";
            modalText.innerHTML = "Thank you for your feedback. We're always striving to improve.";
            modalActionButton.textContent = "Close";
            modalActionButton.onclick = hidePopup;
    }
}

function hidePopup() {
    const modal = document.getElementById('popupModal');
    modal.classList.add('hidden');
}

document.querySelectorAll('input[name="reason"]').forEach((input) => {
    input.addEventListener('change', (event) => {
        switch (event.target.value) {
            case 'Too expensive':
                showPopup('discount');
                break;
            case 'Seasonal use':
                showPopup('pause');
                break;
            case 'Performance issues':
                showPopup('support');
                break;
            default:
                showPopup('default');
        }
    });
});
