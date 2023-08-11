document.addEventListener("DOMContentLoaded", function() {
    const certificates = document.querySelectorAll(".certificate");

    certificates.forEach(cert => {
        cert.addEventListener("click", function() {
            cert.classList.toggle("fullscreen"); // Agrega o quita la clase fullscreen
        });
    });
});
