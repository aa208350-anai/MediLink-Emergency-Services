 // Simulate ETA countdown
    let eta = 4; // ETA = Estimated time of arrival in minutes
    const etaEl = document.querySelector('.eta-time');

    const countdown = setInterval(() => {
        if (eta > 1) {
            eta--;
            etaEl.textContent = eta + ' min';
        } else {
            etaEl.textContent = 'Arriving';
            clearInterval(countdown);
        }
    }, 15000); // every 15s

    // Cancel button
    document.querySelector('.icon-btn:last-child').addEventListener('click', function () {
        if (confirm('Are you sure you want to cancel this booking?')) {
            window.location.href = '../../../index.html'; // Redirect to home page
        }
    });