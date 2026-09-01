// FEL DESIGN CLOTHING - COLLECTIONS & PRODUCTS DATABASE
const COLLECTIONS = [
  {
    id: "octubre",
    name: "Colección Octubre",
    subtitle: "Cápsula N° 01",
    season: "Colección 2026",
    order: 1,
    badge: "5 Piezas Exhibidas",
    description: "Diseños de autor confeccionados en corderoy marrón, lanilla y tejidos estructurados.",
    coverImage: "./assets/trousers_tailored.png",
    previews: [
      "./assets/trousers_tailored.png",
      "./assets/blazer_wool.png",
      "./assets/coat_linen.png"
    ]
  },
  {
    id: "2-am",
    name: "Colección 2 AM",
    subtitle: "Cápsula N° 02",
    season: "Colección 2026",
    order: 2,
    badge: "4 Piezas Exhibidas",
    description: "Cápsula confeccionada en denim premium de 10 onzas con sus avios en metal y etiqueta bordada en cuero.",
    coverImage: "./assets/Bermuda 3cuartos Delantero.png",
    previews: [
      "./assets/Bermuda 3cuartos Delantero.png",
      "./assets/Falda Denim Delantero.png",
      "./assets/Short Denim Delantero.png",
      "./assets/Pantalon largo Denim.png"
    ]
  }
];

const PRODUCTS = [
  {
    id: "coat-linen",
    name: "Remera negra doble manga",
    collection: "octubre",
    category: "remeras",
    categoryLabel: "Remeras",
    price: 30000,
    availability: "ofstock",
    availabilityLabel: "Agotado",
    image: "./assets/coat_linen.png",
    description: "Remera negra mangas cortas con mangas largas integradas en un tejido grueso con diseño.",
    materials: "jersey 100% algodon",
    sizes: "M - L"
  },
  {
    id: "coat-linen-beige",
    name: "Remera beige doble manga",
    collection: "octubre",
    category: "remeras",
    categoryLabel: "Remeras",
    price: 30000,
    availability: "ofstock",
    availabilityLabel: "Agotado",
    image: "./assets/dress_silk.png",
    description: "Remera beige mangas cortas con mangas largas integradas en un tejido grueso con diseño.",
    materials: "jersery 100% algodon",
    sizes: "M - L"
  },

  {
    id: "blazer-wool",
    name: "Pantalon Octubre",
    collection: "octubre",
    category: "pantalones",
    categoryLabel: "Pantalones",
    price: 55000,
    availability: "ofstock",
    availabilityLabel: "Agotado",
    image: "./assets/blazer_wool.png",
    images: ["./assets/blazer_wool.png", "./assets/blazer_wooldelantero.png"],
    description: "Pantalon largo recto de corderoy marron con detalles en tejido con diseño. Bolsillos delanteros y traseros, cierre de bragueta reforzado y boton de metal con diseño.",
    materials: "Corderoy",
    sizes: "40"
  },
  {
    id: "sweater-knit",
    name: "Gorro beanie rigido",
    collection: "octubre",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 20000,
    availability: "ofstock",
    availabilityLabel: "Agotado",
    image: "./assets/sweater_knit.png",
    images: ["./assets/sweater_knit.png", "./assets/sweater_knitcostado.png"],
    description: "Gorro estilo beanie rigido con los bordes exteriores en corderoy marron y el centro en un tejido claro con diseño.",
    materials: "Corderoy",
    sizes: "L (60cm)"
  },
  {
    id: "trousers-tailored",
    name: "Abrigo Octubre",
    collection: "octubre",
    category: "tapados",
    categoryLabel: "Abrigos",
    price: 65000,
    availability: "ofstock",
    availabilityLabel: "Agotado",
    image: "./assets/trousers_tailored.png",
    images: ["./assets/trousers_tailored.png", "./assets/trousers_tailoredespalda.png"],
    description: "Abrigo de corderoy y tejido con diseño, forrado en todo su interior con lanilla. Cierre reforzado y cuello estilo camisa.",
    materials: "Corderoy, Lanilla",
    sizes: "L/XL"
  },

  // COLECCIÓN 2 AM
  {
    id: "bermuda-3cuartos",
    name: "Bermuda 3cuartos Denim",
    collection: "2-am",
    category: "pantalones",
    categoryLabel: "Pantalones",
    price: 43000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/Bermuda 3cuartos Delantero.png",
    images: ["./assets/Bermuda 3cuartos Delantero.png", "./assets/Bermuda 3cuartos Trasero.png"],
    description: "Bermuda tres cuartos elaborada en denim de 10 onzas, ideal para mantener la forma sin retener tanto el calor del cuerpo, especial para media temporada.",
    materials: "Denim 10 oz",
    sizes: "S - M - L",
    sizeChartImage: "./assets/Tabla de talles - 2.png"
  },
  {
    id: "falda-denim",
    name: "Pollera corta Denim",
    collection: "2-am",
    category: "pantalones",
    categoryLabel: "Pantalones",
    price: 35500,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/Falda Denim Delantero.png",
    images: ["./assets/Falda Denim Delantero.png", "./assets/Falda Denim Trasero.png"],
    description: "Falda corta elaborada en denim de 10 onzas, ideal para mantener la forma amoldandose al cuerpo.",
    materials: "Denim 10 oz",
    sizes: "S - M - L",
    sizeChartImage: "./assets/Tabla de talles - 1.png"
  },
  {
    id: "short-denim",
    name: "Short Cortado Denim",
    collection: "2-am",
    category: "pantalones",
    categoryLabel: "Pantalones",
    price: 38000,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/Short Denim Delantero.png",
    images: ["./assets/Short Denim Delantero.png", "./assets/Short Denim Trasero.png"],
    description: "Short elaborado en denim de 10 onzas, pensado para hombres y mujeres al presentar una forma y largo que se adapta al cuerpo, ideal para mantener la forma sin retener tanto el calor y especial para media temporada.",
    materials: "Denim 10 oz",
    sizes: "S - M - L",
    sizeChartImage: "./assets/Tabla de talles - 3.png"
  },
  {
    id: "pantalon-largo-denim",
    name: "Pantalon largo Denim",
    collection: "2-am",
    category: "pantalones",
    categoryLabel: "Pantalones",
    price: 48500,
    availability: "instock",
    availabilityLabel: "Disponible",
    image: "./assets/Pantalon largo Denim.png",
    images: ["./assets/Pantalon largo Denim.png"],
    description: "Pantalon de Jean con bolsillos delanteros y traseros a la vista, avios en metal inoxidable y un diseño que se adpta muy bien al cuerpo sin perder amplitud.",
    materials: "Denim 10 oz",
    sizes: "S - M - L",
    sizeChartImage: "./assets/Tabla de talles - 4.png"
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

// ----------------------------------------
// SHOPPING CART STATE MANAGEMENT
// ----------------------------------------
let cart = [];

function loadCart() {
  try {
    const saved = localStorage.getItem('fel_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    cart = [];
  }
  updateCartUI();
}

function saveCart() {
  try {
    localStorage.setItem('fel_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Error guardando el changuito:', e);
  }
  updateCartUI();
}

function getItemCollection(item) {
  if (item.collection) return item.collection;
  const prod = PRODUCTS.find(p => p.id === item.id);
  return prod ? prod.collection : null;
}

function addToCart(product, size, qty = 1) {
  const existingIndex = cart.findIndex(item => item.id === product.id && item.size === size);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      categoryLabel: product.categoryLabel,
      price: product.price,
      image: product.images ? product.images[0] : product.image,
      size: size,
      quantity: qty,
      collection: product.collection
    });
  }
  saveCart();
  showToast(`Prenda agregada al changuito: <strong>${product.name.trim()}</strong> (Talle ${size})`);
}

function updateCartItemQuantity(id, size, delta) {
  const index = cart.findIndex(item => item.id === id && item.size === size);
  if (index > -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
  }
}

function removeFromCart(id, size) {
  cart = cart.filter(item => !(item.id === id && item.size === size));
  saveCart();
}

function clearCart() {
  cart = [];
  saveCart();
}

function toggleCartDrawer(forceOpen) {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (!drawer || !backdrop) return;

  const isOpen = forceOpen !== undefined ? forceOpen : !drawer.classList.contains('active');
  drawer.classList.toggle('active', isOpen);
  backdrop.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Update Navbar Badges
  const badgeCount = document.getElementById('cart-badge-count');
  if (badgeCount) {
    badgeCount.textContent = totalItems;
    badgeCount.classList.toggle('visible', totalItems > 0);
  }

  // Update Drawer Header Count
  const drawerCount = document.getElementById('cart-drawer-count');
  if (drawerCount) {
    drawerCount.textContent = `(${totalItems} ${totalItems === 1 ? 'prenda' : 'prendas'})`;
  }

  // Update Items Container
  const container = document.getElementById('cart-items-container');
  const footer = document.getElementById('cart-footer');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p class="empty-title">Tu changuito está vacío</p>
        <p class="empty-subtitle">Un changuito vacio, es un changuito triste, llevate algo dale ;)</p>
        <a href="productos.html" class="btn btn-primary" onclick="toggleCartDrawer(false)">Ver Colección</a>
      </div>
    `;
    if (footer) footer.style.display = 'none';
  } else {
    if (footer) footer.style.display = 'block';

    let subtotalAll = 0;
    const unitPrices2am = [];

    container.innerHTML = cart.map(item => {
      const itemSubtotal = item.price * item.quantity;
      subtotalAll += itemSubtotal;

      const collectionId = getItemCollection(item);
      const is2AM = collectionId === '2-am';
      if (is2AM) {
        for (let i = 0; i < item.quantity; i++) {
          unitPrices2am.push(item.price);
        }
      }

      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <span class="cart-item-cat">${item.categoryLabel || ''}${is2AM ? ' • Colección 2 AM' : ''}</span>
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-size">Talle: <strong>${item.size}</strong></span>
            <div class="cart-item-price-row">
              <span class="cart-item-price">${formatPrice(item.price)}</span>
              <div class="qty-selector mini">
                <button type="button" class="qty-btn" onclick="updateCartItemQuantity('${item.id}', '${item.size}', -1)" aria-label="Reducir">-</button>
                <span>${item.quantity}</span>
                <button type="button" class="qty-btn" onclick="updateCartItemQuantity('${item.id}', '${item.size}', 1)" aria-label="Aumentar">+</button>
              </div>
            </div>
          </div>
          <button type="button" class="cart-item-remove" onclick="removeFromCart('${item.id}', '${item.size}')" aria-label="Eliminar prenda">
            <svg viewBox="0 0 24 24" width="18" height="18"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/></svg>
          </button>
        </div>
      `;
    }).join('');

    // Sort 2 AM unit prices ascending to discount the cheapest items first
    unitPrices2am.sort((a, b) => a - b);
    const count2am = unitPrices2am.length;

    let discountPercent = 0;
    let discountLabelText = "";
    let discountableSubtotal = 0;

    if (count2am === 2) {
      discountPercent = 0.10;
      discountLabelText = "Descuento Colección 2 AM (10% en 2 prendas):";
      discountableSubtotal = unitPrices2am[0] + unitPrices2am[1];
    } else if (count2am === 3) {
      discountPercent = 0.20;
      discountLabelText = "Descuento Colección 2 AM (20% en 3 prendas):";
      discountableSubtotal = unitPrices2am[0] + unitPrices2am[1] + unitPrices2am[2];
    } else if (count2am > 3) {
      discountPercent = 0.20;
      discountLabelText = "Descuento Colección 2 AM (20% en 3 prendas):";
      discountableSubtotal = unitPrices2am[0] + unitPrices2am[1] + unitPrices2am[2];
    }

    const discountAmount = Math.round(discountableSubtotal * discountPercent);
    const finalTotal = subtotalAll - discountAmount;

    // Update Promo Banner
    const promoBanner = document.getElementById('cart-promo-banner');
    if (promoBanner) {
      if (count2am === 0) {
        promoBanner.className = 'cart-promo-banner';
        promoBanner.innerHTML = `<span class="cart-promo-banner-icon">✨</span> <span><strong>Promo Colección 2 AM:</strong> 2 prendas con <strong>10% OFF</strong> | 3 prendas con <strong>20% OFF</strong> (aplica en 3 prendas)</span>`;
      } else if (count2am === 1) {
        promoBanner.className = 'cart-promo-banner';
        promoBanner.innerHTML = `<span class="cart-promo-banner-icon">🔥</span> <span>¡Llevás 1 prenda! Agregá <strong>1 prenda más</strong> de la Colección 2 AM para activar <strong>10% OFF</strong></span>`;
      } else if (count2am === 2) {
        promoBanner.className = 'cart-promo-banner active-discount';
        promoBanner.innerHTML = `<span class="cart-promo-banner-icon">🎉</span> <span><strong>¡10% OFF aplicado!</strong> Agregá 1 prenda más de la Colección 2 AM para obtener <strong>20% OFF</strong></span>`;
      } else if (count2am === 3) {
        promoBanner.className = 'cart-promo-banner active-discount';
        promoBanner.innerHTML = `<span class="cart-promo-banner-icon">🔥</span> <span><strong>¡20% OFF aplicado!</strong> Aplica en tus 3 prendas de Colección 2 AM</span>`;
      } else {
        promoBanner.className = 'cart-promo-banner active-discount';
        promoBanner.innerHTML = `<span class="cart-promo-banner-icon">🔥</span> <span><strong>¡20% OFF aplicado!</strong> Aplica en 3 prendas de la Colección 2 AM</span>`;
      }
    }

    // Update Cart Totals Breakdown
    const subtotalRow = document.getElementById('cart-subtotal-row');
    const subtotalPriceEl = document.getElementById('cart-subtotal-price');
    const discountRow = document.getElementById('cart-discount-row');
    const discountLabelEl = document.getElementById('cart-discount-label');
    const discountPriceEl = document.getElementById('cart-discount-price');
    const totalPriceEl = document.getElementById('cart-total-price');

    if (discountAmount > 0) {
      if (subtotalRow) {
        subtotalRow.style.display = 'flex';
        if (subtotalPriceEl) subtotalPriceEl.textContent = formatPrice(subtotalAll);
      }
      if (discountRow) {
        discountRow.style.display = 'flex';
        if (discountLabelEl) discountLabelEl.textContent = discountLabelText;
        if (discountPriceEl) discountPriceEl.textContent = `-${formatPrice(discountAmount)}`;
      }
    } else {
      if (subtotalRow) subtotalRow.style.display = 'none';
      if (discountRow) discountRow.style.display = 'none';
    }

    if (totalPriceEl) totalPriceEl.textContent = formatPrice(finalTotal);

    // Update WhatsApp message
    const whatsappBtn = document.getElementById('cart-whatsapp-btn');
    if (whatsappBtn) {
      let msg = `Hola Felipe, estoy interesad@ en estas prendas:\n\n`;
      cart.forEach(item => {
        const is2am = getItemCollection(item) === '2-am';
        const tag = is2am ? ' [Colección 2 AM]' : '';
        msg += `• ${item.name.trim()}${tag} (Talle: ${item.size}) x${item.quantity} — ${formatPrice(item.price * item.quantity)}\n`;
      });

      if (discountAmount > 0) {
        msg += `\nSubtotal: ${formatPrice(subtotalAll)}\n`;
        msg += `${discountLabelText} -${formatPrice(discountAmount)}\n`;
      }

      msg += `\n*Total Estimado: ${formatPrice(finalTotal)} + envio. *\n\nPodemos coordinar el envio?`;

      whatsappBtn.href = `https://wa.me/5493456450663?text=${encodeURIComponent(msg)}`;
    }
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `
    <div class="toast-content">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    </div>
    <button class="toast-action" onclick="toggleCartDrawer(true)">Ver Changuito</button>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function showFunPopup(message) {
  const existing = document.getElementById('fun-modal');
  if (existing) existing.remove();

  const backdrop = document.createElement('div');
  backdrop.id = 'fun-modal';
  backdrop.className = 'fun-modal-backdrop';
  backdrop.innerHTML = `
    <div class="fun-modal-box">
      <p class="fun-modal-text">${message}</p>
      <button type="button" class="btn btn-primary fun-modal-btn">¡Tranqui, solo miraba!</button>
    </div>
  `;

  document.body.appendChild(backdrop);

  setTimeout(() => backdrop.classList.add('active'), 10);

  const closePopup = () => {
    backdrop.classList.remove('active');
    setTimeout(() => backdrop.remove(), 300);
  };

  // ONLY close when clicking the button text
  backdrop.querySelector('.fun-modal-btn').addEventListener('click', closePopup);
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
    let currentImgIdx = 0;
    const productImages = product.images && product.images.length > 0 ? product.images : [product.image];
    const mainImgSrc = productImages[0];

    galleryContainer.innerHTML = `<img id="modal-img" src="${mainImgSrc}" alt="${product.name}" title="Haz clic para ver foto completa" style="cursor: pointer;">`;

    const modalImg = document.getElementById('modal-img');
    if (modalImg) {
      modalImg.onclick = () => {
        openLightboxModal(productImages, currentImgIdx, product.name);
      };
    }

    if (productImages.length > 1) {
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
        currentImgIdx = (index + productImages.length) % productImages.length;
        const targetSrc = productImages[currentImgIdx];
        if (modalImg) modalImg.src = targetSrc;
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

  // Handle Sizes & Quantity Selector
  let selectedSize = 'M';
  let selectedQty = 1;

  const sizesContainer = document.getElementById('modal-sizes');
  if (sizesContainer) {
    const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];
    sizesContainer.innerHTML = sizeOptions.map(size => {
      const isSelected = size === selectedSize;
      return `<button type="button" class="size-btn ${isSelected ? 'active' : ''}" data-size="${size}">${size}</button>`;
    }).join('');

    const sizeButtons = sizesContainer.querySelectorAll('.size-btn');
    sizeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        sizeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
      });
    });
  }

  // Handle Size Chart Link Button
  const sizeChartBtn = document.getElementById('modal-size-chart-btn');
  if (sizeChartBtn) {
    if (product.sizeChartImage) {
      sizeChartBtn.style.display = 'inline-flex';
      sizeChartBtn.onclick = (e) => {
        e.preventDefault();
        openSizeChartModal(product.sizeChartImage, product.name);
      };
    } else {
      sizeChartBtn.style.display = 'none';
    }
  }

  // Quantity controls in modal
  const qtyValEl = document.getElementById('modal-qty-val');
  const qtyMinusBtn = document.getElementById('modal-qty-minus');
  const qtyPlusBtn = document.getElementById('modal-qty-plus');
  const qtyMetaItem = qtyValEl ? qtyValEl.closest('.modal-meta-item') : null;

  const isOutOfStock = product.availability === 'ofstock' || product.availability === 'outofstock' || product.availability === 'outstock' || product.availability === 'ofsotck';

  if (qtyMetaItem) {
    qtyMetaItem.style.display = isOutOfStock ? 'none' : 'flex';
  }

  if (qtyValEl) qtyValEl.textContent = selectedQty;

  if (qtyMinusBtn) {
    qtyMinusBtn.onclick = (e) => {
      e.preventDefault();
      if (selectedQty > 1) {
        selectedQty--;
        if (qtyValEl) qtyValEl.textContent = selectedQty;
      }
    };
  }

  if (qtyPlusBtn) {
    qtyPlusBtn.onclick = (e) => {
      e.preventDefault();
      selectedQty++;
      if (qtyValEl) qtyValEl.textContent = selectedQty;
      if (selectedQty === 8) {
        showFunPopup('Epaa ¿que vas a hacer con tanta ropa?');
      }
    };
  }

  // Handle Availability & Action Button
  const addCartBtn = document.getElementById('modal-add-cart-btn');
  if (addCartBtn) {
    if (isOutOfStock) {
      addCartBtn.innerHTML = `
        <svg style="width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2;" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        Consultar pieza
      `;
      addCartBtn.onclick = (e) => {
        e.preventDefault();
        closeModal();
        window.location.href = 'index.html#contacto';
      };
    } else {
      addCartBtn.innerHTML = `
        <svg style="width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2;" viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        Agregar al Changuito
      `;
      addCartBtn.onclick = (e) => {
        e.preventDefault();
        addToCart(product, selectedSize, selectedQty);
        closeModal();
      };
    }
  }

  // Handle Availability Badge
  const statusElement = document.getElementById('modal-status');
  if (statusElement) {
    statusElement.className = `modal-meta-value ${product.availability}`;
    statusElement.textContent = product.availabilityLabel;
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

// SIZE CHART MODAL LOGIC
function openSizeChartModal(imageSrc, titleText) {
  const sizeChartModal = document.getElementById('size-chart-modal');
  const sizeChartImg = document.getElementById('size-chart-img');
  if (!sizeChartModal || !sizeChartImg) return;

  sizeChartImg.src = imageSrc;
  sizeChartImg.alt = `Tabla de Talles - ${titleText || ''}`;
  sizeChartModal.classList.add('active');
}

function closeSizeChartModal() {
  const sizeChartModal = document.getElementById('size-chart-modal');
  if (sizeChartModal) {
    sizeChartModal.classList.remove('active');
  }
}

// FULL IMAGE LIGHTBOX MODAL LOGIC
let currentLightboxImages = [];
let currentLightboxIndex = 0;
let currentLightboxTitle = '';

function openLightboxModal(images, startIndex, titleText) {
  const lightboxModal = document.getElementById('image-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!lightboxModal || !lightboxImg) return;

  currentLightboxImages = images && images.length > 0 ? images : [];
  currentLightboxIndex = startIndex || 0;
  currentLightboxTitle = titleText || '';

  const updateLightboxState = () => {
    if (currentLightboxImages.length === 0) return;
    currentLightboxIndex = (currentLightboxIndex + currentLightboxImages.length) % currentLightboxImages.length;
    lightboxImg.src = currentLightboxImages[currentLightboxIndex];
    lightboxImg.alt = `${currentLightboxTitle} - Imagen ${currentLightboxIndex + 1}`;

    if (prevBtn) prevBtn.style.display = currentLightboxImages.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = currentLightboxImages.length > 1 ? 'flex' : 'none';
  };

  updateLightboxState();

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      currentLightboxIndex--;
      updateLightboxState();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      currentLightboxIndex++;
      updateLightboxState();
    };
  }

  lightboxModal.classList.add('active');
}

function closeLightboxModal() {
  const lightboxModal = document.getElementById('image-lightbox-modal');
  if (lightboxModal) {
    lightboxModal.classList.remove('active');
  }
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

// Initial Cart setup and Event Listeners
loadCart();

document.addEventListener('DOMContentLoaded', () => {
  loadCart();

  const navCartBtn = document.getElementById('nav-cart-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const cartClearBtn = document.getElementById('cart-clear-btn');
  const sizeChartCloseBtn = document.getElementById('size-chart-close');
  const sizeChartModal = document.getElementById('size-chart-modal');
  const lightboxCloseBtn = document.getElementById('lightbox-close');
  const lightboxModal = document.getElementById('image-lightbox-modal');

  if (navCartBtn) navCartBtn.addEventListener('click', () => toggleCartDrawer(true));
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', () => toggleCartDrawer(false));
  if (cartBackdrop) cartBackdrop.addEventListener('click', () => toggleCartDrawer(false));
  if (cartClearBtn) {
    cartClearBtn.addEventListener('click', () => {
      if (confirm('¿Estás seguro de que deseas vaciar tu changuito?')) {
        clearCart();
      }
    });
  }
  if (sizeChartCloseBtn) sizeChartCloseBtn.addEventListener('click', closeSizeChartModal);
  if (sizeChartModal) {
    sizeChartModal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        closeSizeChartModal();
      }
    });
  }
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightboxModal);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        closeLightboxModal();
      }
    });
  }
});

// RENDER A SINGLE PRODUCT CARD
function createProductCardHTML(product) {
  return `
    <div class="product-card" onclick="openProductModal('${product.id}')" tabindex="0" role="button" aria-label="Ver detalles de ${product.name}" data-category="${product.category}">
      <span class="product-badge ${product.availability}">${product.availabilityLabel}</span>
      <div class="product-img-wrapper">
        <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price-row">
          <span class="product-price">${formatPrice(product.price)}</span>
          <button type="button" class="product-view-btn" onclick="event.stopPropagation(); openProductModal('${product.id}')">
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
  // Sort products: Available first (newest to oldest), then Out of Stock (newest to oldest)
  const productsWithIndex = PRODUCTS.map((p, idx) => ({ ...p, _index: idx }));
  const availableProducts = productsWithIndex.filter(p => p.availability === 'instock');
  const outOfStockProducts = productsWithIndex.filter(p => p.availability !== 'instock');

  availableProducts.sort((a, b) => b._index - a._index);
  outOfStockProducts.sort((a, b) => b._index - a._index);

  const sortedHomepageProducts = [...availableProducts, ...outOfStockProducts];

  // Render Carousel items
  carouselTrack.innerHTML = sortedHomepageProducts.map(p => `
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
// COLLECTION FOLDER CARD HTML CREATOR
// ----------------------------------------
function createCollectionFolderCardHTML(collection) {
  const collectionProducts = PRODUCTS.filter(p => p.collection === collection.id);
  const itemCount = collectionProducts.length;
  const countLabel = `${itemCount} ${itemCount === 1 ? 'pieza exhibida' : 'piezas exhibidas'}`;

  // La colección figura como Disponible si tiene al menos un producto con stock/disponible, de lo contrario Agotada
  const hasAvailableProduct = collectionProducts.some(p => {
    const isOutOfStock = p.availability === 'ofstock' || p.availability === 'outofstock' || p.availability === 'outstock' || p.availability === 'ofsotck';
    return !isOutOfStock;
  });

  const availabilityText = hasAvailableProduct ? 'Disponible' : 'Agotada';
  const availabilityClass = hasAvailableProduct ? 'instock' : 'ofstock';

  return `
    <div class="collection-folder-card" onclick="openCollectionFolder('${collection.id}')" tabindex="0" role="button" aria-label="Abrir ${collection.name}" title="${countLabel}">
      <div class="folder-tab">
        <span class="folder-tab-label">${collection.subtitle || 'Cápsula Exhibida'}</span>
        <span class="folder-tab-badge ${availabilityClass}">${availabilityText}</span>
      </div>
      
      <div class="folder-card-inner">
        <div class="folder-cover-wrapper">
          <div class="folder-stacked-card stacked-1"></div>
          <div class="folder-stacked-card stacked-2"></div>
          <img src="${collection.coverImage}" alt="${collection.name}" class="folder-cover-img" loading="lazy">
          <div class="folder-cover-overlay">
            <span class="folder-preview-pill">Explorar prendas (${itemCount})</span>
          </div>
        </div>

        <div class="folder-info">
          <h3 class="folder-title">${collection.name}</h3>
          <div class="folder-action-row">
            <button type="button" class="btn btn-primary folder-open-btn">
              <span>Ver Colección</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------
// CATALOG VIEW LOGIC (`pageProductos`)
// ----------------------------------------
const collectionsFoldersView = document.getElementById('collections-folders-view');
const collectionProductsView = document.getElementById('collection-products-view');

if (collectionsFoldersView && collectionProductsView) {
  const urlParams = new URLSearchParams(window.location.search);
  let collectionParam = urlParams.get('collection');
  let filterParam = urlParams.get('filter');

  // If filterParam is present without collectionParam, find which collection has items matching filter
  if (!collectionParam && filterParam) {
    const matchingProd = PRODUCTS.find(p => p.category === filterParam);
    if (matchingProd) {
      collectionParam = matchingProd.collection;
    }
  }

  let currentCollectionId = collectionParam || null;
  let activeFilter = filterParam || 'all';
  let searchQuery = '';

  window.openCollectionFolder = function (collectionId) {
    currentCollectionId = collectionId;
    activeFilter = 'all';
    searchQuery = '';

    // Reset category filter buttons UI
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter') === 'all') {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const filterToggle = document.getElementById('filter-dropdown-toggle');
    if (filterToggle) {
      filterToggle.querySelector('span').textContent = 'Categorías';
    }

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    // Update URL query param quietly
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('collection', collectionId);
    newUrl.searchParams.delete('filter');
    window.history.pushState({}, '', newUrl);

    renderCatalogView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.closeCollectionFolder = function () {
    currentCollectionId = null;
    activeFilter = 'all';
    searchQuery = '';
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    // Clear URL query params quietly
    const newUrl = new URL(window.location);
    newUrl.searchParams.delete('collection');
    newUrl.searchParams.delete('filter');
    window.history.pushState({}, '', newUrl);

    renderCatalogView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backBtn = document.getElementById('back-to-collections-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.closeCollectionFolder();
    });
  }

  function renderCatalogView() {
    const breadcrumbs = document.getElementById('catalog-breadcrumbs');
    const catalogTitle = document.getElementById('catalog-title');
    const catalogDesc = document.getElementById('catalog-desc');

    if (!currentCollectionId) {
      // 1. SHOW COLLECTIONS FOLDERS VIEW
      collectionsFoldersView.style.display = 'block';
      collectionProductsView.style.display = 'none';

      // Update Header Text
      if (breadcrumbs) {
        breadcrumbs.innerHTML = `
          <a href="./index.html">Inicio</a>
          <span class="crumb-separator">/</span>
          <span class="crumb-active">Carpetas de Colección</span>
        `;
      }
      if (catalogTitle) catalogTitle.textContent = 'Carpetas de Colección';
      if (catalogDesc) catalogDesc.textContent = 'Explorá nuestras carpetas exhibidas. Seleccioná una colección para ver sus piezas expuestas y armar tu changuito.';

      // Render Folders Grid (ordenado por recreciente: cápsula más reciente primero)
      const collectionsGrid = document.getElementById('collections-grid');
      if (collectionsGrid) {
        const sortedCollections = [...COLLECTIONS].sort((a, b) => {
          const orderA = a.order !== undefined ? a.order : parseInt((a.subtitle || '').replace(/\D/g, '')) || 0;
          const orderB = b.order !== undefined ? b.order : parseInt((b.subtitle || '').replace(/\D/g, '')) || 0;
          return orderB - orderA;
        });
        collectionsGrid.innerHTML = sortedCollections.map(col => createCollectionFolderCardHTML(col)).join('');
      }
    } else {
      // 2. SHOW INSIDE COLLECTION PRODUCTS VIEW
      const activeCol = COLLECTIONS.find(c => c.id === currentCollectionId) || COLLECTIONS[0];

      collectionsFoldersView.style.display = 'none';
      collectionProductsView.style.display = 'block';

      // Update Header Text
      if (breadcrumbs) {
        breadcrumbs.innerHTML = `
          <a href="./index.html">Inicio</a>
          <span class="crumb-separator">/</span>
          <a href="#" onclick="event.preventDefault(); window.closeCollectionFolder();">Colecciones</a>
          <span class="crumb-separator">/</span>
          <span class="crumb-active">${activeCol.name}</span>
        `;
      }
      if (catalogTitle) catalogTitle.textContent = activeCol.name;
      if (catalogDesc) catalogDesc.textContent = activeCol.description;

      // Filter and render products inside this collection
      renderCollectionProductsGrid(activeCol.id);
    }
  }

  function renderCollectionProductsGrid(colId) {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    let filtered = PRODUCTS.filter(p => p.collection === colId);

    // Apply category sub-filter
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

    // Render products
    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <p style="font-size: 1.1rem; color: var(--color-muted);">No se encontraron prendas que coincidan con el filtro en esta colección.</p>
        </div>
      `;
    } else {
      productsGrid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    }
  }

  // Set up category filter buttons inside collection
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterToggle = document.getElementById('filter-dropdown-toggle');
  const filterOptions = document.getElementById('filter-options');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.getAttribute('data-filter');

      if (filterToggle && filterOptions) {
        filterToggle.querySelector('span').textContent = `Categoría: ${e.target.textContent}`;
        filterOptions.classList.remove('open');
        filterToggle.classList.remove('open');
      }

      if (currentCollectionId) {
        renderCollectionProductsGrid(currentCollectionId);
      }
    });
  });

  // Toggle dropdown logic for mobile
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
      if (currentCollectionId) {
        renderCollectionProductsGrid(currentCollectionId);
      }
    });
  }

  // Initial render
  renderCatalogView();
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

