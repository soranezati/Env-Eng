// Accordion Functionality
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        
        // Toggle the visibility of the content
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') 
        ? 'Switch to Light Mode' 
        : 'Switch to Dark Mode';
});
