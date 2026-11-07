'use strict';

const translations = {
  "skip": "Ir al contenido",
  "brandCaption": "UNA HISTORIA DE CRECIMIENTO",
  "navStory": "Su historia",
  "navPortfolio": "En imágenes",
  "navInterests": "Sus intereses",
  "navFuture": "El futuro",
  "heroEyebrow": "Solicitud de admisión a",
  "heroClass": "Promoción de 2031",
  "intro1": "Juliana, proveniente de un bello país de Latinoamérica llamado Colombia, el país del realismo mágico, comenzó su formación en un colegio católico de hermanas dominicas, en la Ciudadela Educativa La Presentación, en la ciudad de Cali, cursando allí su primaria durante los grados 1 a 5.",
  "intro2": "Posteriormente, nos mudamos a Filadelfia e inició su educación en la escuela local James G. Blaine durante los grados 6 y 7.",
  "intro3": "Actualmente cursa octavo grado en la Spring Garden School, Filadelfia. Su historia reúne fe, servicio, oratoria y el deseo de seguir aprendiendo a través del deporte.",
  "intro4": "Hoy sueña con continuar nuevamente sus estudios bajo los preceptos católicos y con una educación de calidad, pensando en un futuro lleno de fe y comunión, y con la convicción de llegar a una gran universidad.",
  "intro5": "Por esta razón, nos hemos tomado el tiempo de compartir un poco de ella para que conozcan su propósito y sus sueños a través de breves momentos e historias que han hecho de ella la señorita que es hoy.",
  "heroButton": "Descubre sus experiencias",
  "heroMeta": "Grado 8 · Spring Garden School · Filadelfia",
  "storyEyebrow": "Su formación",
  "storyTitle": "De Cali\na Filadelfia.",
  "storyLead": "Su educación en Colombia unió el aprendizaje académico, la fe y el cuidado de los demás.",
  "journeyCali": "Cali, Colombia",
  "journeyPhilly": "Filadelfia, Estados Unidos",
  "journeySchools": "Blaine School → Spring Garden School",
  "rootsSummary": "Sobre su colegio en Colombia",
  "rootsHistory": "La Presentación sigue el legado de Marie Poussepin, fundadora de las Hermanas de la Caridad Dominicas de la Presentación. El colegio en Cali nació de la visión de la hermana Teresa María Acosta Penagos.",
  "rootsSource": "Historia del colegio",
  "portfolioEyebrow": "Su recorrido escolar",
  "portfolioTitle": "Su historia, año a año.",
  "portfolioIntro": "De primer grado hasta hoy. Descubre los recuerdos de cada etapa.",
  "filterAll": "Todos los recuerdos",
  "filterSchool": "Proyectos escolares",
  "filterFaith": "Fe y comunidad",
  "filterMusic": "Música",
  "filterSport": "Deporte",
  "filterFamily": "Familia",
  "closePhoto": "Cerrar",
  "interestsEyebrow": "Sus intereses",
  "interestsTitle": "Seguir jugando.",
  "volleyTitle": "Voleibol",
  "volleyBody": "A Juliana le gustaría tener la oportunidad de seguir jugando voleibol en high school y formar parte del equipo de su escuela.",
  "futureEyebrow": "Su próxima etapa",
  "futureDates": "Escuela secundaria · 2027–2031",
  "futureClose": "Gracias por tomarse el tiempo de conocerla.",
  "print": "Imprimir esta presentación",
  "printPdf": "Abrir PDF para imprimir",
  "footerNote": "Presentación de Juliana Sánchez Murillo, preparada por su familia para el equipo de admisiones de Merion Mercy Academy.",
  "backTop": "Volver al inicio",
  "heroPhotoCaption": "Primera Comunión · Cuarto grado",
  "heroMusicCaption": "Clase de música · Quinto grado"
};

const textNodes = [...document.querySelectorAll('[data-i18n]')];
const english = new Map(textNodes.map(node => [node, node.innerHTML]));
let currentLanguage = 'en';
function setLanguage(language) {
  if (!['en', 'es'].includes(language)) return;
  currentLanguage = language;
  for (const node of textNodes) {
    if (language === 'en') node.innerHTML = english.get(node);
    else if (translations[node.dataset.i18n] !== undefined) {
      node.replaceChildren();
      translations[node.dataset.i18n].split('\n').forEach((line,index) => {
        if(index) node.append(document.createElement('br'));
        node.append(document.createTextNode(line));
      });
    }
  }
  document.querySelectorAll('[data-alt-en][data-alt-es]').forEach(image => image.alt = language === 'es' ? image.dataset.altEs : image.dataset.altEn);
  document.querySelector('#print-pdf').href = `./juliana-introduction-${language}.pdf`;
  document.documentElement.lang = language;
  document.title = language === 'es' ? 'Juliana Sánchez Murillo · Solicitud a Merion Mercy Academy' : 'Juliana Sánchez Murillo · Merion Mercy Academy Application';
  document.querySelector('meta[name="description"]').content = language === 'es' ? 'Presentación de Juliana Sánchez Murillo, preparada por su familia para el equipo de admisiones de Merion Mercy Academy.' : 'A family introduction to Juliana Sánchez Murillo, prepared for the Merion Mercy Academy admissions team.';
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelector('.brand').setAttribute('aria-label', language === 'es' ? 'Juliana — inicio' : 'Juliana — home');
  document.querySelector('#main-nav').setAttribute('aria-label', language === 'es' ? 'Navegación principal' : 'Main navigation');
  document.querySelector('.language-switch').setAttribute('aria-label', language === 'es' ? 'Idioma' : 'Language');
  updateMenuLabel();
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
const menuToggle = document.querySelector('#menu-toggle');
const mainNav = document.querySelector('#main-nav');
function updateMenuLabel() {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-label', currentLanguage === 'es' ? (open ? 'Cerrar navegación' : 'Abrir navegación') : (open ? 'Close navigation' : 'Open navigation'));
}
function closeMenu() {
  mainNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  updateMenuLabel();
}
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  updateMenuLabel();
});
mainNav.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && mainNav.classList.contains('is-open')) { closeMenu(); menuToggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
document.querySelector('#print-button').addEventListener('click', () => window.print());

/* Visual enhancements: compact header, scroll progress, active section and gentle reveals. */
(() => {
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress');
  let ticking = false;
  function onScroll() {
    ticking = false;
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.setProperty('--progress', max > 0 ? Math.min(1, y / max).toFixed(4) : 0);
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  if (!('IntersectionObserver' in window)) return;

  const navLinks = [...document.querySelectorAll('#main-nav a')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navLinks.forEach(link => { const target = document.querySelector(link.getAttribute('href')); if (target) sectionObserver.observe(target); });
  const home = document.querySelector('#home');
  new IntersectionObserver(entries => { if (entries[0].isIntersecting) navLinks.forEach(link => link.classList.remove('is-active')); }, { rootMargin: '-45% 0px -50% 0px' }).observe(home);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js-reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target;
      element.classList.add('is-visible');
      revealObserver.unobserve(element);
      setTimeout(() => { element.classList.remove('reveal', 'is-visible'); element.style.removeProperty('--reveal-delay'); element.dataset.revealed = ''; }, 1400);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  function register(elements) {
    elements.forEach((element, index) => {
      if (!element || element.classList.contains('reveal') || 'revealed' in element.dataset) return;
      element.classList.add('reveal');
      if (index < 6) element.style.setProperty('--reveal-delay', `${index * 0.08}s`);
      revealObserver.observe(element);
    });
  }
  register([...document.querySelectorAll('.hero-copy > *')]);
  register([document.querySelector('.hero-visual')]);
  register([...document.querySelectorAll('.story, .section-heading, .section-index, .gallery-toolbar, .interest-card, .future-inner')]);
  const grid = document.querySelector('#gallery-grid');
  const registerGallery = () => register([...grid.querySelectorAll('.timeline-grade, .memory-album, .timeline-school-note, .other-memories > *')]);
  new MutationObserver(registerGallery).observe(grid, { childList: true });
  registerGallery();
  window.addEventListener('beforeprint', () => document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible')));
})();
