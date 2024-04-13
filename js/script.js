// SCROLL ANIMATION
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      let offsetTop = targetElement.offsetTop;
      
      if (targetId === "section-0") {
        offsetTop = 0; 
      } else {
        const offset = -3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        offsetTop += offset;
      }
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

//POPUP

const projets = document.querySelectorAll('.projet');

projets.forEach(projet => {
    projet.addEventListener('click', () => {
        const popupId = projet.dataset.popupId;
        const popup = document.getElementById(popupId);
        popup.classList.add('active');
    });
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('popupCover') || event.target.classList.contains('popupClose')) {
        const popupContainer = event.target.closest('.popupContainer');
        popupContainer.classList.remove('active');
    }
});