const toggletheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggletext = document.getElementById('toggle-text');

const toggleColors = document.getElementById("toggle-colors");

toggletheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (toggleIcon.src.includes('moon.svg')) {
    toggleIcon.src = 'assets/icons/sun.svg';
    toggletext.textContent = 'Light Mode';
  } else {
    toggleIcon.src = 'assets/icons/moon.svg';
    toggletext.textContent = 'Dark Mode';
  }
});

toggleColors.addEventListener('click', (e) => {
 console.log(e.target.dataset);
});
