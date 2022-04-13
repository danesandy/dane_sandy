const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbar = document.getElementById('navbar')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    // navbar.classList.toggle('nav-style');
});

// Contact Form Init
(function() {
    emailjs.init('user_hBlvDdJ4qtYa66auYld3H');
})();

// Contact Form
window.onload = function() {
    var x = document.getElementById("contact_alert");
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_wu9efji', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
                $('#contact_form_modal').modal('hide');                    
            }, function(error) {
                console.log('FAILED...', error);
            });
        });
    };