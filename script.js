// REGISTER PLUGINS
gsap.registerPlugin(ScrollTrigger);

// HERO LOAD ANIMATION
// This runs the moment the page loads
const heroTl = gsap.timeline({ delay: 0.2 });

heroTl
  // eyebrow fades in
  .from('.hero-eyebrow', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: 'power3.out'
  })
  //each title line slides up one by one
  .from('.hero-title .line', {
    opacity: 0,
    y: '100%',
    duration: 0.8,
    stagger: 0.12,       
    ease: 'power4.out'
  }, '-=0.3')            
  //subtitle fades in
  .from('.hero-sub', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.3')
  // button pops in
  .from('.hero-cta', {
    opacity: 0,
    y: 20,
    scale: 0.95,
    duration: 0.5,
    ease: 'back.out(1.7)'  
  }, '-=0.2');


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
    spans.forEach(s => s.style.background = '#f5f0e8'); 
  } else {
    spans.forEach(s => s.style.background = '#1a1a1a'); 
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