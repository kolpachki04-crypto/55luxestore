// НАСТРОЙКИ TELEGRAM-БОТА
const TELEGRAM_BOT_TOKEN = "8853782545:AAFMVGtoAGeYBkX-cOg5AaxHdOJKO-x5tzQ";
const TELEGRAM_CHAT_ID = "1292647343";

const products = [
  { id: 1, name: "Tissot PRX Powermatic 80", category: "watches", price: 13790, description: "<b>⚙️ Характеристики:</b><br>• Механика с автоподзаводом (Япония)<br>• Корпус и браслет: сталь 316L (40 мм)<br>• Сапфировое стекло, водозащита 100 WR<br>• Активная дата, быстросъемный ремешок<br><br><b>📦 Комплектация:</b><br>Часы, полная фирменная упаковка, документы, гарантия 1 год.<br><br><b>🎁 Подарок:</b> инструмент для браслета, духи и браслет из лавы.", image: "" },
  { id: 2, name: "Casio LTP (Женские)", category: "watches", price: 2508, description: "<b>🎨 Цвета:</b> розовый, зеленый, синий, золотой, черный.<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, дата<br>• Водозащита 5 BAR (50m)<br>• Корпус 28 мм, вес 50 г<br><br><b>📦 Комплектация:</b><br>Фирменная коробка, пакет, гарантия.", image: "" },
  { id: 3, name: "Casio MQ (Мужские)", category: "watches", price: 2831, description: "<b>🎨 Цвета:</b> серебряный, зеленый, мятный.<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, дата<br>• Водозащита 5 BAR (50m)<br>• Застежка-клипса<br>• Корпус 38 мм, вес 65 г", image: "" },
  { id: 4, name: "Rolex Datejust Silver", category: "watches", price: 9899, description: "<b>⚙️ Характеристики:</b><br>• Механика с автоподзаводом<br>• Корпус Oyster, браслет Jubilee<br>• Рифленый безель, линза Cyclops", image: "" },
  { id: 5, name: "Сумка Coach Black Premium", category: "bags", price: 3290, description: "<b>🎨 Цвет:</b> черный оникс<br><br><b>⚙️ Характеристики:</b><br>• Износостойкая кожа + фирменный канвас<br>• Фирменная фурнитура Coach<br>• Регулируемый ремень через плечо", image: "" },
  { id: 6, name: "Casio G-Shock Classic Clear", category: "watches", price: 4968, description: "<b>⚙️ Характеристики:</b><br>• Водозащита 20 BAR (200m)<br>• Диаметр 45 мм, толщина 13 мм<br>• 5 будильников, секундомер, таймер", image: "" },
  { id: 7, name: "Женские часы Cartier Panthere (Полный набор)", category: "watches", price: 17856, description: "<b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Корпус 27 мм из стали 904L<br>• Сапфировое стекло<br><br><b>📦 В полном наборе:</b><br>• Фирменная коробка Cartier<br>• Пакет и документы<br>• Гарантийная карта", image: "images/cartier-panthere-fullset.jpg" },
  { id: 8, name: "Casio MTP Collection", category: "watches", price: 2979, description: "<b>🎨 Цвета:</b> черный, белый.<br><br><b>⚙️ Характеристики:</b><br>• Прямоугольный корпус (диагональ 3.9 см)<br>• Кварцевый механизм, дата", image: "" },
  { id: 9, name: "Tissot T-Sport T125 Black", category: "watches", price: 9800, description: "<b>🎨 Цвет:</b> матовый черный<br><br><b>⚙️ Характеристики:</b><br>• Диаметр 45.5 мм, стальной браслет<br>• Кварцевый механизм с хронографом", image: "" },
  { id: 10, name: "Casio Collection MTP", category: "watches", price: 2893, description: "<b>🎨 Цвета:</b> черный, золотой.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Металлический корпус и браслет", image: "" },
  { id: 11, name: "Casio MTP Classic", category: "watches", price: 2727, description: "<b>🎨 Цвета:</b> черный, зеленый, синий, серебристый.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Водозащита 5 BAR (50m)", image: "" },
  { id: 12, name: "Женская сумка Coach Trend", category: "bags", price: 1970, description: "<b>🎨 Цвета:</b> кремовый пудинг, сливочный, мокко.<br><br><b>⚙️ Характеристики:</b><br>• Фирменный монограммный принт Coach<br>• Размер: 26 × 17 см", image: "" },
  { id: 13, name: "Rolex Day-Date 40 Oyster", category: "watches", price: 21100, description: "<b>⚙️ Характеристики:</b><br>• Японская механика с автоподзаводом<br>• Корпус и браслет: сталь 316L (40 мм)<br>• Сапфировое стекло, рифленый безель", image: "" },
  { id: 14, name: "Подарочный набор 4 в 1", category: "sets", price: 5386, description: "<b>🎁 Состав набора:</b><br>1. Повседневная сумка Coach<br>2. Картхолдер Goyard<br>3. Часы Casio<br>4. Браслет из лавы", image: "" },
  { id: 15, name: "Подарочный набор Casio + Браслет", category: "watches", price: 2568, description: "<b>🎨 Цвета:</b> черный, серебристый, синий.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм Casio", image: "" },
  { id: 16, name: "Hublot Spirit of Big Bang Black", category: "watches", price: 9999, description: "<b>⚙️ Характеристики:</b><br>• Кварцевый механизм, диагональ 48 мм<br>• Бочкообразный корпус, рабочий хронограф", image: "" },
  { id: 17, name: "Casio G-Shock GM-2100 Premium", category: "watches", price: 7388, description: "<b>⚙️ Характеристики:</b><br>• Ударопрочный корпус, водонепроницаемость<br>• Кварцевый механизм, LED-подсветка", image: "" },
  { id: 18, name: "Casio MTP Standard", category: "watches", price: 2575, description: "<b>🎨 Цвета:</b> черный, золотой, красный.<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, индикация даты", image: "" },
  { id: 19, name: "Casio G-Shock Classic GA-110", category: "watches", price: 6051, description: "<b>🎨 Цвет:</b> черно-золотой<br><br><b>⚙️ Характеристики:</b><br>• Ударопрочный корпус<br>• Водозащита 20 BAR (200m)", image: "images/gshock-ga110.jpg" },
  { id: 20, name: "Подарочный набор Goyard + Casio", category: "sets", price: 6990, description: "<b>🎁 В комплекте:</b> сумка, обложка, картхолдер, часы Casio, цепочка, браслет.", image: "" },
  { id: 21, name: "Tissot PRX Green Dial", category: "watches", price: 5926, description: "<b>🎨 Цвет:</b> зеленый циферблат<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, активный календарь", image: "" },
  { id: 22, name: "Hublot Classic Fusion Chronograph", category: "watches", price: 11944, description: "<b>🎨 Цвет:</b> черный<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Корпус 45 мм, хронограф", image: "" },
  { id: 23, name: "Tissot PRX Silver Dial", category: "watches", price: 7199, description: "<b>🎨 Цвет:</b> серебристый циферблат<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, активный календарь", image: "" },
  { id: 24, name: "Rolex Oyster Perpetual Datejust Black", category: "watches", price: 9899, description: "<b>🎨 Цвет:</b> черный циферблат<br><br><b>⚙️ Характеристики:</b><br>• Механика с автоподзаводом<br>• Водонепроницаемый корпус Oyster", image: "" },
  { id: 25, name: "Hublot Big Bang Rose Gold Skeleton", category: "watches", price: 9999, description: "<b>🎨 Цвет:</b> розовое золото<br><br><b>⚙️ Характеристики:</b><br>• Диаметр 45 мм, скелетонизированный циферблат", image: "" }
];

let cart = JSON.parse(localStorage.getItem('luxestore_cart')) || [];
let currentCategory = 'all';

function handleImageError(img) {
  img.onerror = null;
  img.src = 'images/no-image.png';
}

function saveCart() {
  localStorage.setItem('luxestore_cart', JSON.stringify(cart));
}

function getCategoryLabel(category) {
  switch (category) {
    case 'watches': return 'Часы';
    case 'bags': return 'Сумки';
    case 'sets': return 'Наборы';
    default: return 'Аксессуары';
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function renderProducts(items) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    const imageSrc = product.image ? product.image : 'images/no-image.png';

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${imageSrc}" alt="${product.name}" class="product-image" onerror="handleImageError(this)">
          <div>
            <div class="product-category">${getCategoryLabel(product.category)}</div>
            <h3 class="product-title">${product.name}</h3>
          </div>
          <div class="product-price">${product.price.toLocaleString('ru-RU')} ₽</div>
        </div>
        <div class="card-back">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="card-back-buttons">
            <button class="details-btn" onclick="openProductModal(${product.id}, event)">Подробнее</button>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id}, event)">В корзину</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(category, event) {
  currentCategory = category;
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  
  filterProducts();
}

function filterProducts() {
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const sortValue = sortSelect ? sortSelect.value : 'default';

  let filtered = [...products];

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (query) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
  }

  if (sortValue === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

function addToCart(productId, event) {
  if (event) event.stopPropagation();

  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`«${product.name}» добавлен в корзину!`, 'success');
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
  }
  saveCart();
  updateCartUI();
}

function toggleAddressField(isDelivery) {
  const addressGroup = document.getElementById('addressGroup');
  const addressInput = document.getElementById('userAddress');
  if (addressGroup && addressInput) {
    if (isDelivery) {
      addressGroup.style.display = 'block';
      addressInput.required = true;
    } else {
      addressGroup.style.display = 'none';
      addressInput.required = false;
    }
  }
}

function updateCartUI() {
  const cartCountEl = document.getElementById('cart-count');
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountEl) cartCountEl.innerText = totalCount;

  const cartPageContainer = document.getElementById('cartPageItems');
  const cartPageTotal = document.getElementById('cartPageTotal');

  if (cartPageContainer && cartPageTotal) {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartPageTotal.innerText = `${totalPrice.toLocaleString('ru-RU')} ₽`;

    if (cart.length === 0) {
      cartPageContainer.innerHTML = '<p class="empty-cart-msg">Ваша корзина пуста</p>';
      return;
    }

    cartPageContainer.innerHTML = cart.map(item => {
      const imageSrc = item.image ? item.image : 'images/no-image.png';
      return `
        <div class="cart-page-item">
          <img src="${imageSrc}" alt="${item.name}" class="cart-item-img" onerror="handleImageError(this)">
          <div class="cart-page-item-info">
            <h4>${item.name}</h4>
            <span>${(item.price * item.quantity).toLocaleString('ru-RU')} ₽</span>
          </div>
          <div class="cart-item-controls">
            <button onclick="updateQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }
}

function openProductModal(productId, event) {
  if (event) event.stopPropagation();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const modalBody = document.getElementById('modalBody');
  if (!modal || !modalBody) return;

  const imageSrc = product.image ? product.image : 'images/no-image.png';

  modalBody.innerHTML = `
    <div class="modal-grid">
      <img src="${imageSrc}" alt="${product.name}" class="modal-img" onerror="handleImageError(this)">
      <div class="modal-info">
        <span class="modal-category">${getCategoryLabel(product.category)}</span>
        <h2>${product.name}</h2>
        <div class="modal-price">${product.price.toLocaleString('ru-RU')} ₽</div>
        <div class="modal-desc">${product.description}</div>
        <button class="add-to-cart-btn" onclick="addToCart(${product.id}); closeProductModal();">Добавить в корзину</button>
      </div>
    </div>
  `;

  modal.style.display = 'block';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('productModal');
  if (event && event.target === modal) {
    closeProductModal();
  }
};

function initPhoneMask() {
  const phoneInput = document.getElementById('userPhone');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('7') || value.startsWith('8')) {
      value = value.substring(1);
    }

    let formatted = '+7 ';
    if (value.length > 0) formatted += '(' + value.substring(0, 3);
    if (value.length >= 4) formatted += ') ' + value.substring(3, 6);
    if (value.length >= 7) formatted += '-' + value.substring(6, 8);
    if (value.length >= 9) formatted += '-' + value.substring(8, 10);

    e.target.value = formatted;
  });
}

async function sendOrderToTelegram(event) {
  event.preventDefault();

  if (cart.length === 0) {
    showToast('Ваша корзина пуста!', 'error');
    return;
  }

  const phoneInput = document.getElementById('userPhone');
  if (phoneInput && phoneInput.value.replace(/\D/g, '').length < 11) {
    showToast('Введите полный номер телефона!', 'error');
    return;
  }

  const submitBtn = document.getElementById('submitBtn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerText = 'Отправка...';
  }

  const name = document.getElementById('userName').value;
  const phone = phoneInput.value;
  const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
  const address = deliveryType === 'Доставка' ? document.getElementById('userAddress').value : 'Самовывоз';
  const comment = document.getElementById('userComment').value;

  const totalSum = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const itemsText = cart.map(i => `• ${i.name} (x${i.quantity}) — ${i.price * i.quantity} ₽`).join('\n');

  const message = `🛍️ <b>НОВЫЙ ЗАКАЗ (55 LUXESTORE)</b>\n\n` +
    `👤 <b>Имя:</b> ${name}\n` +
    `📞 <b>Телефон:</b> ${phone}\n` +
    `🚚 <b>Тип:</b> ${deliveryType}\n` +
    `📍 <b>Адрес/Пункт:</b> ${address}\n` +
    (comment ? `💬 <b>Комментарий:</b> ${comment}\n\n` : '\n') +
    `📦 <b>Состав заказа:</b>\n${itemsText}\n\n` +
    `💰 <b>Итоговая сумма:</b> ${totalSum.toLocaleString('ru-RU')} ₽`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (response.ok) {
      showToast('Спасибо! Заказ оформлен.', 'success');
      cart = [];
      saveCart();
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      showToast('Ошибка при отправке заказа.', 'error');
    }
  } catch (error) {
    showToast('Ошибка соединения с сервером.', 'error');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerText = 'Подтвердить заказ';
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("productGrid")) {
    renderProducts(products);
  }
  
  updateCartUI();
  initPhoneMask();
});
