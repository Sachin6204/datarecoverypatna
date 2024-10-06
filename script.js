// Handle the scroll effect for navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle the mobile menu
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});


// Initialize EmailJS with your user ID
emailjs.init("user_your_user_id"); // Replace with your EmailJS user ID

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Send the form data using EmailJS
    emailjs.sendForm('your_service_id', 'your_template_id', this)
        .then(function(response) {
            console.log('Success:', response);
            alert('Message sent successfully.');
            document.getElementById('contactForm').reset(); // Reset form after successful submission
        }, function(error) {
            console.error('Error:', error);
            alert('Failed to send message.');
        });
});
