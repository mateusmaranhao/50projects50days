function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  });
}
initSmoothScroll();

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
    const halfWindow = window.innerHeight * 0.67;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - halfWindow) < 0;

        if(isSectionVisible) {
          section.classList.add('active');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll)
  }
}
initScrollAnimation()