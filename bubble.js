// Get all the bubble elements
const bubbles = document.querySelectorAll('.bubble');

// Set up a counter for popped bubbles
let poppedCount = 0;

// Loop through each bubble and add a click event listener
bubbles.forEach(bubble => {
  bubble.addEventListener('click', () => {
    // Check if the bubble has already been popped
    if (!bubble.classList.contains('popped')) {
      // Mark the bubble as popped
      bubble.classList.add('popped');
      // Increase the popped bubble count
      poppedCount++;
      // Check if all bubbles have been popped
      if (poppedCount === bubbles.length) {
        // Show the win message
        const winMessage = document.getElementById('win-message');
        winMessage.innerText = 'You win!';
        winMessage.style.display = 'block';
      }
    }
  });
});
