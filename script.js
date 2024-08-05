document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        // Clear the form
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
