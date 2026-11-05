// Simple, lightweight interactivity for the GitHub Pages site
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const toggleBtn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
      const isExpanded = nav.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking any nav link on mobile
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }

  // Active Link Highlight on Scroll
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
        link.style.color = 'var(--text-main)';
        link.style.fontWeight = '700';
      } else if (!link.classList.contains('nav-btn')) {
        link.style.color = '';
        link.style.fontWeight = '';
      }
    });
  }, { passive: true });

  // Image Lightbox Zoom Functionality
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

