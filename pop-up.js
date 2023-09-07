// Get the button and popup elements
const openButton = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('close-popup');

// Function to open the popup
openButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Function to close the popup
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close the popup if the user clicks outside of it
window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});
