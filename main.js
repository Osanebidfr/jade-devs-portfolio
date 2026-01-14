// small script: dynamic year + minimal nav fallback
document.addEventListener('DOMContentLoaded', ()=> {
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // mobile nav toggle (if you later add a hamburger)
  const nav = document.querySelector('.nav');
  if(nav && window.innerWidth < 980){
    // ensure nav is visible as a simple fallback on small screens in case CSS hides it
    nav.style.display = 'none';
  }
});
