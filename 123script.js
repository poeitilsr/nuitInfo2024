// Get the overlay image element
const overlayImage = document.getElementById('overlayImage');

// Add a click event listener to toggle the zoom effect
overlayImage.addEventListener('click', () => {
  overlayImage.classList.toggle('zoomed'); // Toggle the zoom class
});
