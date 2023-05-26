// script.js

// Get all the project tiles
const projectTiles = document.querySelectorAll('.project-tile');

// Add event listeners for hover
projectTiles.forEach(tile => {
  tile.addEventListener('mouseenter', () => {
    tile.classList.add('hovered');
  });

  tile.addEventListener('mouseleave', () => {
    tile.classList.remove('hovered');
  });
});
