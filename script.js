  // ── COUNTDOWN ──
  function updateCountdown() {
    const event = new Date('2026-03-02T16:30:00+06:00').getTime();
    const now = Date.now();
    const diff = event - now;
    if (diff <= 0) {
      document.getElementById('countdown').innerHTML = '<div style="color:var(--gold-light);font-size:1.2rem;font-family:Playfair Display,serif">The event has begun! 🎉</div>';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cd-days').textContent = pad(d);
    document.getElementById('cd-hrs').textContent = pad(h);
    document.getElementById('cd-min').textContent = pad(m);
    document.getElementById('cd-sec').textContent = pad(s);
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ── NAV SCROLL ──
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── REVEAL ──
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));

  // ── HAMBURGER ──
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  // ── FAQ ──
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // ── MODAL ──
  function openModal() {
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  }
  function closeModalOutside(e) {
    if (e.target === document.getElementById('modal')) closeModal();
  }
  function submitForm() {
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const role = document.getElementById('reg-role').value;
    if (!name || !email || !role) { alert('Please fill in all required fields.'); return; }
    document.getElementById('form-content').style.display = 'none';
    document.getElementById('success-msg').style.display = 'block';
    setTimeout(closeModal, 4000);
    setTimeout(() => {
      document.getElementById('form-content').style.display = 'block';
      document.getElementById('success-msg').style.display = 'none';
      document.getElementById('reg-name').value = '';
      document.getElementById('reg-email').value = '';
      document.getElementById('reg-id').value = '';
      document.getElementById('reg-role').value = '';
    }, 4200);
  }

  // ── CLOSE MOBILE MENU ON OUTSIDE CLICK ──
  document.addEventListener('click', e => {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('open') && !menu.contains(e.target) && !e.target.closest('.hamburger')) {
      menu.classList.remove('open');
    }

  });
