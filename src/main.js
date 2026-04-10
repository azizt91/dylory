import './style.css';

/* ============================================
   DYLORY Parfums — Main JavaScript
   Minimal, no frameworks
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollAnimations();
  initSmoothScroll();
  initNavScrollState();
  initPetalAnimation();
  initCopyrightYear();
});

/* ── Dynamic Copyright Year ── */
function initCopyrightYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ── Mobile Navigation Toggle ── */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const close = document.getElementById('nav-close');
  const menu = document.getElementById('mobile-menu');
  const links = menu ? menu.querySelectorAll('a') : [];

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (close && menu) {
    close.addEventListener('click', () => {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Scroll-Triggered Fade-In ── */
function initScrollAnimations() {
  const sections = document.querySelectorAll('.fade-in-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

/* ── Smooth Scroll for Anchor Links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = document.querySelector('nav')?.offsetHeight || 80;
        const y = target.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

/* ── Nav Compact on Scroll ── */
function initNavScrollState() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 80) {
          nav.classList.add('nav-scrolled');
        } else {
          nav.classList.remove('nav-scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ── Falling Petals (Hero Only) ── */
function initPetalAnimation() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  for (let i = 0; i < 12; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (8 + Math.random() * 8) + 's';
    petal.style.animationDelay = (Math.random() * 10) + 's';
    petal.style.animationName = 'petalFall';
    petal.style.animationIterationCount = 'infinite';
    petal.style.animationTimingFunction = 'linear';
    petal.style.width = (8 + Math.random() * 10) + 'px';
    petal.style.height = (10 + Math.random() * 12) + 'px';
    hero.appendChild(petal);
  }
}
