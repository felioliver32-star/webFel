// FEL DESIGN CLOTHING - PRODUCTS DATABASE
const PRODUCTS = [
  {
    id: "coat-linen",
    name: "Remera negra doble manga. ",
    category: "remeras",
    categoryLabel: "Remeras",
    price: 30000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/coat_linen.png",
    description: "Remera negra mangas cortas con mangas largas integradas en un tejido grueso con diseño.",
    materials: "jersey 100% algodon",
    sizes: "M - L"
  },
  {
    id: "coat-linen",
    name: "Remera beige doble manga",
    category: "remeras",
    categoryLabel: "Remeras",
    price: 30000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/dress_silk.png",
    description: "Remera beige mangas cortas con mangas largas integradas en un tejido grueso con diseño.",
    materials: "jersery 100% algodon",
    sizes: "M - L"
  },

  {
    id: "blazer-wool",
    name: "Pantalon Octubre",
    category: "pantalones",
    categoryLabel: "Pantalones",
    price: 55000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/blazer_wool.png",
    images: ["./assets/blazer_wool.png", "./assets/blazer_wooldelantero.png"],
    description: "Pantalon largo recto de corderoy marron con detalles en tejido con diseño. Bolsillos delanteros y traseros, cierre de bragueta reforzado y boton de metal con diseño.",
    materials: "Corderoy",
    sizes: "40"
  },
  {
    id: "sweater-knit",
    name: "Gorro beanie rigido",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 20000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/sweater_knit.png",
    images: ["./assets/sweater_knit.png", "./assets/sweater_knitcostado.png"],
    description: "Gorro estilo beanie rigido con los bordes exteriores en corderoy marron y el centro en un tejido claro con diseño.",
    materials: "Corderoy",
    sizes: "L (60cm)"
  },
  {
    id: "trousers-tailored",
    name: "Abrigo Octubre",
    category: "tapados",
    categoryLabel: "Abrigos",
    price: 65000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/trousers_tailored.png",
    images: ["./assets/trousers_tailored.png", "./assets/trousers_tailoredespalda.png"],
    description: "Abrigo de corderoy y tejido con diseño, forrado en todo su interior con lanilla. Cierre reforzado y cuello estilo camisa.",
    materials: "Corderoy, Lanilla",
    sizes: "L/XL"
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

  // Handle dynamic gallery images
  const galleryContainer = document.querySelector('.modal-gallery');
  if (galleryContainer) {
    const mainImgSrc = product.images ? product.images[0] : product.image;
    galleryContainer.innerHTML = `<img id="modal-img" src="${mainImgSrc}" alt="${product.name}">`;

    if (product.images && product.images.length > 1) {
      let currentImgIdx = 0;

      // Render arrows
      const prevBtn = document.createElement('button');
      prevBtn.className = 'modal-gallery-arrow prev';
      prevBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>`;
      prevBtn.setAttribute('aria-label', 'Anterior imagen');

      const nextBtn = document.createElement('button');
      nextBtn.className = 'modal-gallery-arrow next';
      nextBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/></svg>`;
      nextBtn.setAttribute('aria-label', 'Siguiente imagen');

      const updateGalleryState = (index) => {
        currentImgIdx = (index + product.images.length) % product.images.length;
        const targetSrc = product.images[currentImgIdx];
        document.getElementById('modal-img').src = targetSrc;
      };

      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateGalleryState(currentImgIdx - 1);
      });

      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        updateGalleryState(currentImgIdx + 1);
      });

      galleryContainer.appendChild(prevBtn);
      galleryContainer.appendChild(nextBtn);
    }
  }

  // Populate modal details
  document.getElementById('modal-cat').textContent = product.categoryLabel;
  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-price').textContent = formatPrice(product.price);
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-materials').textContent = product.materials;
  document.getElementById('modal-sizes').textContent = product.sizes;

  // Handle Availability Badge
  const statusElement = document.getElementById('modal-status');
  statusElement.className = `modal-meta-value ${product.availability}`;
  statusElement.textContent = product.availabilityLabel;

  // Handle WhatsApp button link
  const consultBtn = document.getElementById('modal-consult-btn');
  if (consultBtn) {
    const formattedPrice = formatPrice(product.price);
    const textMsg = `Hola Felipe, me interesa consultar por la prenda "${product.name}" (${formattedPrice}). ¿Tienen stock disponible?`;
    consultBtn.href = `https://wa.me/5493456450663?text=${encodeURIComponent(textMsg)}`;
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

// ----------------------------------------
// CONTACT FORM TO WHATSAPP
// ----------------------------------------
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.getElementById('message').value;

    const textMsg = message;
    const whatsappUrl = `https://wa.me/5493456450663?text=${encodeURIComponent(textMsg)}`;

    window.open(whatsappUrl, '_blank');
    contactForm.reset();
  });
}

