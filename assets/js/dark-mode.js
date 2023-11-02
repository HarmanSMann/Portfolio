// dark-mode.js

document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  // Check if user has a preference for dark mode
  const darkModeEnabled =
    localStorage.getItem('darkModeEnabled') === 'true' || false;

  // Set initial dark mode state based on user preference
  if (darkModeEnabled) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }

  // Function to toggle dark mode
  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkModeEnabled = body.classList.contains('dark-mode');

    // Save user preference in local storage
    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
  }

  // Event listener for dark mode toggle button
  darkModeToggle.addEventListener('click', toggleDarkMode);
});
