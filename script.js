const products = [
  {
    id: 1,
    name: "Tissot PRX Powermatic 80",
    category: "watches",
    price: 13790,
    description: "<b>⚙️ Характеристики:</b><br>• Механика с автоподзаводом (Япония)<br>• Корпус и браслет: сталь 316L (40 мм)<br>• Сапфировое стекло, водозащита 100 WR<br>• Активная дата, быстросъемный ремешок<br><br><b>📦 Комплектация:</b><br>Часы, полная фирменная упаковка, документы, гарантия 1 год.<br><br><b>🎁 Подарок:</b> инструмент для браслета, духи и браслет из лавы.",
    image: "tissot.jpg"
  },
  {
    id: 2,
    name: "Casio LTP (Женские)",
    category: "watches",
    price: 2508,
    description: "<b>🎨 Цвета:</b> розовый, зеленый, синий, золотой, черный.<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, дата<br>• Водозащита 5 BAR (50m)<br>• Корпус 28 мм, вес 50 г<br><br><b>📦 Комплектация:</b><br>Фирменная коробка, пакет, гарантия.<br><br><b>✨ Подходит:</b> идеальный подарок на каждый день.",
    image: "casio-ltp.jpg"
  },
  {
    id: 3,
    name: "Casio MQ (Мужские)",
    category: "watches",
    price: 2831,
    description: "<b>🎨 Цвета:</b> серебряный, зеленый, мятный.<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, дата<br>• Водозащита 5 BAR (50m)<br>• Застежка-клипса<br>• Корпус 38 мм, вес 65 г<br><br><b>📦 Комплектация:</b><br>Фирменная коробка, пакет, гарантия от магазина.",
    image: "casio-mq.jpg"
  },
  {
    id: 4,
    name: "Rolex Datejust Silver",
    category: "watches",
    price: 9899,
    description: "<b>⚙️ Характеристики:</b><br>• Механика с автоподзаводом<br>• Корпус Oyster, браслет Jubilee<br>• Рифленый безель, линза Cyclops<br>• Светонакопительные стрелки<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка, паспорт, пакет, гарантия 1 год.<br><br><b>🎁 Подарок:</b> инструмент для браслета.",
    image: "rolex-datejust.jpg"
  },
  {
    id: 5,
    name: "Сумка Coach Black Premium",
    category: "bags",
    price: 3290,
    description: "<b>🎨 Цвет:</b> черный оникс<br><br><b>⚙️ Характеристики:</b><br>• Износостойкая кожа + фирменный канвас<br>• Фирменная фурнитура Coach<br>• Регулируемый ремень через плечо<br>• Размер: 25 × 16 × 7 см<br><br><b>📦 Комплектация:</b><br>Сумка, фирменный пыльник.<br><br><b>🎁 Подарок:</b> картхолдер.",
    image: "coach-bag.jpg"
  },
  {
    id: 6,
    name: "Casio G-Shock Classic Clear",
    category: "watches",
    price: 4968,
    description: "<b>⚙️ Характеристики:</b><br>• Водозащита 20 BAR (200m)<br>• Диаметр 45 мм, толщина 13 мм<br>• 5 будильников, секундомер, таймер<br>• Подсветка, мировое время, дата/день<br><br><b>📦 Комплектация:</b><br>Часы, коробка, инструкция, пакет, гарантия 1 год.",
    image: "gshock-clear.jpg"
  },
  {
    id: 7,
    name: "Cartier Panthere (Женские)",
    category: "watches",
    price: 17856,
    description: "<b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Корпус 27 мм из стали 904L<br>• Сапфировое стекло, водозащита<br>• Циферблат с римскими цифрами<br><br><b>📦 Комплектация:</b><br>Шкатулка Cartier, сертификат, буклет, фирменный красная упаковка, гарантия 1 год.",
    image: "cartier-panthere.jpg"
  },
  {
    id: 8,
    name: "Casio MTP Collection",
    category: "watches",
    price: 2979,
    description: "<b>🎨 Цвета:</b> черный, белый.<br><br><b>⚙️ Характеристики:</b><br>• Прямоугольный корпус (диагональ 3.9 см)<br>• Кварцевый механизм, дата<br>• Водозащита WR 50M, застежка-клипса<br><br><b>📦 Комплектация:</b><br>Фирменная коробка CASIO, пакет, гарантия 1 год.",
    image: "casio-mtp.jpg"
  },
  {
    id: 9,
    name: "Tissot T-Sport T125 Black",
    category: "watches",
    price: 9800,
    description: "<b>🎨 Цвет:</b> матовый черный<br><br><b>⚙️ Характеристики:</b><br>• Диаметр 45.5 мм, стальной браслет<br>• Кварцевый механизм с хронографом<br>• Активное окошко даты, минеральное стекло<br>• Водонепроницаемость<br><br><b>📦 Комплектация:</b><br>Часы, полная люксовая упаковка Tissot, чехол, гарантия.",
    image: "tissot-t125.jpg"
  },
  {
    id: 10,
    name: "Casio Collection MTP",
    category: "watches",
    price: 2893,
    description: "<b>🎨 Цвета:</b> черный, золотой.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Металлический корпус и браслет<br>• Индикация даты, водозащита 3 BAR (30m)<br><br><b>📦 Комплектация:</b><br>Фирменная коробка Casio, подарочный пакет, гарантия от магазина.",
    image: "casio-collection.jpg"
  },
  {
    id: 11,
    name: "Casio MTP Classic",
    category: "watches",
    price: 2727,
    description: "<b>🎨 Цвета:</b> черный, зеленый, синий, серебристый.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Отображение текущей даты<br>• Водозащита 5 BAR (50m)<br><br><b>📦 Комплектация:</b><br>Часы, фирменная подарочная коробка, гарантия от магазина.",
    image: "casio-mtp-classic.jpg"
  },
  {
    id: 12,
    name: "Женская сумка Coach Trend",
    category: "bags",
    price: 1970,
    description: "<b>🎨 Цвета:</b> кремовый пудинг, сливочный, мокко, трюфельный.<br><br><b>⚙️ Характеристики:</b><br>• Фирменный монограммный принт Coach<br>• Размер: 26 × 17 см<br>• Можно носить как клатч или через плечо<br><br><b>📦 Комплектация:</b><br>Сумка, 2 ремешка (короткий и длинный), пыльник.<br><br><b>🎁 Подарок:</b> картхолдер.",
    image: "coach-trend.jpg"
  },
  {
    id: 13,
    name: "Rolex Day-Date 40 Oyster",
    category: "watches",
    price: 21100,
    description: "<b>⚙️ Характеристики:</b><br>• Японская механика с автоподзаводом<br>• Корпус и браслет: сталь 316L (40 мм)<br>• Сапфировое стекло, рифленый безель<br>• Активная дата и день недели<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка Rolex, документы/паспорт, пакет, гарантия 1 год.",
    image: "rolex-daydate.jpg"
  },
  {
    id: 14,
    name: "Подарочный набор 4 в 1 (Coach, Goyard, Casio)",
    category: "sets",
    price: 5386,
    description: "<b>🎁 Состав набора:</b><br>1. Повседневная сумка Coach (с пыльником)<br>2. Компактный картхолдер Goyard (в коробке)<br>3. Классические часы Casio (в коробке)<br>4. Стильный браслет из вулканической лавы<br><br><b>✨ Оформление:</b> единая черно-графитовая гамма, полностью готов к вручению.",
    image: "gift-set-4in1.jpg"
  },
  {
    id: 15,
    name: "Подарочный набор Casio + Браслет",
    category: "watches",
    price: 2568,
    description: "<b>🎨 Цвета:</b> черный, серебристый, синий, зеленый.<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм Casio<br>• Корпус из нержавеющей стали<br><br><b>📦 Комплектация:</b><br>Часы Casio, стильный мужской браслет, фирменная подарочная коробка.",
    image: "casio-bracelet-set.jpg"
  },
  {
    id: 16,
    name: "Hublot Spirit of Big Bang Black",
    category: "watches",
    price: 9999,
    description: "<b>⚙️ Характеристики:</b><br>• Кварцевый механизм, диагональ 48 мм<br>• Бочкообразный корпус, рабочий хронограф<br>• Окно даты, минеральное стекло<br>• Ремешок: эко-кожа + каучук<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка Hublot, документы, пакет, гарантия 1 год.",
    image: "hublot-bigbang.jpg"
  },
  {
    id: 17,
    name: "Casio G-Shock GM-2100 Premium",
    category: "watches",
    price: 7388,
    description: "<b>⚙️ Характеристики:</b><br>• Ударопрочный корпус, водонепроницаемость<br>• Кварцевый механизм, LED-подсветка<br>• Автокалендарь, секундомер, таймер, 5 будильников, мировое время<br>• Аналогово-цифровой циферблат<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка, инструкция, пакет, гарантия 1 год.",
    image: "gshock-gm2100.jpg"
  },
  {
    id: 18,
    name: "Casio MTP Standard",
    category: "watches",
    price: 2575,
    description: "<b>🎨 Цвета:</b> черный, золотой, красный, желтый.<br><br><b>⚙️ Характеристики:</b><br>• Точный кварцевый механизм, индикация даты<br>• Водозащита 5 BAR (50m)<br>• Классический тонкий корпус с металлическим браслетом<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка, гарантия от магазина.",
    image: "casio-mtp-standard.jpg"
  },
  {
    id: 19,
    name: "Casio G-Shock Classic GA-110 Black-Gold",
    category: "watches",
    price: 6051,
    description: "<b>🎨 Цвет:</b> черно-золотой<br><br><b>⚙️ Характеристики:</b><br>• Ударопрочный корпус (диаметр 47 мм, вес 62 г)<br>• Водозащита 20 BAR (200m)<br>• Регулируемая LED-подсветка, мировое время, 5 будильников, секундомер, таймер<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка, пакет, инструкция, документы.",
    image: "gshock-ga110.jpg"
  },
  {
    id: 20,
    name: "Подарочный набор Goyard + Casio (Премиум)",
    category: "sets",
    price: 6990,
    description: "<b>🎁 Доступные варианты наборов:</b><br>1. <b>«Полный фарш» (6 990 ₽):</b> сумка, обложка, картхолдер, часы Casio, цепочка, браслет.<br>2. <b>«Сбалансированный» (6 450 ₽):</b> сумка, обложка, часы Casio, цепочка, браслет.<br>3. <b>«Базовый» (5 888 ₽):</b> сумка, картхолдер, часы Casio, цепочка, браслет.<br>4. <b>«Минимум» (4 790 ₽):</b> сумка, картхолдер, часы Casio.<br><br><b>✨ Оформление:</b> фирменный принт Goyard, единый стиль, подарочная коробка.",
    image: "goyard-casio-set.jpg"
  },
  {
    id: 21,
    name: "Tissot PRX Green Dial",
    category: "watches",
    price: 5926,
    description: "<b>🎨 Цвет:</b> зеленый циферблат<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, активный календарь<br>• Корпус (40 мм, 105 г) и браслет из нержавеющей стали<br>• Застежка-бабочка<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка Tissot, пакет, чехол, документы, гарантия 1 год.<br><br><b>🎁 Подарки:</b> стильный мужской браслет и шпилькосъемник.",
    image: "tissot-prx-green.jpg"
  },
  {
    id: 22,
    name: "Hublot Classic Fusion Chronograph Black",
    category: "watches",
    price: 11944,
    description: "<b>🎨 Цвет:</b> насыщенный черный<br><br><b>⚙️ Характеристики:</b><br>• Японский кварцевый механизм<br>• Корпус 45 мм, устойчивое к царапинам сапфировое стекло<br>• Функция хронографа, активная дата<br>• Кожаный ремешок высокого качества<br><br><b>📦 Комплектация:</b><br>Часы, двойная подарочная коробка Hublot, пакет, гарантийная карта, гарантия 1 год.",
    image: "hublot-classic-black.jpg"
  },
  {
    id: 23,
    name: "Tissot PRX Silver Dial",
    category: "watches",
    price: 7199,
    description: "<b>🎨 Цвет:</b> серебристый циферблат<br><br><b>⚙️ Характеристики:</b><br>• Кварцевый механизм, активное окно даты<br>• Корпус (38 мм, 105 г) и интегрированный браслет из нержавеющей стали<br>• Удобная застежка-бабочка<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка Tissot, пакет, чехол, документы.<br><br><b>🎁 Подарки:</b> стильный браслет и шпилькосъемник.",
    image: "tissot-prx-silver.jpg"
  },
  {
    id: 24,
    name: "Rolex Oyster Perpetual Datejust Black Mechanical",
    category: "watches",
    price: 9899,
    description: "<b>🎨 Цвет:</b> черный циферблат<br><br><b>⚙️ Характеристики:</b><br>• Механический механизм с автоподзаводом<br>• Водонепроницаемый корпус Oyster, стальной браслет<br>• Рифленый безель, линза Cyclops, светонакопительные стрелки<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка Rolex, документы/паспорт, гарантийные буклеты, пакет, гарантия от магазина.<br><br><b>🎁 Подарок:</b> инструмент для регулировки браслета.",
    image: "rolex-datejust-black.jpg"
  },
  {
    id: 25,
    name: "Hublot Big Bang Rose Gold Skeleton",
    category: "watches",
    price: 9999,
    description: "<b>🎨 Цвет:</b> розовое золото / черный безель<br><br><b>⚙️ Характеристики:</b><br>• Диаметр корпуса 45 мм, скелетонизированный циферблат<br>• Комфортный черный каучуковый ремешок<br>• Надежная застежка, премиальный дизайн<br><br><b>📦 Комплектация:</b><br>Часы, фирменная коробка Hublot, пакет, документы / гарантийная карта, гарантия от магазина.",
    image: "hublot-bigbang-rosegold.jpg"
  }
];

let cartCount = 0;

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
    const categoryName = getCategoryLabel(product.category);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="card-inner">
        <!-- Лицевая сторона -->
        <div class="card-front">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <div>
            <div class="product-category">${categoryName}</div>
            <h3 class="product-title">${product.name}</h3>
          </div>
          <div class="product-price">${product.price.toLocaleString('ru-RU')} ₽</div>
        </div>
        <!-- Обратная сторона -->
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
  
  if (window.event && window.event.target) {
    window.event.target.classList.add('active');
  }

  if (category === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
}

function addToCart(productId) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});