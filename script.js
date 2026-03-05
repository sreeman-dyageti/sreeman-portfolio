// Nav background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(245, 240, 232, 0.92)';
    nav.style.backdropFilter = 'blur(10px)';
    nav.style.borderBottom = '1px solid rgba(0,0,0,0.08)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.borderBottom = 'none';
  }
});
// Hamburger menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
  document.body.classList.toggle('menu-open'); 

  const spans = navToggle.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans.forEach(s => s.style.background = '#f5f0e8'); // white-ish on dark menu
  } else {
    spans.forEach(s => s.style.background = '#1a1a1a'); // dark on light bg
  }

});

// close links
document.querySelectorAll('.nav-close').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});