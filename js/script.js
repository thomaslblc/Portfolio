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

// Sélectionnez toutes les divs avec la classe "projet"
const projets = document.querySelectorAll('.projet');

// Pour chaque div "projet", ajoutez un écouteur d'événements au clic
projets.forEach(projet => {
    projet.addEventListener('click', () => {
        // Obtenez la valeur de l'attribut de données "data-popup-id"
        const popupId = projet.dataset.popupId;
        // Sélectionnez la div de la popup correspondante
        const popup = document.getElementById(popupId);
        // Ajoutez la classe "active" à la popup
        popup.classList.add('active');
    });
});

// Sélectionnez les éléments popupCover et popupClose
const popupCover = document.querySelector('.popupCover');
const popupClose = document.querySelector('.popupClose');

// Ajoutez des écouteurs d'événements pour le clic sur popupCover et popupClose
popupCover.addEventListener('click', () => {
    // Sélectionnez la div popupContainer parente
    const popupContainer = popupCover.closest('.popupContainer');
    // Retirez la classe "active" de la div popupContainer parente
    popupContainer.classList.remove('active');
});

popupClose.addEventListener('click', () => {
    // Sélectionnez la div popupContainer parente
    const popupContainer = popupClose.closest('.popupContainer');
    // Retirez la classe "active" de la div popupContainer parente
    popupContainer.classList.remove('active');
});
