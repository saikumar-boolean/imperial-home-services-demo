const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.getElementById('serviceForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('formStatus').textContent = 'Demo captured. For production, we will route this lead to email, SMS, CRM, or scheduling.';
  event.currentTarget.reset();
});
