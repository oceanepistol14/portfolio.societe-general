window.onload = function() {

const phrase = "Passionnée par le digital et la tech, je souhaite rejoindre la SOCIETE GENERALE pour contribuer à des projets innovants dès ma première année de BTS SIO.";

function ecrireLettre(element, texte, callback) {
  let i = 0;
  element.style.opacity = 1;
  const interval = setInterval(() => {
    element.textContent += texte[i];
    i++;
    if (i >= texte.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 40);
}

function afficher(element, callback) {
  element.classList.remove('cache');
  setTimeout(callback, 800);
}

const logo = document.querySelector('.header');
const phraseEl = document.querySelector('.phrase-entreprise');
const carte = document.querySelector('.carte');
const boutons = document.querySelectorAll('.liens a');

afficher(logo, () => {
  ecrireLettre(phraseEl, phrase, () => {
    afficher(carte, () => {
      boutons.forEach((btn, i) => {
        setTimeout(() => {
          btn.classList.remove('cache');
        }, i * 300);
      });
    });
  });
});

}
