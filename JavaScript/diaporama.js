// Variables

let compteur = 0; // compteur pour connaître l'image affichée
let timer, elements, slides;

window.onload = () => {
    //On récupère le diapo

    
    const diapo = document.querySelector(".diapo");

    elements =  document.querySelector(".elements");

    //On clone la première image

    let firstImage = elements.firstElementChild.cloneNode(true)

    //On injecte le clone à la fin du diapo

    elements.appendChild(firstImage)

    slides = Array.from(elements.children);

    // let next = document.querySelector("#next");

    // next.addEventListener("click", slideNext);

    slideWidth = diapo.getBoundingClientRect().width;

    timer = setInterval(slideNext, 5000);

    repere = document.querySelector('#siwprepere');

    reperes = Array.from(repere.children);

    reperes[0].classList.add("swipebullet-active")

}

// Fonction pour le défilement des diapos

function slideNext() {
    // Incrémentation du compteur 
        compteur++;
        elements.style.transition = "1s linear";

    let decalage = -slideWidth * compteur;

    elements.style.transform = `translateX(${decalage}px)`
    
    // On attend la fin de la transition et on rembobine automatiquement

    setTimeout(function() {
        if (compteur >= slides.length  - 1){
            compteur = 0;
            elements.style.transition = "unset";
            elements.style.transform = "translateX(0)" 
         if (compteur == 0) {
        reperes[0].classList.add("swipebullet-active")
    }
        }
    }, 1000)


    for (items of reperes) {
        items.classList.remove("swipebullet-active")
    }

  

    if (compteur < slides.length - 1) {
    reperes[compteur].classList.add("swipebullet-active")
    }
}

