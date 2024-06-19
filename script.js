document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const resultMessage = document.getElementById('resultMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();

        if (isValidEmail(email)) {
            // Simulate verification process (replace with actual logic)
            setTimeout(function() {
                const isValid = Math.random() < 0.8; // 80% chance of being valid (for demo purposes)
                if (isValid) {
                    showResultMessage('Email is valid.', 'success');
                } else {
                    showResultMessage('Email is invalid.', 'error');
                }
            }, 1000); // Simulating a delay for verification (1 second)

        } else {
            showResultMessage('Please enter a valid email address.', 'error');
        }
    });

    function isValidEmail(email) {
        // Basic email validation using regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showResultMessage(message, type) {
        resultMessage.textContent = message;
        resultMessage.className = type; // Apply a class for styling purposes
        // Clear message after 5 seconds
        setTimeout(function() {
            resultMessage.textContent = '';
            resultMessage.className = '';
        }, 5000);
    }
});
