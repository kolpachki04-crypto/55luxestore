// НАСТРОЙКИ TELEGRAM-БОТА
const TELEGRAM_BOT_TOKEN = "8853782545:AAFhTGz7sDzEHLhP81BM8pQNCWehvYm1JF4";
const TELEGRAM_CHAT_ID = "1292647343";

const products = [
  { id: 1, name: "Tissot PRX Powermatic 80", category: "watches", price: 13790, description: "<b>⚙️ Характеристики:</b><br>• Механика с автоподзаводом (Япония)<br>• Корпус и браслет: сталь 316L (40 мм)<br>• Сапфировое стекло, водозащита 100 WR<br>• Активная дата, быстросъемный ремешок<br><br><b>📦 Комплектация:</b><br>Часы, полная фирменная упаковка, документы, гарантия 1 год.<br><br><b>🎁 Подарок:</b> инструмент для браслета, духи и браслет из лавы.", image: "images/tissot.jpg" },
  { id: 2, name: "Casio LTP (Женские)", category: "watches", price: 2508, description: "<b>🎨 Цвета:</b> розовый, зеленый, синий, золотой, черный.<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, дата<br>• Водозащита 5 BAR (50m)<br>• Корпус 28 мм, вес 50 г<br><br><b>📦 Комплектация:</b><br>Фирменная коробка, пакет, гарантия.", image: "images/casio-ltp.jpg" },
  { id: 3, name: "Casio MQ (Мужские)", category: "watches", price: 2831, description: "<b>🎨 Цвета:</b> серебряный, зеленый, мятный.<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, дата<br>• Водозащита 5 BAR (50m)<br>• Застежка-клипса<br>• Корпус 38 мм, вес 65 г", image: "images/casio-mq.jpg" },
  { id: 4, name: "Rolex Datejust Silver", category: "watches", price: 9899, description: "<b>⚙️ Характеристики:</b><br>• Механика с автоподзаводом<br>• Корпус Oyster, браслет Jubilee<br>• Рифленый безель, линза Cyclops", image: "images/rolex-datejust.jpg" },
  { id: 5, name: "Сумка Coach Black Premium", category: "bags", price: 3290, description: "<b>🎨 Цвет:</b> черный оникс<br><br><b>⚙️ Характеристики:</b><br>• Износостойкая кожа + фирменный канвас<br>• Фирменная фурнитура Coach<br>• Регулируемый ремень через плечо", image: "images/coach-bag.jpg" },
  { id: 6, name: "Casio G-Shock Classic Clear", category: "watches", price: 4968, description: "<b>⚙️ Характеристики:</b><br>• Водозащита 20 BAR (200m)<br>• Диаметр 45 мм, толщина 13 мм<br>• 5 будильников, секундомер, таймер", image: "images/gshock-clear.jpg" },
  { id: 7, name: "Cartier Panthere (Женские)", category: "watches", price: 17856, description: "<b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Корпус 27 мм из стали 904L<br>• Сапфировое стекло", image: "images/cartier-panthere.jpg" },
  { id: 8, name: "Casio MTP Collection", category: "watches", price: 2979, description: "<b>🎨 Цвета:</b> черный, белый.<br><br><b>⚙️ Характеристики:</b><br>• Прямоугольный корпус (диагональ 3.9 см)<br>• Кварцевый механизм, дата", image: "images/casio-mtp.jpg" },
  { id: 9, name: "Tissot T-Sport T125 Black", category: "watches", price: 9800, description: "<b>🎨 Цвет:</b> матовый черный<br><br><b>⚙️ Характеристики:</b><br>• Диаметр 45.5 мм, стальной браслет<br>• Кварцевый механизм с хронографом", image: "images/tissot-t125.jpg" },
  { id: 10, name: "Casio Collection MTP", category: "watches", price: 2893, description: "<b>🎨 Цвета:</b> черный, золотой.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Металлический корпус и браслет", image: "images/casio-collection.jpg" },
  { id: 11, name: "Casio MTP Classic", category: "watches", price: 2727, description: "<b>🎨 Цвета:</b> черный, зеленый, синий, серебристый.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Водозащита 5 BAR (50m)", image: "images/casio-mtp-classic.jpg" },
  { id: 12, name: "Женская сумка Coach Trend", category: "bags", price: 1970, description: "<b>🎨 Цвета:</b> кремовый пудинг, сливочный, мокко.<br><br><b>⚙️ Характеристики:</b><br>• Фирменный монограммный принт Coach<br>• Размер: 26 × 17 см", image: "images/coach-trend.jpg" },
  { id: 13, name: "Rolex Day-Date 40 Oyster", category: "watches", price: 21100, description: "<b>⚙️ Характеристики:</b><br>• Японская механика с автоподзаводом<br>• Корпус и браслет: сталь 316L (40 мм)<br>• Сапфировое стекло, рифленый безель", image: "images/rolex-daydate.jpg" },
  { id: 14, name: "Подарочный набор 4 в 1", category: "sets", price: 5386, description: "<b>🎁 Состав набора:</b><br>1. Повседневная сумка Coach<br>2. Картхолдер Goyard<br>3. Часы Casio<br>4. Браслет из лавы", image: "images/gift-set-4in1.jpg" },
  { id: 15, name: "Подарочный набор Casio + Браслет", category: "watches", price: 2568, description: "<b>🎨 Цвета:</b> черный, серебристый, синий.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм Casio", image: "images/casio-bracelet-set.jpg" },
  { id: 16, name: "Hublot Spirit of Big Bang Black", category: "watches", price: 9999, description: "<b>⚙️ Характеристики:</b><br>• Кварцевый механизм, диагональ 48 мм<br>• Бочкообразный корпус, рабочий хронограф", image: "images/hublot-bigbang.jpg" },
  { id: 17, name: "Casio G-Shock GM-2100 Premium", category: "watches", price: 7388, description: "<b>⚙️ Характеристики:</b><br>• Ударопрочный корпус, водонепроницаемость<br>• Кварцевый механизм, LED-подсветка", image: "images/gshock-gm2100.jpg" },
  { id: 18, name: "Casio MTP Standard", category: "watches", price: 2575, description: "<b>🎨 Цвета:</b> черный, золотой, красный.<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, индикация даты", image: "images/casio-mtp-standard.jpg" },
  { id: 19, name: "Casio G-Shock Classic GA-110", category: "watches", price: 6051, description: "<b>🎨 Цвет:</b> черно-золотой<br><br><b>⚙️ Характеристики:</b><br>• Ударопрочный корпус<br>• Водозащита 20 BAR (200m)", image: "images/gshock-ga110.jpg" },
  { id: 20, name: "Подарочный набор Goyard + Casio", category: "sets", price: 6990, description: "<b>🎁 В комплекте:</b> сумка, обложка, картхолдер, часы Casio, цепочка, браслет.", image: "images/goyard-casio-set.jpg" },
  { id: 21, name: "Tissot PRX Green Dial", category: "watches", price: 5926, description: "<b>🎨 Цвет:</b> зеленый циферблат<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, активный календарь", image: "images/tissot-prx-green.jpg" },
  { id: 22, name: "Hublot Classic Fusion Chronograph", category: "watches", price: 11944, description: "<b>🎨 Цвет:</b> черный<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Корпус 45 мм, хронограф", image: "images/hublot-classic-black.jpg" },
  { id: 23, name: "Tissot PRX Silver Dial", category: "watches", price: 7199, description: "<b>🎨 Цвет:</b> серебристый циферблат<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, активный календарь", image: "images/tissot-prx-silver.jpg" },
  { id: 24, name: "Rolex Oyster Perpetual Datejust Black", category: "watches", price: 9899, description: "<b>🎨 Цвет:</b> черный циферблат<br><br><b>⚙️ Характеристики:</b><br>• Механика с автоподзаводом<br>• Водонепроницаемый корпус Oyster", image: "images/rolex-datejust-black.jpg" },
  { id: 25, name: "Hublot Big Bang Rose Gold Skeleton", category: "watches", price: 9999, description: "<b>🎨 Цвет:</b> розовое золото<br><br><b>⚙️ Характеристики:</b><br>• Диаметр 45 мм, скелетонизированный циферблат", image: "images/hublot-bigbang-rosegold.jpg" }
];

let cart = [];

function getCategoryLabel(category) {
  switch (category) {
    case 'watches': return 'Часы';
    case 'bags': return 'Сумки';
    case 'sets': return 'Наборы';
    default: return 'Аксессуары';
  }
}

function renderProducts(items) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.style.opacity='0.2'">
          <div>
            <div class="product-category">${getCategoryLabel(product.category)}</div>
            <h3 class="product-title">${product.name}</h3>
          </div>
          <div class="product-price">${product.price.toLocaleString('ru-RU')} ₽</div>
        </div>
        <div class="card-back">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <button class="add-to-cart-btn" onclick="addToCart(${product.id})">В корзину</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterCategory(category) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  if (window.event && window.event.target) window.event.target.classList.add('active');
  renderProducts(category === 'all' ? products : products.filter(p => p.category === category));
}

function toggleCart() {
  document.getElementById('cartDrawer').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('active');
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  toggleCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
  }
  updateCartUI();
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartCountEl = document.getElementById('cart-count');
  const cartTotalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  cartCountEl.innerText = totalCount;
  cartTotalEl.innerText = `${totalPrice.toLocaleString('ru-RU')} ₽`;
  checkoutBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Корзина пока пуста</p>';
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span>${(item.price * item.quantity).toLocaleString('ru-RU')} ₽</span>
      </div>
      <div class="cart-item-controls">
        <button onclick="updateQuantity(${item.id}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

function openCheckoutModal() {
  toggleCart();
  document.getElementById('checkoutModal').classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.remove('active');
}

async function sendOrderToTelegram(event) {
  event.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  submitBtn.disabled = true;
  submitBtn.innerText = 'Отправка...';

  const name = document.getElementById('userName').value;
  const phone = document.getElementById('userPhone').value;
  const address = document.getElementById('userAddress').value;
  const comment = document.getElementById('userComment').value;

  const totalSum = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const itemsText = cart.map(i => `• ${i.name} (x${i.quantity}) — ${i.price * i.quantity} ₽`).join('\n');

  const message = `🛍️ <b>НОВЫЙ ЗАКАЗ (55 LUXESTORE)</b>\n\n` +
    `👤 <b>Имя:</b> ${name}\n` +
    `📞 <b>Телефон:</b> ${phone}\n` +
    `📍 <b>Адрес/Самовывоз:</b> ${address}\n` +
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
      alert('Спасибо! Ваш заказ успешно оформлен. Мы свяжемся с вами в ближайшее время.');
      cart = [];
      updateCartUI();
      closeCheckoutModal();
      document.getElementById('checkoutForm').reset();
    } else {
      alert('Ошибка при отправке заказа. Проверьте настройки бота.');
    }
  } catch (error) {
    alert('Не удалось связаться с сервером Telegram.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = 'Отправить заказ';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
