const hoteles = {
  // Huajuapan (10)
  "Hotel Campestre Don Luis": { mun: "Huajuapan", tipo: "Campestre", est: 4, cal: 4.5, desc: "Amplias áreas verdes.", rec: "Excelente calificación. Los huéspedes destacan la limpieza y atención del personal.", serv: ["WiFi", "Alberca", "Estacionamiento","restaurante","jardines","salon de eventos"], tel: "9535374851", dir: "Libramiento Norte 68, Colonia del Maestro, Huajuapan de León, Oaxaca", precio: "$700+", fotos: ["img/hoteles/huajuapan/hcamdon1.jpg", "img/hoteles/huajuapan/hcamdon2.jpg", "img/hoteles/huajuapan/hcamdon3.jpg", "img/hoteles/huajuapan/hcamdon4.jpg"] },
  "Hotel Boutique Ñuu Xua": { mun: "Huajuapan", tipo: "Boutique", est: 5, cal: 4.8, desc: "Lujo con diseño regional.", rec: "Una experiencia sofisticada con un diseño que honra la cultura local.", serv: ["WiFi", "Restaurante", "estacionamiento","servicio ejecutivo"], tel: "9535325070", dir: " Eucaliptos 4, Santa Teresa, Huajuapan de León.", precio: "$1,200+", fotos: ["img/hoteles/huajuapan/hboñu1.jpg", "img/hoteles/huajuapan/hboñu2.jpg", "img/hoteles/huajuapan/hboñu3.jpg", "img/hoteles/huajuapan/hboñu4.jpg"] },
  "Hotel García Peral": { mun: "Huajuapan", tipo: "Ejecutivo", est: 4, cal: 4.4, desc: "Alberca y salas ejecutivas.", rec: "Ideal para viajes de negocios gracias a sus instalaciones funcionales.", serv: ["WiFi", "restaurante","estacionamiento","servicio al cuarto"], tel: "9535320777", dir: "Heroico Colegio Militar 1, Centro, Huajuapan de Leó", precio: "$850+", fotos: ["img/hoteles/huajuapan/hgap1.jpg", "img/hoteles/huajuapan/hgap2.jpg", "img/hoteles/huajuapan/hgap3.jpg", "img/hoteles/huajuapan/hgap4.jpg"] },
  "San Francisco Hotel Boutique": { mun: "Huajuapan", tipo: "Boutique", est: 4, cal: 4.6, desc: "Elegancia céntrica.", rec: "Un hotel acogedor con atención personalizada en pleno centro.", serv: ["WiFi", "habitaciones premium","atencion personalizada"], tel: "9535324247", dir: " Porfirio Díaz No. 4, Centro, Huajuapan de León", precio: "$900+", fotos: ["img/hoteles/huajuapan/hsfb1.jpg", "img/hoteles/huajuapan/hsfb2.jpg", "img/hoteles/huajuapan/hsfb3.jpg", "img/hoteles/huajuapan/hsfb4.jpg"] },
  "Hotel Casa de las Flores": { mun: "Huajuapan", tipo: "Tradicional", est: 3, cal: 4.2, desc: "Ambiente familiar.", rec: "Perfecto para una estancia relajada en familia.", serv: ["WiFi", "Jardines","estacionamiento"], tel: "9536881161", dir: "Membrillos 29, Las Huertas, Huajuapan de León", precio: "$550+", fotos: ["img/hoteles/huajuapan/hcc1.jpg", "img/hoteles/huajuapan/hcc2.jpg", "img/hoteles/huajuapan/hcc3.jpg", "img/hoteles/huajuapan/hcc4.jpg"] },
  "Hotel Casa Cantera": { mun: "Huajuapan", tipo: "Tradicional", est: 3, cal: 4.1, desc: "Arquitectura clásica.", rec: "Arquitectura con encanto que te hará sentir como en casa.", serv: ["WiFi", "estacionamiento","areas verdes"], tel: "9531396261", dir: "Mezquites 1, La Junta, Huajuapan de León.", precio: "$600+", fotos: ["img/hoteles/huajuapan/hca1.jpg", "img/hoteles/huajuapan/hca2.jpg", "img/hoteles/huajuapan/hca3.jpg", "img/hoteles/huajuapan/hca4.jpg"] },
  "Hotel Casablanca": { mun: "Huajuapan", tipo: "Familiar", est: 3, cal: 4.0, desc: "Estancia funcional.", rec: "Una opción práctica y cómoda para estancias cortas.", serv: ["WiFi", "restaurante","estacionamiento","alberca"], tel: "9535329363", dir: "santa teresa,huajuapan de leon,", precio: "$500+", fotos: ["img/hoteles/huajuapan/hcab1.jpg", "img/hoteles/huajuapan/hcab2.jpg", "img/hoteles/huajuapan/hcab3.jpg", "img/hoteles/huajuapan/hcab4.jpg"] },
  "Hotel Casa Mixteca": { mun: "Huajuapan", tipo: "Económico", est: 2, cal: 3.8, desc: "Hospedaje sencillo.", rec: "La mejor relación calidad-precio para viajeros que buscan sencillez.", serv: ["WiFi","estacionamiento","habitaciones privadas"], tel: "9531383433", dir: "Álamos 60, Santa Teresa, Huajuapan de León", precio: "$400+", fotos: ["img/hoteles/huajuapan/hcm1.jpg", "img/hoteles/huajuapan/hcm2.jpg", "img/hoteles/huajuapan/hcm3.jpg", "img/hoteles/huajuapan/hcm4.jpg"] },
  "Hotel Muñoz de Luna": { mun: "Huajuapan", tipo: "Tradicional", est: 3, cal: 4.3, desc: "Atención personalizada.", rec: "El personal se desvive por hacer que tu estancia sea memorable.", serv: ["WiFi", "restaurante","estacionamiento"], tel: "9535320895", dir: "Carretera Huajuapan–Tehuacán km 1.5", precio: "$550+", fotos: ["img/hoteles/huajuapan/hmdl1.jpg", "img/hoteles/huajuapan/hmdl2.jpg", "img/hoteles/huajuapan/hmdl3.jpg", "img/hoteles/huajuapan/hmdl4.jpg"] },
  "Hotel El Tesoro de Michapa": { mun: "Huajuapan", tipo: "Campestre", est: 3, cal: 4.2, desc: "Espacio natural.", rec: "Rodeado de naturaleza, ideal para desconectarse de la ciudad.", serv: ["WiFi", "restaurante","habitaciones sencillas"], tel: "9535034501", dir: "Calle Indio de Nuyoó 7, Centro, Huajuapan de León.", precio: "$650+", fotos: ["img/hoteles/huajuapan/htdm1.jpg"] },
  
  // Tlaxiaco (10)
  "Gran Hotel Tlaxiaco": { mun: "Tlaxiaco", tipo: "Ejecutivo", est: 4, cal: 4.1, desc: "El más completo.", rec: "Servicios de alta calidad para viajeros exigentes.", serv: ["WiFi", "Restaurante", "Parking"], tel: "9555520001", dir: "Centro, Tlaxiaco", precio: "$750+", fotos: ["img/hoteles/tlaxiaco/tlax1.jpg", "img/hoteles/tlaxiaco/tlax1.jpg", "img/hoteles/tlaxiaco/tlax1.jpg", "img/hoteles/tlaxiaco/tlax1.jpg"] },
  "Hotel Misión Tlaxiaco": { mun: "Tlaxiaco", tipo: "Tradicional", est: 3, cal: 4.0, desc: "Tranquilo y limpio.", rec: "Destaca por su impecable limpieza y tranquilidad.", serv: ["WiFi", "Estacionamiento"], tel: "9555520002", dir: "Calle Rayón", precio: "$600+", fotos: ["img/hoteles/tlaxiaco/tlax2.jpg", "img/hoteles/tlaxiaco/tlax2.jpg", "img/hoteles/tlaxiaco/tlax2.jpg", "img/hoteles/tlaxiaco/tlax2.jpg"] },
  "Hotel Colón": { mun: "Tlaxiaco", tipo: "Tradicional", est: 3, cal: 3.9, desc: "Un clásico.", rec: "Un hotel con historia y tradición en el corazón de Tlaxiaco.", serv: ["WiFi"], tel: "9555520003", dir: "Centro", precio: "$550+", fotos: ["img/hoteles/tlaxiaco/tlax3.jpg", "img/hoteles/tlaxiaco/tlax3.jpg", "img/hoteles/tlaxiaco/tlax3.jpg", "img/hoteles/tlaxiaco/tlax3.jpg"] },
  "Posada Los Dominicos": { mun: "Tlaxiaco", tipo: "Económico", est: 2, cal: 3.7, desc: "Sencillo y rústico.", rec: "Opción económica con lo necesario para una noche de paso.", serv: ["WiFi"], tel: "9555520004", dir: "Centro", precio: "$400+", fotos: ["img/hoteles/tlaxiaco/tlax4.jpg", "img/hoteles/tlaxiaco/tlax4.jpg", "img/hoteles/tlaxiaco/tlax4.jpg", "img/hoteles/tlaxiaco/tlax4.jpg"] },
  "Hotel EBA": { mun: "Tlaxiaco", tipo: "Económico", est: 2, cal: 3.8, desc: "Para viajeros de paso.", rec: "Ubicación estratégica para quienes están en ruta.", serv: ["WiFi"], tel: "9555520005", dir: "Acceso Norte", precio: "$450+", fotos: ["img/hoteles/tlaxiaco/tlax5.jpg", "img/hoteles/tlaxiaco/tlax5.jpg", "img/hoteles/tlaxiaco/tlax5.jpg", "img/hoteles/tlaxiaco/tlax5.jpg"] },
  "Cabañas El Acueducto": { mun: "Tlaxiaco", tipo: "Campestre", est: 3, cal: 4.3, desc: "Ambiente natural.", rec: "Una experiencia inmersiva en la naturaleza mixteca.", serv: ["WiFi", "Jardines"], tel: "9555520006", dir: "Afueras", precio: "$800+", fotos: ["img/hoteles/tlaxiaco/tlax6.jpg", "img/hoteles/tlaxiaco/tlax6.jpg", "img/hoteles/tlaxiaco/tlax6.jpg", "img/hoteles/tlaxiaco/tlax6.jpg"] },
  "Hotel Casa Franco": { mun: "Tlaxiaco", tipo: "Boutique", est: 3, cal: 4.2, desc: "Decoración colonial.", rec: "Decoración con estilo que enamora a primera vista.", serv: ["WiFi", "Desayuno"], tel: "9555520007", dir: "Centro", precio: "$700+", fotos: ["img/hoteles/tlaxiaco/tlax7.jpg", "img/hoteles/tlaxiaco/tlax7.jpg", "img/hoteles/tlaxiaco/tlax7.jpg", "img/hoteles/tlaxiaco/tlax7.jpg"] },
  "Hospedaje La Casita": { mun: "Tlaxiaco", tipo: "Económico", est: 2, cal: 3.9, desc: "Ambiente familiar.", rec: "Trato cálido y un ambiente muy hogareño.", serv: ["WiFi"], tel: "9555520008", dir: "Centro", precio: "$350+", fotos: ["img/hoteles/tlaxiaco/tlax8.jpg", "img/hoteles/tlaxiaco/tlax8.jpg", "img/hoteles/tlaxiaco/tlax8.jpg", "img/hoteles/tlaxiaco/tlax8.jpg"] },
  "Hotel Ejecutivo Tlax": { mun: "Tlaxiaco", tipo: "Ejecutivo", est: 3, cal: 4.0, desc: "Para trabajo.", rec: "Eficiencia y silencio para quienes necesitan trabajar.", serv: ["WiFi", "Parking"], tel: "9555520009", dir: "Calle Principal", precio: "$650+", fotos: ["img/hoteles/tlaxiaco/tlax9.jpg", "img/hoteles/tlaxiaco/tlax9.jpg", "img/hoteles/tlaxiaco/tlax9.jpg", "img/hoteles/tlaxiaco/tlax9.jpg"] },
  "Hotel Real Tlaxiaco": { mun: "Tlaxiaco", tipo: "Tradicional", est: 3, cal: 3.8, desc: "Servicios básicos.", rec: "Cumple con las expectativas para una estancia sencilla.", serv: ["WiFi"], tel: "9555520010", dir: "Centro", precio: "$500+", fotos: ["img/hoteles/tlaxiaco/tlax10.jpg", "img/hoteles/tlaxiaco/tlax10.jpg", "img/hoteles/tlaxiaco/tlax10.jpg", "img/hoteles/tlaxiaco/tlax10.jpg"] },
  
  // Nochixtlán (10)
  "Hotel Fandangos": { mun: "Nochixtlán", tipo: "Tradicional", est: 3, cal: 4.1, desc: "Restaurante y áreas amplias.", rec: "Excelente comida en su restaurante propio.", serv: ["WiFi", "Restaurante", "Parking"], tel: "9515520001", dir: "El Roble #11", precio: "$600+", fotos: ["img/hoteles/nochix/noch1.jpg", "img/hoteles/nochix/noch1.jpg", "img/hoteles/nochix/noch1.jpg", "img/hoteles/nochix/noch1.jpg"] },
  "Hotel Juquila": { mun: "Nochixtlán", tipo: "Económico", est: 2, cal: 3.8, desc: "Práctico y limpio.", rec: "Todo lo que necesitas, sin complicaciones.", serv: ["WiFi"], tel: "9515520002", dir: "Cristóbal Colón", precio: "$450+", fotos: ["img/hoteles/nochix/noch2.jpg", "img/hoteles/nochix/noch2.jpg", "img/hoteles/nochix/noch2.jpg", "img/hoteles/nochix/noch2.jpg"] },
  "Hotel Angie": { mun: "Nochixtlán", tipo: "Tradicional", est: 3, cal: 3.9, desc: "Céntrico.", rec: "Excelente ubicación para moverse por la ciudad.", serv: ["WiFi", "Parking"], tel: "9515520003", dir: "Progreso #28", precio: "$500+", fotos: ["img/hoteles/nochix/noch3.jpg", "img/hoteles/nochix/noch3.jpg", "img/hoteles/nochix/noch3.jpg", "img/hoteles/nochix/noch3.jpg"] },
  "Hotel Rincón de los 3 Ángeles": { mun: "Nochixtlán", tipo: "Familiar", est: 3, cal: 4.0, desc: "Muy tranquilo.", rec: "Silencio y paz garantizados para un buen descanso.", serv: ["WiFi", "Estacionamiento"], tel: "9515520004", dir: "Morelos #31", precio: "$550+", fotos: ["img/hoteles/nochix/noch4.jpg", "img/hoteles/nochix/noch4.jpg", "img/hoteles/nochix/noch4.jpg", "img/hoteles/nochix/noch4.jpg"] },
  "Hotel Merli": { mun: "Nochixtlán", tipo: "Tradicional", est: 2, cal: 3.7, desc: "Ubicación accesible.", rec: "Fácil de llegar y muy cerca de todo.", serv: ["WiFi"], tel: "9515520005", dir: "Caobas", precio: "$400+", fotos: ["img/hoteles/nochix/noch5.jpg", "img/hoteles/nochix/noch5.jpg", "img/hoteles/nochix/noch5.jpg", "img/hoteles/nochix/noch5.jpg"] },
  "Hotel Kristal": { mun: "Nochixtlán", tipo: "Económico", est: 2, cal: 3.6, desc: "Muy económico.", rec: "La opción más amigable para tu bolsillo.", serv: ["WiFi"], tel: "9515520006", dir: "El Calvario", precio: "$350+", fotos: ["img/hoteles/nochix/noch6.jpg", "img/hoteles/nochix/noch6.jpg", "img/hoteles/nochix/noch6.jpg", "img/hoteles/nochix/noch6.jpg"] },
  "Hotel Leilani": { mun: "Nochixtlán", tipo: "Tradicional", est: 3, cal: 3.9, desc: "Atención cálida.", rec: "Huéspedes destacan el buen trato del personal.", serv: ["WiFi"], tel: "9515520007", dir: "Centro", precio: "$450+", fotos: ["img/hoteles/nochix/noch7.jpg", "img/hoteles/nochix/noch7.jpg", "img/hoteles/nochix/noch7.jpg", "img/hoteles/nochix/noch7.jpg"] },
  "Posada Los Dominicos Nch": { mun: "Nochixtlán", tipo: "Económico", est: 2, cal: 3.7, desc: "Servicios básicos.", rec: "Funcional y seguro para una estancia breve.", serv: ["WiFi"], tel: "9515520008", dir: "Centro", precio: "$350+", fotos: ["img/hoteles/nochix/noch8.jpg", "img/hoteles/nochix/noch8.jpg", "img/hoteles/nochix/noch8.jpg", "img/hoteles/nochix/noch8.jpg"] },
  "Hotel San Juan": { mun: "Nochixtlán", tipo: "Tradicional", est: 3, cal: 3.8, desc: "Tradición local.", rec: "Un lugar clásico con ambiente muy tradicional.", serv: ["WiFi", "Parking"], tel: "9515520009", dir: "Av. Principal", precio: "$500+", fotos: ["img/hoteles/nochix/noch9.jpg", "img/hoteles/nochix/noch9.jpg", "img/hoteles/nochix/noch9.jpg", "img/hoteles/nochix/noch9.jpg"] },
  "Hotel Central Nch": { mun: "Nochixtlán", tipo: "Tradicional", est: 3, cal: 3.8, desc: "Corazón de la ciudad.", rec: "Si quieres estar en el centro, esta es tu mejor opción.", serv: ["WiFi"], tel: "9515520010", dir: "Centro", precio: "$550+", fotos: ["img/hoteles/nochix/noch10.jpg", "img/hoteles/nochix/noch10.jpg", "img/hoteles/nochix/noch10.jpg", "img/hoteles/nochix/noch10.jpg"] }
};

function render() {
  renderPorMunicipio('Huajuapan', 'grid-huajuapan');
  renderPorMunicipio('Tlaxiaco', 'grid-tlaxiaco');
  renderPorMunicipio('Nochixtlán', 'grid-nochixtlan');
  const grids = document.querySelectorAll('.grid');
  grids.forEach(grid => {
    let isDown = false, startX, scrollLeft;
    grid.addEventListener('mousedown', (e) => { isDown = true; startX = e.pageX - grid.offsetLeft; scrollLeft = grid.scrollLeft; });
    grid.addEventListener('mouseleave', () => isDown = false);
    grid.addEventListener('mouseup', () => isDown = false);
    grid.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - grid.offsetLeft;
      grid.scrollLeft = scrollLeft - (x - startX) * 2;
    });
  });
}

function renderPorMunicipio(mun, id) {
  const grid = document.getElementById(id);
  if (!grid) return;
  grid.innerHTML = "";
  Object.keys(hoteles).filter(n => hoteles[n].mun === mun).forEach(nombre => {
    const h = hoteles[nombre];
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="img" style="background-image:url('${h.fotos[0]}');"></div>
      <div style="padding: 20px;">
        <span class="hotel-type">${h.tipo}</span>
        <h3 style="margin: 5px 0; color: #fff;">${nombre}</h3>
        <div style="color: #f59e0b; font-size: 0.9rem;">${'★'.repeat(h.est)}</div>
      </div>`;
    card.addEventListener('click', () => openModal(nombre));
    grid.appendChild(card);
  });
}

function openModal(nombre) {
  const h = hoteles[nombre];
  document.getElementById("modalTitle").innerText = nombre;
  document.getElementById("modalStars").innerHTML = `<span style="color:#f59e0b; font-size: 1.2rem;">${'★'.repeat(h.est)}</span> <span style="margin-left: 10px; opacity: 0.7;">${h.cal}/5</span>`;
  document.getElementById("modalType").innerText = h.tipo;
  const mainImg = document.getElementById("mainImg");
  mainImg.innerHTML = ''; 
  mainImg.className = 'gallery-wrapper';
  const big = document.createElement('div');
  big.className = 'main-big-img';
  big.style.backgroundImage = `url('${h.fotos[0]}')`;
  const thumbs = document.createElement('div');
  thumbs.className = 'thumbs-row';
  h.fotos.forEach(f => {
    const t = document.createElement('div');
    t.className = 'thumb';
    t.style.backgroundImage = `url('${f}')`;
    t.onclick = () => big.style.backgroundImage = `url('${f}')`;
    thumbs.appendChild(t);
  });
  mainImg.appendChild(big);
  mainImg.appendChild(thumbs);
  document.getElementById("modalDetails").innerHTML = `
    <div style="margin-bottom: 15px;"><h4 style="color: #c29b7c; margin-bottom: 5px;">💬 Recomendación</h4><p style="font-size: 0.9rem; color: #ccc;">${h.rec}</p></div>
    <div><h4 style="color: #c29b7c; margin-bottom: 5px;">🏗️ Infraestructura</h4><p style="font-size: 0.9rem; color: #ccc;">${h.desc}</p></div>
  `;
  document.getElementById("modalChips").innerHTML = h.serv.map(s => `<span style="background: #202020; padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; color: #aaa; margin: 3px;">${s}</span>`).join('');
  document.getElementById("modalInfo").innerHTML = `
    <div style="background: #111; padding: 15px; border-radius: 10px; border: 1px solid #222; margin-top: 20px; font-size: 0.9rem;">
        <p style="margin-bottom: 5px;">📍 <b>Dir:</b> ${h.dir}</p>
        <p style="margin-bottom: 5px;">📞 <b>Tel:</b> ${h.tel}</p>
        <p style="margin: 0;">💰 <b>Tarifa:</b> <span style="color: #c29b7c; font-weight: bold;">${h.precio}</span></p>
    </div>
    <a href="https://wa.me/52${h.tel.replace(/\s/g, '')}" id="whatsappBtn" target="_blank">Reservar por WhatsApp 💬</a>
  `;
  document.getElementById("hotelModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}
function closeModal(e) { if (e.target.id === 'hotelModal') { document.getElementById("hotelModal").style.display = 'none'; document.body.style.overflow = "auto"; } }
document.addEventListener('DOMContentLoaded', render);