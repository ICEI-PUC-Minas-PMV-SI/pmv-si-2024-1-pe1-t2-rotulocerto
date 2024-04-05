const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = (event) => {
  event.stopPropagation();
  dropdownMenu.classList.toggle('open');

  const isOpen = dropdownMenu.classList.contains('open');

  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

document.addEventListener('click', (event) => {
  if (!toggleBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('open');
    toggleBtnIcon.classList = 'fa-solid fa-bars';
  }
});