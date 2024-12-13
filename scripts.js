// Function to apply typewriter effect to all elements with the 'typewriter' class
document.addEventListener("DOMContentLoaded", function () {
    const typewriterElements = document.querySelectorAll(".typewriter");

    typewriterElements.forEach((el) => {
        const text = el.innerHTML;
        el.innerHTML = "";
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50); // Adjust typing speed here
            }
        }

        typeWriter();
    });
});
    