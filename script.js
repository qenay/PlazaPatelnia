// Plaża Patelnia — wspólny JS

// Navbar tła po scrollu
const nav = document.querySelector('.nav');
const onScroll = () => {
  if (window.scrollY > 40) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menu mobilne
const burger = document.querySelector('.nav-burger');
const mobile = document.querySelector('.mobile-menu');
if (burger && mobile) {
  burger.addEventListener('click', () => {
    mobile.classList.toggle('open');
    document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

// Reveal przy scrollu
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Mapa — kalkulator dojazdu i nawigacja
document.querySelectorAll('.map-modern').forEach(map => {
  const dest = map.dataset.dest || 'Plaża Patelnia, Płazowa 2, 09-520 Łąck';
  const form = map.querySelector('.route-form');
  const input = map.querySelector('.route-form input');
  const result = map.querySelector('.route-result');

  const openRoute = (origin) => {
    const url = 'https://www.google.com/maps/dir/?api=1'
      + '&origin=' + encodeURIComponent(origin)
      + '&destination=' + encodeURIComponent(dest)
      + '&travelmode=driving';
    window.open(url, '_blank', 'noopener');
    if (result) {
      result.innerHTML = 'Otwieramy Google Maps z trasą z <strong>' + origin
        + '</strong> — tam zobaczysz dokładny czas i odległość dojazdu. '
        + '<a href="' + url + '" target="_blank" rel="noopener">Otwórz ponownie →</a>';
      result.classList.add('show');
    }
  };

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = (input.value || '').trim();
      if (v) openRoute(v);
      else { input.focus(); }
    });
  }
  map.querySelectorAll('.route-quick button').forEach(b => {
    b.addEventListener('click', () => { if (input) input.value = b.dataset.from; openRoute(b.dataset.from); });
  });
  const navBtn = map.querySelector('[data-nav]');
  if (navBtn) navBtn.href = 'https://www.google.com/maps/dir/?api=1&destination='
    + encodeURIComponent(dest) + '&travelmode=driving&dir_action=navigate';
  const openBtn = map.querySelector('[data-open]');
  if (openBtn) openBtn.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(dest);
});

// Lightbox galerii
const lb = document.querySelector('.lightbox');
if (lb) {
  const lbImg = lb.querySelector('img');
  document.querySelectorAll('[data-lightbox] img, .gallery img').forEach(img => {
    img.addEventListener('click', () => { lbImg.src = img.src; lb.classList.add('open'); });
  });
  const close = () => lb.classList.remove('open');
  lb.addEventListener('click', (e) => { if (e.target === lb || e.target.classList.contains('lb-close')) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}
