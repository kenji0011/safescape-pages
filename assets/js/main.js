// SafeScape V2 Showcase - Interactive Scripts & Animations
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Nav Toggle & Animated Hamburger Menu
  const toggleBtn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (toggleBtn && nav) {
    const closeMenu = () => {
      nav.classList.remove('open');
      toggleBtn.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    };

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = nav.classList.toggle('open');
      toggleBtn.classList.toggle('open', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link on mobile
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside of header
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !toggleBtn.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // 2. Sticky Header Elevation on Scroll
  const header = document.querySelector('.site-header');
  const updateHeaderScroll = () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };
  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  // 3. Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentId) {
        link.style.color = 'var(--primary)';
        link.style.fontWeight = '700';
      } else if (!link.classList.contains('nav-btn')) {
        link.style.color = '';
        link.style.fontWeight = '';
      }
    });
  }, { passive: true });

  // 4. Scroll Reveal Animations (IntersectionObserver)
  const revealTargets = document.querySelectorAll(
    '.section-head, .narrow-grid > div:first-child, .person-card, .step-card, .eval-card, .phase-card, .feature-item, .link-card, .note, .phase-detail-header'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    revealTargets.forEach(el => {
      el.classList.add('reveal-init');

      // Stagger child cards inside grids for editorial cascade effect
      const parent = el.parentElement;
      if (parent && (
        parent.classList.contains('team-grid') || 
        parent.classList.contains('methodology-steps') || 
        parent.classList.contains('methodology-eval-grid') || 
        parent.classList.contains('phase-grid') || 
        parent.classList.contains('links-grid')
      )) {
        const index = Array.from(parent.children).indexOf(el);
        if (index >= 0) {
          el.style.transitionDelay = `${(index % 4) * 85}ms`;
        }
      }

      observer.observe(el);
    });
  } else {
    // Graceful fallback for legacy environments
    revealTargets.forEach(el => el.classList.add('reveal-visible'));
  }

  // 5. Image Lightbox Zoom Functionality
  const lightboxModal = document.getElementById('imageLightbox');
  const lightboxImg = lightboxModal ? lightboxModal.querySelector('.lightbox-img') : null;
  const lightboxCaption = lightboxModal ? lightboxModal.querySelector('.lightbox-caption') : null;
  const lightboxClose = lightboxModal ? lightboxModal.querySelector('.lightbox-close') : null;
  const lightboxOverlay = lightboxModal ? lightboxModal.querySelector('.lightbox-overlay') : null;

  if (lightboxModal && lightboxImg) {
    const openLightbox = (src, alt, caption) => {
      lightboxImg.src = src;
      lightboxImg.alt = alt || 'Enlarged system preview';
      if (lightboxCaption) {
        lightboxCaption.textContent = caption || '';
      }
      lightboxModal.classList.add('active');
      lightboxModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
    };

    const closeLightbox = () => {
      lightboxModal.classList.remove('active');
      lightboxModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      setTimeout(() => {
        if (!lightboxModal.classList.contains('active')) {
          lightboxImg.src = '';
        }
      }, 250);
    };

    // Attach click listener to all feature media items
    document.querySelectorAll('.feature-media').forEach(media => {
      media.addEventListener('click', () => {
        const img = media.querySelector('img');
        if (!img) return;
        const captionEl = media.querySelector('.img-caption');
        let captionText = '';
        if (captionEl) {
          const clone = captionEl.cloneNode(true);
          const hint = clone.querySelector('.zoom-hint');
          if (hint) hint.remove();
          captionText = clone.textContent.trim();
        }
        openLightbox(img.src, img.alt, captionText);
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
      });
    }

    if (lightboxOverlay) {
      lightboxOverlay.addEventListener('click', closeLightbox);
    }

    // Close on Escape key press
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
        closeLightbox();
      }
    });
  }
});
