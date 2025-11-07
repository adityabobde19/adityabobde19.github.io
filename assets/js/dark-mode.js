// Dark mode toggle functionality
(function() {
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
  
  // Wait for DOM to load
  document.addEventListener('DOMContentLoaded', function() {
    // Create theme toggle button
    const toggleButton = document.createElement('button');
    toggleButton.id = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    
    // Add button to body
    document.body.appendChild(toggleButton);
    
    // Toggle theme on click
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      let theme = 'light';
      if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        toggleButton.innerHTML = '☀️';
      } else {
        toggleButton.innerHTML = '🌙';
      }
      
      localStorage.setItem('theme', theme);
    });
  });
})();
