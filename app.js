'use strict';

const listings = [
  {
    id: 1,
    title: 'Двустаен апартамент',
    type: 'Апартамент',
    category: 'Апартаменти',
    condition: 'Висок',
    deal: 'sale',
    city: 'София',
    district: 'Манастирски ливади',
    price: 129900,
    area: 65,
    rooms: '2 стаи',
    baths: '1 баня',
    floor: '4 от 8',
    year: '2018',
    image: 'apartment-sofia2.jpg',
    tag: 'Топ оферта',
    tagColor: 'green',
    lat: 42.659,
    lng: 23.293,
    desc: 'Светъл двустаен апартамент с модерна дневна, функционална кухня и отлична локация близо до транспорт и магазини.',
    features: ['Южно изложение', 'Подземно паркомясто', 'Обзаведен', 'Тераса', 'Асансьор', 'Контрол на достъпа']
  },
  {
    id: 2,
    title: 'Тристаен апартамент',
    type: 'Апартамент',
    category: 'Апартаменти',
    condition: 'Ново строителство',
    deal: 'sale',
    city: 'Пловдив',
    district: 'Кършияка',
    price: 185000,
    area: 102,
    rooms: '3 стаи',
    baths: '2 бани',
    floor: '3 от 7',
    year: '2024',
    image: 'apartment-plovdiv.jpg',
    tag: 'Ново',
    tagColor: 'blue',
    lat: 42.157,
    lng: 24.744,
    desc: 'Нов тристаен апартамент в спокойна жилищна сграда с качествени общи части и бърз достъп до центъра.',
    features: ['Ново строителство', 'Висок клас дограма', 'Газифицирана сграда', 'Паркомясто', 'Тиха улица', 'Готов за нанасяне']
  },
  {
    id: 3,
    title: 'Къща с басейн',
    type: 'Къща',
    category: 'Къщи',
    condition: 'Лукс',
    deal: 'sale',
    city: 'Варна',
    district: 'м-т Евксиноград',
    price: 249900,
    area: 180,
    rooms: '4 стаи',
    baths: '3 бани',
    floor: '2 етажа',
    year: '2019',
    image: 'apartment-varna.jpg',
    tag: 'Ексклузивно',
    tagColor: 'gold',
    lat: 43.236,
    lng: 28.011,
    desc: 'Представителна къща с двор, басейн и усещане за уединение, разположена в предпочитан район край Варна.',
    features: ['Басейн', 'Озеленен двор', 'Гараж', 'Морска близост', 'Камина', 'Система за сигурност']
  },
  {
    id: 4,
    title: 'Тристаен апартамент',
    type: 'Апартамент',
    category: 'Апартаменти',
    condition: 'Висок',
    deal: 'rent',
    city: 'Бургас',
    district: 'Център',
    price: 650,
    area: 110,
    rooms: '3 стаи',
    baths: '2 бани',
    floor: '5 от 9',
    year: '2020',
    image: 'apartment-burgas.jpg',
    tag: 'Под наем',
    tagColor: 'purple',
    lat: 42.505,
    lng: 27.462,
    desc: 'Напълно обзаведен апартамент под наем в централната част на Бургас, подходящ за семейство или професионалисти.',
    features: ['Обзаведен', 'Климатизация', 'Близо до море', 'Асансьор', 'Тераса', 'Готов за нанасяне']
  },
  {
    id: 5,
    title: 'Двустаен апартамент',
    type: 'Апартамент',
    category: 'Апартаменти',
    condition: 'Висок',
    deal: 'sale',
    city: 'Русе',
    district: 'Здравец',
    price: 95000,
    area: 58,
    rooms: '2 стаи',
    baths: '1 баня',
    floor: '2 от 6',
    year: '2016',
    image: 'apartment-sofia.jpg',
    tag: 'Топ оферта',
    tagColor: 'green',
    lat: 43.856,
    lng: 25.97,
    desc: 'Практичен двустаен апартамент с отлична поддръжка и удобна връзка с основни градски точки.',
    features: ['Обзаведен', 'Тиха локация', 'Изолация', 'Паркинг около блока', 'Контрол на достъпа', 'Добро разпределение']
  },
  {
    id: 6,
    title: 'Четиристаен апартамент',
    type: 'Апартамент',
    category: 'Апартаменти',
    condition: 'Ново строителство',
    deal: 'sale',
    city: 'София',
    district: 'Овча купел',
    price: 210000,
    area: 128,
    rooms: '4 стаи',
    baths: '2 бани',
    floor: '6 от 9',
    year: '2025',
    image: 'house-sofia.jpg',
    tag: 'Ново',
    tagColor: 'blue',
    lat: 42.678,
    lng: 23.261,
    desc: 'Просторен четиристаен имот в нова сграда с панорамни гледки и функционално семейно разпределение.',
    features: ['Нова сграда', 'Панорама', 'Две тераси', 'Паркомясто', 'Асансьор', 'Високи тавани']
  },
  {
    id: 7,
    title: 'Офис в бизнес сграда',
    type: 'Офис',
    category: 'Офиси',
    condition: 'Висок',
    deal: 'rent',
    city: 'София',
    district: 'Лозенец',
    price: 550,
    area: 75,
    rooms: 'open space',
    baths: '—',
    floor: '2 от 6',
    year: '2021',
    image: 'apartment-plovdiv.jpg',
    tag: 'Под наем',
    tagColor: 'purple',
    lat: 42.672,
    lng: 23.323,
    desc: 'Представителен офис в поддържана бизнес сграда, подходящ за малък екип, студио или консултантски офис.',
    features: ['Рецепция', 'Климатизация', 'Интернет окабеляване', 'Метро наблизо', 'Контрол на достъпа', 'Гъвкав договор']
  },
  {
    id: 8,
    title: 'Къща с двор',
    type: 'Къща',
    category: 'Къщи',
    condition: 'Лукс',
    deal: 'sale',
    city: 'Пловдив',
    district: 'Беломорски',
    price: 315000,
    area: 200,
    rooms: '5 стаи',
    baths: '3 бани',
    floor: '2 етажа',
    year: '2015',
    image: 'house-plovdiv.jpg',
    tag: 'Ексклузивно',
    tagColor: 'gold',
    lat: 42.107,
    lng: 24.723,
    desc: 'Семейна къща с уютен двор, просторни помещения и добра връзка с Пловдив.',
    features: ['Двор', 'Гараж', 'Барбекю зона', 'Камина', 'Тиха улица', 'Готова документация']
  },
  {
    id: 9,
    title: 'Двустаен апартамент',
    type: 'Апартамент',
    category: 'Апартаменти',
    condition: 'Ново строителство',
    deal: 'sale',
    city: 'Варна',
    district: 'Владислав Варненчик',
    price: 140000,
    area: 70,
    rooms: '2 стаи',
    baths: '1 баня',
    floor: '5 от 8',
    year: '2023',
    image: 'house-sozopol.jpg',
    tag: 'Ново',
    tagColor: 'blue',
    lat: 43.25,
    lng: 27.863,
    desc: 'Нов апартамент с балансирано разпределение, подходящ както за живеене, така и за инвестиция.',
    features: ['Нова сграда', 'Акт 16', 'Тераса', 'Асансьор', 'Паркомясто опция', 'Добра инвестиция']
  },
  {
    id: 10,
    title: 'Парцел за строеж',
    type: 'Парцел',
    category: 'Парцели',
    condition: 'Регулация',
    deal: 'sale',
    city: 'Благоевград',
    district: 'м-т Бодрост',
    price: 75000,
    area: 600,
    rooms: '—',
    baths: '—',
    floor: '—',
    year: '—',
    image: 'house-bansko.jpg',
    tag: 'Топ оферта',
    tagColor: 'green',
    lat: 42.02,
    lng: 23.095,
    desc: 'Урегулиран парцел с добър достъп и потенциал за еднофамилна къща или малка вилна сграда.',
    features: ['Регулация', 'Ток наблизо', 'Вода наблизо', 'Път', 'Планинска гледка', 'Инвестиционен потенциал']
  },
  {
    id: 11,
    title: 'Магазин / Търговско помещение',
    type: 'Магазин',
    category: 'Магазини',
    condition: 'Висок',
    deal: 'rent',
    city: 'Пловдив',
    district: 'Център',
    price: 1200,
    area: 95,
    rooms: 'търговска зала',
    baths: '—',
    floor: 'партер',
    year: '2020',
    image: 'apartment-burgas.jpg',
    tag: 'Под наем',
    tagColor: 'purple',
    lat: 42.142,
    lng: 24.749,
    desc: 'Търговско помещение на комуникативна локация с витрина и възможност за различни дейности.',
    features: ['Витрина', 'Партер', 'Склад', 'Климатизация', 'Човекопоток', 'Гъвкаво разпределение']
  },
  {
    id: 12,
    title: 'Тристаен апартамент',
    type: 'Апартамент',
    category: 'Апартаменти',
    condition: 'Ново строителство',
    deal: 'sale',
    city: 'София',
    district: 'Малинова долина',
    price: 168000,
    area: 96,
    rooms: '3 стаи',
    baths: '2 бани',
    floor: '4 от 7',
    year: '2024',
    image: 'house-sofia.jpg',
    tag: 'Ново',
    tagColor: 'blue',
    lat: 42.643,
    lng: 23.343,
    desc: 'Функционален тристаен апартамент в бързо развиващ се район с лесен достъп до Околовръстен път.',
    features: ['Ново строителство', 'Юг/изток', 'Паркомясто', 'Тераса', 'Асансьор', 'Подходящ за инвестиция']
  },
  {
    id: 13,
    title: 'Гараж в жилищна сграда',
    type: 'Гараж',
    category: 'Гаражи',
    condition: 'Висок',
    deal: 'sale',
    city: 'София',
    district: 'Люлин',
    price: 24000,
    area: 22,
    rooms: '—',
    baths: '—',
    floor: 'сутерен',
    year: '2017',
    image: 'apartment-sofia.jpg',
    tag: 'Ново',
    tagColor: 'blue',
    lat: 42.716,
    lng: 23.254,
    desc: 'Сух и удобен гараж с добра маневреност и сигурен достъп.',
    features: ['Сигурен достъп', 'Сухо помещение', 'Широка врата', 'Лесна маневра', 'Ток', 'Подходящ и за склад']
  },
  {
    id: 14,
    title: 'Къща край морето',
    type: 'Къща',
    category: 'Къщи',
    condition: 'Лукс',
    deal: 'sale',
    city: 'Созопол',
    district: 'Буджака',
    price: 390000,
    area: 220,
    rooms: '5 стаи',
    baths: '3 бани',
    floor: '2 етажа',
    year: '2021',
    image: 'house-sozopol.jpg',
    tag: 'Ексклузивно',
    tagColor: 'gold',
    lat: 42.41,
    lng: 27.71,
    desc: 'Модерна къща с морска атмосфера, просторни дневни зони и отлично поддържан двор.',
    features: ['Морска гледка', 'Двор', 'Гараж', 'Луксозни довършителни работи', 'Климатизация', 'Голяма тераса']
  },
  {
    id: 15,
    title: 'Къща във Велико Търново',
    type: 'Къща',
    category: 'Къщи',
    condition: 'Старо строителство',
    deal: 'sale',
    city: 'Велико Търново',
    district: 'Асенов',
    price: 155000,
    area: 145,
    rooms: '4 стаи',
    baths: '2 бани',
    floor: '2 етажа',
    year: '2008',
    image: 'house-veliko-turnovo.jpg',
    tag: 'Топ оферта',
    tagColor: 'green',
    lat: 43.084,
    lng: 25.64,
    desc: 'Поддържана къща в район с характер и прекрасна гледка към стария град.',
    features: ['Панорама', 'Двор', 'Камина', 'Тераса', 'Тиха улица', 'Подходяща за гости']
  }
];

const cityStats = [
  { city: 'София', count: 1524, lat: 42.6977, lng: 23.3219 },
  { city: 'Пловдив', count: 812, lat: 42.1354, lng: 24.7453 },
  { city: 'Варна', count: 645, lat: 43.2141, lng: 27.9147 },
  { city: 'Бургас', count: 512, lat: 42.5048, lng: 27.4626 },
  { city: 'Русе', count: 312, lat: 43.8356, lng: 25.9657 },
  { city: 'Плевен', count: 245, lat: 43.417, lng: 24.6067 },
  { city: 'Стара Загора', count: 234, lat: 42.4258, lng: 25.6345 },
  { city: 'Благоевград', count: 178, lat: 42.0209, lng: 23.0943 },
  { city: 'Велико Търново', count: 156, lat: 43.0757, lng: 25.6172 },
  { city: 'Банско', count: 126, lat: 41.8383, lng: 23.4885 },
  { city: 'Созопол', count: 84, lat: 42.4173, lng: 27.6962 }
];

const cityTargets = Object.fromEntries(cityStats.map(item => [item.city, item.count]));
const money = new Intl.NumberFormat('de-DE');

let favorites = new Set(JSON.parse(localStorage.getItem('homeplace:favs') || '[]'));
let currentPage = 1;

const $ = id => document.getElementById(id);

function safeText(value) {
  return String(value ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[ch]));
}

function num(value) {
  const n = Number(String(value || '').replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : null;
}

function priceLabel(item) {
  return item.deal === 'rent'
    ? `€${money.format(item.price)} / месец`
    : `€${money.format(item.price)}`;
}

function updateFavCount() {
  document.querySelectorAll('#favCount, #mobileFavCount').forEach(el => {
    el.textContent = favorites.size;
  });
}

function toggleFavorite(e) {
  e.preventDefault();
  e.stopPropagation();

  const id = Number(e.currentTarget.dataset.fav);

  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }

  localStorage.setItem('homeplace:favs', JSON.stringify([...favorites]));
  updateFavCount();

  document.querySelectorAll(`[data-fav="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', favorites.has(id));

    if (btn.classList.contains('outline-btn')) {
      btn.textContent = favorites.has(id)
        ? '♥ Добавено в любими'
        : '♡ Добави в любими';
    } else {
      btn.textContent = favorites.has(id) ? '♥' : '♡';
    }
  });
}

function initMobileMenu() {
  const open = $('menuOpen') || $('menuBtn');
  const close = $('menuClose');
  const menu = $('mobileMenu') || $('mainNav');
  const backdrop = $('mobileBackdrop');

  if (!open || !menu) return;

  const isAside = menu.classList.contains('mobile-menu');

  const set = state => {
    if (isAside) {
      menu.classList.toggle('open', state);
      menu.setAttribute('aria-hidden', String(!state));

      if (backdrop) {
        backdrop.hidden = !state;
      }

      document.body.classList.toggle('menu-open', state);
    } else {
      menu.classList.toggle('open', state);
    }

    open.setAttribute('aria-expanded', String(state));
  };

  open.addEventListener('click', () => set(true));
  close?.addEventListener('click', () => set(false));
  backdrop?.addEventListener('click', () => set(false));

  menu.querySelectorAll('a').forEach(el => {
    el.addEventListener('click', () => set(false));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      set(false);
    }
  });
}

function currentFilters() {
  return {
    city: $('cityFilter')?.value || 'all',
    type: $('typeFilter')?.value || 'all',
    deal: $('dealFilter')?.value || 'all',
    minPrice: num($('minPrice')?.value),
    maxPrice: num($('maxPrice')?.value),
    minArea: num($('minArea')?.value),
    maxArea: num($('maxArea')?.value)
  };
}

function activeConditions() {
  return [...document.querySelectorAll('.conditionFilter:checked')].map(i => i.value);
}

function hasNonCityFilters() {
  const f = currentFilters();

  return f.type !== 'all'
    || f.deal !== 'all'
    || f.minPrice !== null
    || f.maxPrice !== null
    || f.minArea !== null
    || f.maxArea !== null
    || activeConditions().length > 0;
}

function filterListings(ignoreCity = false) {
  const f = currentFilters();
  const conditions = activeConditions();

  return listings.filter(i =>
    (ignoreCity || f.city === 'all' || i.city === f.city)
    && (f.type === 'all' || i.type === f.type)
    && (f.deal === 'all' || i.deal === f.deal)
    && (f.minPrice === null || i.price >= f.minPrice)
    && (f.maxPrice === null || i.price <= f.maxPrice)
    && (f.minArea === null || i.area >= f.minArea)
    && (f.maxArea === null || i.area <= f.maxArea)
    && (conditions.length === 0 || conditions.includes(i.condition))
  );
}

function sortedList(list) {
  const sort = $('sortFilter')?.value || 'new';
  const arr = [...list];

  if (sort === 'priceAsc') {
    arr.sort((a, b) => a.price - b.price);
  }

  if (sort === 'priceDesc') {
    arr.sort((a, b) => b.price - a.price);
  }

  if (sort === 'areaDesc') {
    arr.sort((a, b) => b.area - a.area);
  }

  return arr;
}

function uniqueCities() {
  return [...new Set([...cityStats.map(i => i.city), ...listings.map(i => i.city)])];
}

function populateCities() {
  const cityFilter = $('cityFilter');

  if (!cityFilter) return;

  uniqueCities().forEach(city => {
    if (![...cityFilter.options].some(o => o.value === city)) {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      cityFilter.appendChild(option);
    }
  });
}

function cityCountFor(city, list = listings) {
  const active = list.filter(i => i.city === city).length;

  if (!hasNonCityFilters()) {
    return cityTargets[city] || active;
  }

  return active;
}

function renderCityList(list) {
  const cityList = $('cityList');

  if (!cityList) return;

  const cities = ['София', 'Пловдив', 'Варна', 'Бургас', 'Русе'];

  cityList.innerHTML = cities.map(city => `
    <button class="city-row ${currentFilters().city === city ? 'active' : ''}" type="button" data-city="${safeText(city)}">
      <span>${safeText(city)}</span>
      <b>${cityCountFor(city, list)}</b>
    </button>
  `).join('');

  cityList.querySelectorAll('.city-row').forEach(btn => {
    btn.addEventListener('click', () => {
      if ($('cityFilter')) {
        $('cityFilter').value = btn.dataset.city;
      }

      applyFilters(true);
    });
  });
}

function renderCategories() {
  const target = $('categoryList');

  if (!target) return;

  const cats = ['Всички имоти', 'Апартаменти', 'Къщи', 'Парцели', 'Офиси', 'Магазини', 'Гаражи'];

  target.innerHTML = cats.map(cat => {
    const count = cat === 'Всички имоти'
      ? listings.length
      : listings.filter(i => i.category === cat).length;

    return `
      <button type="button" class="category-row" data-cat="${safeText(cat)}">
        <span>${safeText(cat)}</span>
        <b>${count}</b>
      </button>
    `;
  }).join('');

  target.querySelectorAll('.category-row').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;

      const typeMap = {
        'Апартаменти': 'Апартамент',
        'Къщи': 'Къща',
        'Парцели': 'Парцел',
        'Офиси': 'Офис',
        'Магазини': 'Магазин',
        'Гаражи': 'Гараж'
      };

      if ($('typeFilter')) {
        $('typeFilter').value = cat === 'Всички имоти' ? 'all' : typeMap[cat];
      }

      currentPage = 1;
      applyFilters(false);
    });
  });
}

function card(item) {
  return `
    <article class="property-card">
      <a href="property-${item.id}.html" aria-label="Виж ${safeText(item.title)}">
        <div class="property-media">
          <img src="assets/${safeText(item.image)}" alt="${safeText(item.title)} в ${safeText(item.city)}" loading="lazy">
          <span class="tag ${item.tagColor}">${safeText(item.tag)}</span>
        </div>

        <div class="property-body">
          <div class="price">${priceLabel(item)}</div>
          <h3>${safeText(item.title)}</h3>
          <p class="location">⌖ ${safeText(item.city)}, ${safeText(item.district)}</p>

          <div class="meta">
            <span>${item.area} m²</span>
            <span>${safeText(item.rooms)}</span>
            <span>${safeText(item.baths)}</span>
          </div>
        </div>
      </a>

      <button class="fav ${favorites.has(item.id) ? 'active' : ''}" aria-label="Добави в любими" data-fav="${item.id}">
        ${favorites.has(item.id) ? '♥' : '♡'}
      </button>
    </article>
  `;
}

function renderPagination(total, pageSize) {
  const target = $('propertyPagination');

  if (!target) return;

  const pages = Math.max(1, Math.ceil(total / pageSize));

  if (currentPage > pages) {
    currentPage = pages;
  }

  if (pages <= 1) {
    target.innerHTML = '';
    return;
  }

  const btn = (p, label = p, disabled = false) => `
    <button type="button" data-page="${p}" class="${p === currentPage ? 'active' : ''}" ${disabled ? 'disabled' : ''}>
      ${label}
    </button>
  `;

  target.innerHTML =
    btn(Math.max(1, currentPage - 1), '«', currentPage === 1)
    + Array.from({ length: pages }, (_, i) => btn(i + 1)).join('')
    + btn(Math.min(pages, currentPage + 1), '»', currentPage === pages);

  target.querySelectorAll('button:not([disabled])').forEach(b => {
    b.addEventListener('click', () => {
      currentPage = Number(b.dataset.page);
      renderCurrent();

      $('properties')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}

function renderCards(list) {
  const grid = $('propertyGrid');

  if (!grid) return;

  const output = sortedList(list);
  let visible = output;

  const limit = Number(grid.dataset.limit || 0);
  const paginate = grid.dataset.paginate === 'true';

  if (paginate) {
    const pageSize = Number(grid.dataset.pageSize || 8);
    const pages = Math.max(1, Math.ceil(output.length / pageSize));

    if (currentPage > pages) {
      currentPage = pages;
    }

    visible = output.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    renderPagination(output.length, pageSize);
  } else if (limit) {
    visible = output.slice(0, limit);
  }

  grid.innerHTML = visible.map(card).join('');

  grid.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', toggleFavorite);
  });

  const empty = $('emptyState');

  if (empty) {
    empty.style.display = list.length ? 'none' : 'block';
  }

  const count = $('resultCount');

  if (count) {
    count.textContent = list.length === listings.length
      ? `Намерени имоти: ${money.format(Object.values(cityTargets).reduce((a, b) => a + b, 0))} имота`
      : `Намерени имоти: ${list.length}`;
  }
}

const mapPositions = {
  'София': [26, 61],
  'Пловдив': [44, 72],
  'Варна': [78, 41],
  'Бургас': [76, 63],
  'Русе': [57, 22],
  'Плевен': [42, 35],
  'Стара Загора': [58, 61],
  'Благоевград': [23, 75],
  'Велико Търново': [57, 45],
  'Банско': [31, 84],
  'Созопол': [80, 70]
};

function getMapCities() {
  if (!hasNonCityFilters()) {
    return cityStats.map(c => ({ ...c }));
  }

  const source = filterListings(true);
  const grouped = {};

  source.forEach(i => {
    if (!grouped[i.city]) {
      grouped[i.city] = {
        city: i.city,
        count: 0
      };
    }

    grouped[i.city].count += 1;
  });

  return Object.values(grouped);
}

function renderMap() {
  const el = $('map');

  if (!el) return;

  const cities = getMapCities();

  el.classList.add('static-map');

  el.innerHTML = `
    <div class="map-shape" aria-hidden="true"></div>
    <span class="map-label north">Дунав</span>
    <span class="map-label sea">Черно море</span>
    ${cities.map(item => {
      const pos = mapPositions[item.city] || [50, 50];

      return `
        <button type="button" class="static-pin" style="left:${pos[0]}%;top:${pos[1]}%" data-city="${safeText(item.city)}">
          <b data-count="${item.count}">${item.count}</b>
          <span>${safeText(item.city)}</span>
        </button>
      `;
    }).join('')}
  `;

  el.querySelectorAll('.static-pin').forEach(pin => {
    pin.addEventListener('click', () => {
      if ($('cityFilter')) {
        $('cityFilter').value = pin.dataset.city;
      }

      applyFilters(true);
    });
  });
}

function renderCurrent() {
  const list = filterListings();
  const cityNavList = filterListings(true);

  renderCards(list);
  renderCityList(cityNavList);
  renderMap();
}

function applyFilters(scroll = false) {
  renderCurrent();

  if (scroll) {
    $('properties')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function initFilters() {
  if (!$('filtersForm')) return;

  populateCities();

  $('filtersForm').addEventListener('submit', e => {
    e.preventDefault();
    currentPage = 1;
    applyFilters(true);
  });

  ['cityFilter', 'typeFilter', 'dealFilter', 'sortFilter'].forEach(id => {
    $(id)?.addEventListener('change', () => {
      currentPage = 1;
      applyFilters(false);
    });
  });

  document.querySelectorAll('.conditionFilter').forEach(ch => {
    ch.addEventListener('change', () => {
      currentPage = 1;
      applyFilters(false);
    });
  });

  $('resetFilters')?.addEventListener('click', () => {
    $('filtersForm').reset();
    document.querySelectorAll('.conditionFilter').forEach(ch => ch.checked = false);
    currentPage = 1;
    applyFilters(false);
  });

  $('clearSideFilters')?.addEventListener('click', () => {
    $('filtersForm')?.reset();
    document.querySelectorAll('.conditionFilter').forEach(ch => ch.checked = false);
    currentPage = 1;
    applyFilters(false);
  });

  $('allCitiesBtn')?.addEventListener('click', () => {
    if ($('cityFilter')) {
      $('cityFilter').value = 'all';
    }

    currentPage = 1;
    applyFilters(true);
  });

  $('saveSearch')?.addEventListener('click', () => {
    alert('Търсенето е запазено локално за демо целите на проекта.');
  });

  renderCategories();
}

function initFavButtons() {
  document.querySelectorAll('[data-fav]').forEach(btn => {
    btn.addEventListener('click', toggleFavorite);
  });
}

function initFavoriteNav() {
  document.querySelectorAll('#favoritesBtn, #mobileFavoritesBtn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      location.href = 'index.html?favorites=true#properties';
    });
  });
}

function showFavoritesFromUrl() {
  const params = new URLSearchParams(window.location.search);

  if (params.get('favorites') !== 'true') {
    return false;
  }

  if (!$('propertyGrid')) {
    return false;
  }

  const favs = listings.filter(item => favorites.has(item.id));

  currentPage = 1;
  renderCards(favs);

  const count = $('resultCount');

  if (count) {
    count.textContent = favs.length
      ? `Любими имоти: ${favs.length}`
      : 'Все още нямате любими имоти.';
  }

  const title = document.querySelector('#properties .section-head h2');

  if (title) {
    title.textContent = 'Любими имоти';
  }

  const subtitle = document.querySelector('#properties .section-head p');

  if (subtitle) {
    subtitle.textContent = favs.length
      ? 'Това са имотите, които сте добавили в любими.'
      : 'Натиснете сърцето върху имот, за да го добавите тук.';
  }

  setTimeout(() => {
    $('properties')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 100);

  return true;
}

function initCounters() {
  if ($('totalListings')) {
    $('totalListings').textContent = money.format(Object.values(cityTargets).reduce((a, b) => a + b, 0));
  }
}

function initContactForm() {
  const form = $('contactForm');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    if ($('formNote')) {
      $('formNote').hidden = false;
    }

    form.reset();
  });
}

function createSubmitPropertyModal() {
  if ($('submitPropertyModal')) return;

  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-backdrop" id="submitPropertyModal" hidden>
      <section class="property-modal" role="dialog" aria-modal="true" aria-labelledby="submitPropertyTitle">
        <button class="modal-close" type="button" data-close-submit-property aria-label="Затвори">×</button>

        <div class="modal-head">
          <span>＋</span>
          <div>
            <h2 id="submitPropertyTitle">Добави имот</h2>
            <p>Попълнете данните. След изпращане колега ще се свърже с вас за одобрение на имота в сайта и системата на агенцията.</p>
          </div>
        </div>

        <form id="submitPropertyForm" class="submit-property-form">
          <div class="form-grid">
            <label>
              <span>Име и фамилия*</span>
              <input name="name" required placeholder="Вашето име">
            </label>

            <label>
              <span>Телефон*</span>
              <input name="phone" required inputmode="tel" placeholder="+359 ...">
            </label>

            <label>
              <span>Имейл</span>
              <input name="email" type="email" placeholder="name@email.com">
            </label>

            <label>
              <span>Град*</span>
              <input name="city" required placeholder="София, Пловдив...">
            </label>

            <label>
              <span>Тип имот*</span>
              <select name="type" required>
                <option value="">Изберете</option>
                <option>Апартамент</option>
                <option>Къща</option>
                <option>Офис</option>
                <option>Парцел</option>
                <option>Магазин</option>
                <option>Гараж</option>
              </select>
            </label>

            <label>
              <span>Сделка*</span>
              <select name="deal" required>
                <option value="">Изберете</option>
                <option>Продажба</option>
                <option>Под наем</option>
              </select>
            </label>

            <label>
              <span>Цена</span>
              <input name="price" inputmode="numeric" placeholder="Напр. 185000">
            </label>

            <label>
              <span>Квадратура</span>
              <input name="area" inputmode="numeric" placeholder="Напр. 96">
            </label>
          </div>

          <label>
            <span>Информация за имота*</span>
            <textarea name="message" required placeholder="Адрес/район, етаж, състояние, удобства, допълнителни детайли..."></textarea>
          </label>

          <label class="upload-box">
            <span>Снимки на имота</span>
            <input id="propertyPhotos" name="photos" type="file" accept="image/*" multiple>
            <small>Може да добавите няколко снимки. В демо версията файловете не се качват към сървър.</small>
            <div id="photoPreview" class="photo-preview"></div>
          </label>

          <button class="primary-btn full" type="submit">Изпрати имота за одобрение</button>

          <p class="form-note" id="submitPropertyNote" hidden>
            Благодарим! Колега ще се свърже с вас относно одобрението на вашия имот в сайта и в системата на агенцията.
          </p>
        </form>
      </section>
    </div>
  `);
}

function initSubmitPropertyModal() {
  createSubmitPropertyModal();

  const modal = $('submitPropertyModal');
  const form = $('submitPropertyForm');
  const preview = $('photoPreview');
  const openers = document.querySelectorAll('[data-open-submit-property]');

  if (!modal || !form) return;

  const closeMobileMenu = () => {
    const menu = $('mobileMenu');
    const backdrop = $('mobileBackdrop');
    const menuOpen = $('menuOpen');

    menu?.classList.remove('open');

    if (menu) {
      menu.setAttribute('aria-hidden', 'true');
    }

    if (backdrop) {
      backdrop.hidden = true;
    }

    if (menuOpen) {
      menuOpen.setAttribute('aria-expanded', 'false');
    }

    document.body.classList.remove('menu-open');
  };

  const open = e => {
    e?.preventDefault();

    closeMobileMenu();

    if ($('submitPropertyNote')) {
      $('submitPropertyNote').hidden = true;
    }

    const submitButton = form.querySelector('button[type="submit"]');

    if (submitButton) {
      submitButton.textContent = 'Изпрати имота за одобрение';
      submitButton.disabled = false;
    }

    modal.hidden = false;
    document.body.classList.add('modal-open');

    setTimeout(() => {
      modal.querySelector('input')?.focus();
    }, 20);
  };

  const close = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  };

  openers.forEach(btn => {
    btn.addEventListener('click', open);
  });

  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.matches('[data-close-submit-property]')) {
      close();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) {
      close();
    }
  });

  $('propertyPhotos')?.addEventListener('change', e => {
    if (!preview) return;

    preview.innerHTML = '';

    [...e.target.files].slice(0, 6).forEach(file => {
      const img = document.createElement('img');

      img.alt = file.name;
      img.src = URL.createObjectURL(file);

      preview.appendChild(img);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    if ($('submitPropertyNote')) {
      $('submitPropertyNote').hidden = false;
    }

    const submitButton = form.querySelector('button[type="submit"]');

    if (submitButton) {
      submitButton.textContent = 'Изпратено успешно';
      submitButton.disabled = true;
    }

    if (preview) {
      preview.innerHTML = '';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  updateFavCount();
  initFavoriteNav();
  initFilters();

  if (!showFavoritesFromUrl()) {
    renderCurrent();
  }

  initFavButtons();
  initContactForm();
  initCounters();
  initSubmitPropertyModal();
});

