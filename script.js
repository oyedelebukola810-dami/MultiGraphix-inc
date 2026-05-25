// =====================
// MOBILE MENU TOGGLE
// =====================
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// CLOSE MENU ON LINK CLICK
document.querySelectorAll('#nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// =====================
// NAVBAR SCROLL SHADOW
// =====================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 30px rgba(164, 46, 255, 0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }
});

// =====================
// PORTFOLIO FILTER
// =====================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card[data-category]');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');

      const filter = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// =====================
// SCROLL REVEAL
// =====================
const revealElements = document.querySelectorAll(
  '.service-card, .portfolio-card, .team-card, .vm-card, .stat-card, .pricing-card'
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state
revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =====================
// CONTACT FORM SUBMIT
// =====================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  const submitBtn = contactForm.querySelector('button');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      submitBtn.textContent = 'Message Sent ✓';
      submitBtn.style.background = 'linear-gradient(135deg, #1a7a3a, #25D366)';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 4000);
    });
  }
}

// =====================
// ORDER FORM SUBMIT
// =====================
const orderForm = document.querySelector('.order-form');
if (orderForm) {
  const submitBtn = orderForm.querySelector('button');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      submitBtn.textContent = 'Order Submitted ✓';
      submitBtn.style.background = 'linear-gradient(135deg, #1a7a3a, #25D366)';
      submitBtn.disabled = true;
      setTimeout(() => {
        submitBtn.textContent = 'Submit Order';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
      }, 4000);
    });
  }
}