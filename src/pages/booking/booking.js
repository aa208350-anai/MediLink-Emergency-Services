 // Confirm dispatch → redirect to tracking
    document.querySelector('.btn-submit').addEventListener('click', function () {
        alert('Booking confirmed! An ambulance is on its way.');
        window.location.href = '../tracking/tracking.html';
    });

    // Live summary update on provider change
    const providerSelect = document.querySelectorAll('select.form-input')[2];
    if (providerSelect) {
        providerSelect.addEventListener('change', function () {
            console.log('Provider changed to:', this.value);
            // In a real app: update summary panel dynamically
        });
    }