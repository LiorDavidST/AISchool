const colors = [
    'rgba(0, 255, 255, 1)', // Cyan
    'rgba(255, 0, 255, 1)', // Magenta
    'rgba(255, 255, 0, 1)', // Yellow
    'rgba(0, 255, 0, 1)',   // Green
    'rgba(255, 0, 0, 1)',   // Red
    'rgba(255, 165, 0, 1)', // Orange
    'rgba(238, 130, 238, 1)' // Violet
];

const title = document.getElementById('neon-title');
const letters = title.querySelectorAll('span');
let currentIndex = 0;
let startColorIndex = 0; // New variable to track the starting color index

function lightUpLetters() {
    if (currentIndex < letters.length) {
        const letter = letters[currentIndex];
        letter.classList.add('neon');
        letter.style.color = colors[(startColorIndex + currentIndex) % colors.length]; // Change color based on startColorIndex

        setTimeout(() => {
            letter.classList.remove('neon'); // Remove the neon effect after 0.5 seconds
            currentIndex++;
            lightUpLetters(); // Call the function again for the next letter
        }, 500); // 0.5 seconds
    } else {
        currentIndex = 0; // Reset index to start over
        startColorIndex = (startColorIndex + 1) % colors.length; // Change to the next starting color for the reset
        setTimeout(lightUpLetters, 500); // Restart the sequence after a short delay
    }
}

// Start the lighting effect
lightUpLetters();

// Function to change cube colors every 5 seconds
let cubeColorIndex = 0; // Index for cube colors
const cubes = document.querySelectorAll('.cube'); // Select all cubes

function changeCubeColors() {
    cubes.forEach(cube => {
        cube.style.boxShadow = `0 4px 6px rgba(0, 0, 0, 0.2), 0 0 35px ${colors[cubeColorIndex]}, 0 0 70px ${colors[cubeColorIndex]}`;
    });
    cubeColorIndex = (cubeColorIndex + 1) % colors.length; // Cycle through colors
}

// Change cube colors every 5 seconds
setInterval(changeCubeColors, 5000);

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.navbar a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            });
        });
    }
});