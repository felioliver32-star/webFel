# webFel - Showroom de Moda de Autor

Sitio web showroom y catálogo interactivo para **Fel**, firma de indumentaria y sastrería de autor creada por el diseñador **Felipe Oliver** en Santa Fe, Argentina.

## Características

* **Inicio (Home)**: Banner hero minimalista, sección informativa de la marca y formulario de contacto para visitas al showroom.
* **Carrusel Interactivo**: Deslizador táctil responsivo y dinámico para las piezas destacadas de la colección.
* **Catálogo de Productos (`pageProductos`)**: Cuadrícula de indumentaria con precios y etiquetas dinámicas de disponibilidad (*Disponible*, *Últimas Unidades*, *Agotado*).
* **Filtros y Búsqueda**: Barra de búsqueda en tiempo real y filtrado dinámico por categorías (*Sastrería, Abrigos, Vestidos, Tejidos*).
* **Pre-filtrado por URL**: Enlaces dinámicos desde el footer cargan el catálogo directamente con el filtro seleccionado.
* **Consulta por WhatsApp**: Integración dinámica en el modal de detalles de cada producto que genera un enlace directo a WhatsApp (`+54 3456 450663`) con un mensaje personalizado que detalla el nombre del artículo y su precio.
* **Diseño Premium**: Tipografía sastrera *Xanh Mono* (Google Fonts), paleta de colores borgoña y crema basada en el logotipo oficial, y diseño responsivo adaptado a móviles, tablets y ordenadores.

## Estructura del Proyecto

* `index.html`: Página de inicio y presentación.
* `productos.html`: Catálogo interactivo de prendas.
* `style.css`: Estilos globales y diseño responsivo.
* `app.js`: Base de datos de prendas, lógica del carrusel, filtros, buscador y lógica del modal de WhatsApp.
* `assets/`: Imágenes de catálogo, logotipo y eslóganes oficiales de la marca.

## Tecnologías Utilizadas

* HTML5 Semántico y Accesible.
* CSS3 (Flexbox, Grid, Animaciones y Variables Nativas).
* JavaScript Vanilla (ES6+).
* Xanh Mono & Playfair Display (Google Fonts).
