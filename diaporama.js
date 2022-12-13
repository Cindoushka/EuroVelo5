// Variables

let compteur = 0; // compteur pour connaître l'image affichée
let timer, elements, slides;

window.onload = () => {
    //On récupère le diapo

    const diapo = document.querySelector('.diapo');

    elements =  document.querySelector('.elements');

    //On clone la première image

    let firstImage = elements.firstElementChild.cloneNode(true)

    //On injecte le clone à la fin du diapo

    elements.appendChild(firstImage)

    slides = Array.from(elements.children);

    slideWidth = diapo.getBoundingClientRect().width;

    let repere = document.querySelector('.swipebullet')
}

// Fonction pour le défilement des diapos

function SlideNext() {
    // Incrémentation du compteur 
    compteur++;
    elements.style.transition = "1s linear";

    let decalage = -slideWidth * compteur;
    elements.style.transform = `"translateX(${decalage}px)"`

    // On attend la fin de la transition et on rembobine automatiquement

    setTimeout(function() {
        if (compteur >= slides.length  - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)"
        }
    }, 1000)
}

