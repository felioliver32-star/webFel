// FEL DESIGN CLOTHING - PRODUCTS DATABASE
const PRODUCTS = [
  {
    id: "coat-linen",
    name: "Tapado de Lino Estructurado",
    category: "tapados",
    categoryLabel: "Abrigos",
    price: 185000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/coat_linen.png",
    description: "Un tapado de corte impecable confeccionado en lino rústico pesado. Con silueta estructurada, bolsillos solapados y detalles de costura a la vista, esta prenda reinterpreta la sastrería clásica con una caída contemporánea y natural.",
    materials: "100% Lino Orgánico Lavado",
    care: "Limpieza en seco profesional. No usar blanqueadores."
  },
  {
    id: "coat-linen",
    name: "Tapado de Lino NO ESTRUCTURADO",
    category: "tapados",
    categoryLabel: "Abrigos",
    price: 145000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/dress_silk.png",
    description: "Un tapado de corte impecable confeccionado en lino rústico pesado. Con silueta estructurada, bolsillos solapados y detalles de costura a la vista, esta prenda reinterpreta la sastrería clásica con una caída contemporánea y natural.",
    materials: "100% Lino Orgánico Lavado",
    care: "Limpieza en seco profesional. No usar blanqueadores."
  },
  {
    id: "coat-linen",
    name: "Tapado de Lino NO ESTRUCTURADO2",
    category: "tapados",
    categoryLabel: "Abrigos",
    price: 145000,
    availability: "outofstock",
    availabilityLabel: "AGOTADO",
    image: "./assets/coat_linen.png",
    description: "Un tapado de corte impecable confeccionado en lino rústico pesado. Con silueta estructurada, bolsillos solapados y detalles de costura a la vista, esta prenda reinterpreta la sastrería clásica con una caída contemporánea y natural.",
    materials: "100% Lino Orgánico Lavado",
    care: "Limpieza en seco profesional. No usar blanqueadores."
  },
  {
    id: "dress-silk",
    name: "Vestido Drapé de Seda",
    category: "vestidos",
    categoryLabel: "Vestidos",
    price: 240000,
    availability: "lowstock",
    availabilityLabel: "Últimas Unidades",
    image: "./assets/dress_silk.png",
    description: "Vestido largo de diseño asimétrico drapeado en satén de seda fluida. El sutil escote bote y su silueta de caída lánguida crean una prenda de gala minimalista y etérea, ideal para destacar con sobriedad y distinción.",
    materials: "100% Satén de Seda natural",
    care: "Lavar a mano con agua fría y jabón neutro. Secar plano a la sombra."
  },
  {
    id: "blazer-wool",
    name: "Blazer Sastrería de Lana",
    category: "sastreria",
    categoryLabel: "Sastrería",
    price: 210000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/blazer_wool.png",
    description: "Saco sastrero cruzado de corte boxy elaborado en lana fría de alta calidad. Forro interno de viscosa jacquard al tono, solapas de muesca pronunciadas y botones de asta natural grabados artesanalmente.",
    materials: "80% Lana Merino, 20% Cachemira. Forro: 100% Viscosa.",
    care: "Limpieza en seco únicamente. Planchar a baja temperatura con paño protector."
  },
  {
    id: "sweater-knit",
    name: "Sweater Knit de Mohair",
    category: "tejidos",
    categoryLabel: "Tejidos",
    price: 145000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/sweater_knit.png",
    description: "Sweater tejido a mano en punto inglés con hilado de mohair premium y lana merina superwash. De tacto esponjoso, mangas globo con puños compactos y cuello redondo relajado.",
    materials: "70% Kid Mohair, 30% Lana Merino Extra Fina",
    care: "Lavar a mano en agua fría. No centrifugar. Secar horizontal sobre toalla seca."
  },
  {
    id: "trousers-tailored",
    name: "Pantalón de Lino y Seda Sand",
    category: "sastreria",
    categoryLabel: "Sastrería",
    price: 155000,
    availability: "outofstock",
    availabilityLabel: "Agotado",
    image: "./assets/trousers_tailored.png",
    description: "Pantalón pinzado de tiro alto con botamanga ancha. Confeccionado en un hilado exclusivo que combina la estructura noble del lino con el brillo sutil y la caída de la seda natural.",
    materials: "60% Lino, 40% Seda Salvaje",
    care: "Limpieza en seco recomendada. Lavado suave a mano si es necesario."
  }
];

// FORMAT CURRENCY
function formatPrice(amount) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(amount);
}

// NAVBAR SCROLL EFFECT
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// MOBILE MENU TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  // Create backdrop element dynamically
  const backdrop = document.createElement('div');
  backdrop.className = 'nav-backdrop';
  document.body.appendChild(backdrop);

  const toggleMenu = (forceClose = false) => {
    const isActive = forceClose ? false : !navLinks.classList.contains('active');
    navLinks.classList.toggle('active', isActive);
    backdrop.classList.toggle('active', isActive);
    
    // Toggle scroll lock on body
    document.body.style.overflow = isActive ? 'hidden' : '';

    const spans = menuToggle.querySelectorAll('span');
    if (spans.length === 3) {
      spans[0].style.transform = isActive ? 'rotate(45deg) translate(6px, 5px)' : 'none';
      spans[1].style.opacity = isActive ? '0' : '1';
      spans[2].style.transform = isActive ? 'rotate(-45deg) translate(6px, -5px)' : 'none';
    }
  };

  menuToggle.addEventListener('click', () => toggleMenu());
  backdrop.addEventListener('click', () => toggleMenu(true));

  // Close menu when clicking links
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });
}

// PRODUCT DETAIL MODAL LOGIC
const modal = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !modal) return;

  // Populate modal details
  document.getElementById('modal-img').src = product.image;
  document.getElementById('modal-img').alt = product.name;
  document.getElementById('modal-cat').textContent = product.categoryLabel;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-price').textContent = formatPrice(product.price);
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-materials').textContent = product.materials;
  document.getElementById('modal-care').textContent = product.care;

  // Handle Availability Badge
  const statusElement = document.getElementById('modal-status');
  statusElement.className = `modal-meta-value ${product.availability}`;
  statusElement.textContent = product.availabilityLabel;

  // Handle WhatsApp button link
  const consultBtn = document.getElementById('modal-consult-btn');
  if (consultBtn) {
    const formattedPrice = formatPrice(product.price);
    const textMsg = `Hola Felipe, me interesa consultar por la prenda "${product.name}" (${formattedPrice}). ¿Tienen stock disponible?`;
    consultBtn.href = `https://wa.me/543456450663?text=${encodeURIComponent(textMsg)}`;
  }

  // Open modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock body scroll
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = ''; // Restore scroll
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}
if (modal) {
  // Close on clicking backdrop
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });
}

// RENDER A SINGLE PRODUCT CARD
function createProductCardHTML(product) {
  return `
    <div class="product-card" data-category="${product.category}">
      <span class="product-badge ${product.availability}">${product.availabilityLabel}</span>
      <div class="product-img-wrapper">
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button class="product-view-btn" onclick="openProductModal('${product.id}')">
            Detalles
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------
// HOMEPAGE CAROUSEL LOGIC
// ----------------------------------------
const carouselTrack = document.getElementById('carousel-track');
if (carouselTrack) {
  // Render Carousel items
  carouselTrack.innerHTML = PRODUCTS.map(p => `
    <div class="carousel-slide">
      ${createProductCardHTML(p)}
    </div>
  `).join('');

  // Carousel Mechanics
  const track = carouselTrack;
  const slides = Array.from(track.children);
  const nextBtn = document.getElementById('carousel-next');
  const prevBtn = document.getElementById('carousel-prev');
  const dotsContainer = document.getElementById('carousel-dots');

  let currentIndex = 0;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let isDragging = false;

  // Calculate items per view dynamically
  function getItemsPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  // Update dots indicator
  function setupDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const itemsPerView = getItemsPerView();
    const dotsCount = Math.max(1, slides.length - itemsPerView + 1);

    for (let i = 0; i < dotsCount; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => moveToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = Array.from(dotsContainer.children);
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function getSlideWidth() {
    const slide = slides[0];
    const style = window.getComputedStyle(slide);
    const marginRight = parseFloat(window.getComputedStyle(track).gap) || 0;
    return slide.getBoundingClientRect().width + marginRight;
  }

  function moveToSlide(index) {
    const itemsPerView = getItemsPerView();
    const maxIndex = slides.length - itemsPerView;

    // Clamp index
    currentIndex = Math.max(0, Math.min(index, maxIndex));

    const slideWidth = getSlideWidth();
    const translateAmount = -currentIndex * slideWidth;
    track.style.transform = `translateX(${translateAmount}px)`;
    currentTranslate = translateAmount;
    prevTranslate = translateAmount;

    updateDots();
  }

  // Navigation handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      moveToSlide(currentIndex + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      moveToSlide(currentIndex - 1);
    });
  }

  // Resize listener
  window.addEventListener('resize', () => {
    setupDots();
    moveToSlide(currentIndex);
  });

  // Touch and Drag gestures
  track.addEventListener('touchstart', dragStart);
  track.addEventListener('touchend', dragEnd);
  track.addEventListener('touchmove', dragMove);
  track.addEventListener('mousedown', dragStart);
  track.addEventListener('mouseup', dragEnd);
  track.addEventListener('mouseleave', dragEnd);
  track.addEventListener('mousemove', dragMove);

  function dragStart(e) {
    isDragging = true;
    startX = getPositionX(e);
    track.style.transition = 'none';
  }

  function dragMove(e) {
    if (!isDragging) return;
    const currentX = getPositionX(e);
    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';

    const movedBy = currentTranslate - prevTranslate;
    const slideWidth = getSlideWidth();

    // Swipe threshold (e.g., 20% of slide width)
    if (movedBy < -slideWidth * 0.2) {
      moveToSlide(currentIndex + 1);
    } else if (movedBy > slideWidth * 0.2) {
      moveToSlide(currentIndex - 1);
    } else {
      moveToSlide(currentIndex);
    }
  }

  function getPositionX(e) {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  }

  // Initialize
  setupDots();
  moveToSlide(0);
}

// ----------------------------------------
// CATALOG VIEW LOGIC (`pageProductos`)
// ----------------------------------------
const productsGrid = document.getElementById('products-grid');
if (productsGrid) {
  // Parse initial query params to set filter
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');

  let activeFilter = filterParam || 'all';
  let searchQuery = '';

  function renderGrid() {
    let filtered = PRODUCTS;

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(p => p.category === activeFilter);
    }

    // Apply text search
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q)
      );
    }

    // Generate output
    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results">
          <p>No se encontraron productos que coincidan con la búsqueda.</p>
        </div>
      `;
    } else {
      productsGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    }
  }

  // Set up filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterToggle = document.getElementById('filter-dropdown-toggle');
  const filterOptions = document.getElementById('filter-options');

  // Set active class based on activeFilter
  filterBtns.forEach(btn => {
    if (btn.getAttribute('data-filter') === activeFilter) {
      btn.classList.add('active');
      if (filterToggle) {
        filterToggle.querySelector('span').textContent = `Categoría: ${btn.textContent}`;
      }
    } else {
      btn.classList.remove('active');
    }
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.getAttribute('data-filter');
      
      // Update dropdown state and label if in mobile
      if (filterToggle && filterOptions) {
        filterToggle.querySelector('span').textContent = `Categoría: ${e.target.textContent}`;
        filterOptions.classList.remove('open');
        filterToggle.classList.remove('open');
      }
      
      renderGrid();
    });
  });

  // Toggle dropdown logic
  if (filterToggle && filterOptions) {
    filterToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      filterOptions.classList.toggle('open');
      filterToggle.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!filterToggle.contains(e.target) && !filterOptions.contains(e.target)) {
        filterOptions.classList.remove('open');
        filterToggle.classList.remove('open');
      }
    });
  }

  // Set up search box
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderGrid();
    });
  }

  // Initial render
  renderGrid();
}
