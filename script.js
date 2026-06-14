const filterDrawer = document.getElementById('filter-drawer');
const openFilter = document.getElementById('open-filter');
const closeFilter = document.getElementById('close-filter');
const categoryButtons = document.querySelectorAll('.category-filter');
const productGrid = document.getElementById('product-grid');
const showAll = document.getElementById('show-all');

openFilter.addEventListener('click', () => {
  filterDrawer.classList.add('active');
  filterDrawer.setAttribute('aria-hidden', 'false');
});

closeFilter.addEventListener('click', () => {
  filterDrawer.classList.remove('active');
  filterDrawer.setAttribute('aria-hidden', 'true');
});

showAll.addEventListener('click', () => {
  filterProducts('all');
  setActiveButton('all');
});

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    filterProducts(category);
    setActiveButton(category);
  });
});

function filterProducts(category) {
  const cards = productGrid.querySelectorAll('.product-card');
  cards.forEach((card) => {
    const cardCategory = card.dataset.category;
    card.style.display = category === 'all' || cardCategory === category ? 'grid' : 'none';
  });
}

function setActiveButton(selectedCategory) {
  categoryButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.category === selectedCategory);
  });
}

productGrid.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action="favorite"]');
  if (!button) return;
  button.classList.toggle('favorited');
  button.textContent = button.classList.contains('favorited') ? '♥' : '❤';
});
