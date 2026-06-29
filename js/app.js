// --- FUNCIONES DEL MODAL DE DETALLES DEL HOTEL ---

function openHotel(card) {
  // BLINDAJE: Si el clic no tiene datos, no abrir nada
  if (!card || !card.dataset.nombre) return;

  // 1. Cargar textos principales en el modal
  document.querySelector(".modal h1").innerText = card.dataset.nombre;
  document.querySelector(".desc").innerText = card.dataset.desc;

  // 2. Generar las etiquetas (chips) de servicios dinámicamente
  let chips = "";
  if (card.dataset.wifi === "true") chips += "<span>📶 WiFi</span>";
  if (card.dataset.parking === "true") chips += "<span>🚗 Estacionamiento</span>";
  if (card.dataset.restaurante === "true") chips += "<span>🍽️ Restaurante</span>";
  if (card.dataset.alberca === "true") chips += "<span>🏊 Alberca</span>";
  
  if (card.dataset.nombre === "Hotel García Peral") chips += "<span>💼 Sala de juntas</span>";

  document.querySelector(".chips").innerHTML = chips;

  // 3. Insertar los datos de contacto y tarifas
  document.querySelector(".info").innerHTML = `
    <p><strong>📞 Teléfono:</strong> ${card.dataset.telefono}</p>
    <p><strong>📍 Dirección:</strong> ${card.dataset.direccion}</p>
    <p><strong>💰 Tarifa aprox:</strong> ${card.dataset.precio}</p>
  `;

  // 4. MAPEO CON TUS FOTOS REALES
  let images = [];
  const hotelName = card.dataset.nombre;

  if (hotelName === "Hotel García Peral") {
    images = ["img/hoteles/gae1.avif", "img/hoteles/gar2.avif"]; 
  } else if (hotelName === "Hotel Casa Blanca") {
    images = ["img/hoteles/casa1.avif", "img/hoteles/casa2.avif"];
  } else if (hotelName === "Hotel Yuvi") {
    images = ["img/hoteles/yuvi1.avif", "img/hoteles/yuvi2.avif"];
  } else if (hotelName === "Hotel Luján") {
    images = ["img/hoteles/centro1.avif", "img/hoteles/centro2.avif"];
  } else if (hotelName === "Hotel Ruta del Sol") {
    images = ["img/hoteles/sol1.avif", "img/hoteles/sol2.avif"];
  } else if (hotelName === "Hotel Jardín Real") {
    images = ["img/hoteles/jardin1.avif", "img/hoteles/jardin2.avif"];
  } else if (hotelName === "Hotel Del Portal") {
    images = ["img/hoteles/portal1.avif", "img/hoteles/portal2.avif"];
  } else if (hotelName === "Posada Mixteca") {
    images = ["img/hoteles/posada1.avif", "img/hoteles/pasada2.avif"]; 
  } else if (hotelName === "Hotel Ruta Mixteca") {
    images = ["img/hoteles/ruta1.avif", "img/hoteles/ruta2.avif"];
  } else if (hotelName === "Hotel Jade") {
    images = ["img/hoteles/jade1.avif", "img/hoteles/jade2.avif"];
  } else if (hotelName === "Hotel y Restaurant Fandangos") {
    images = ["img/hoteles/fan6.jpg", "img/hoteles/fan7.jpg"];
  } else if (hotelName === "Hotel Kristal") {
    images = ["img/hoteles/uni1.avif", "img/hoteles/uni2.avif"];
  } else {
    images = ["img/hoteles/yuvi1.avif"];
  }

  // 5. Colocar la primera imagen como principal
  const main = document.getElementById("mainImg");
  main.style.backgroundImage = `url('${images[0]}')`;

  // 6. Limpiar y generar las miniaturas
  const thumbsContainer = document.getElementById("thumbs");
  thumbsContainer.innerHTML = "";

  images.forEach((img, index) => {
    const thumbDiv = document.createElement("div");
    thumbDiv.classList.add("thumb");
    if (index === 0) thumbDiv.classList.add("active");
    thumbDiv.style.backgroundImage = `url('${img}')`;

    thumbDiv.onclick = (e) => {
      e.stopPropagation(); // Evita que el clic en la miniatura cierre el modal
      main.style.backgroundImage = `url('${img}')`;
      document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
      thumbDiv.classList.add("active");
    };
    thumbsContainer.appendChild(thumbDiv);
  });

  // 7. Mostrar el modal y bloquear el scroll del fondo
  document.getElementById("hotelModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  // Solo cerrar si se hace clic en el fondo gris, no en el contenido del modal
  if (e.target.id === "hotelModal") {
    document.getElementById("hotelModal").style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// --- FUNCIÓN DE MOVIMIENTO HORIZONTAL ---
const sliders = document.querySelectorAll('.scroll-horizontal');
sliders.forEach((slider) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => { isDown = false; });
  slider.addEventListener('mouseup', () => { isDown = false; });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2.5; 
    slider.scrollLeft = scrollLeft - walk;
  });
});