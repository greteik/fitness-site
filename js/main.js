//слайдер

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 2500);
});


document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('menu');
  
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  function toggleMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  }

  burger.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', toggleMenu);

  const menuItems = document.querySelectorAll('.header__list-link');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 1000) {
        toggleMenu();
      }
    });
  });

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1000) {
      burger.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

document.querySelectorAll('.header__list-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      if (window.innerWidth <= 1000) {
        const burger = document.getElementById('burger');
        const menu = document.getElementById('menu');
        const overlay = document.querySelector('.menu-overlay');
        
        burger.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
});