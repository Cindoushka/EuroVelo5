const urlBddTest = "http://62.4.21.200:1337/api/testimonies?populate=*";
const urlImgTest = "http://62.4.21.200:1337";


let containerCar = document.querySelector('#carousseltemoignage');

let billets = document.querySelector('#billetstemoignage');
let note = "/ 5";

fetch(urlBddTest)
    .then(response => response.json())
    .then(data =>{

        for(let i=0; i < data.meta.pagination.total ; i++) {
            let article = document.createElement("div")
            let generateHtml=`
                <a href="/ambassadeurs.html" class="liendudiapotem">
                    <img src="${urlImgTest}${data.data[i].attributes.Picture.data[0].attributes.formats.medium.url}" class="imgducarousselt">

                    <div class="textepourimagetem">
                        <img src="Images/coeur.png" alt="logo coeur" class="coeurcaroussel">
                        <p class="textetemoignagec"> Virée de ${data.data[i].attributes.description_maps.data[0].attributes.depart} à ${data.data[i].attributes.description_maps.data[0].attributes.arrive} pour ${data.data[i].attributes.NameWitness}</p>
                    </div>
                </a>`

                // console.log(data.data[i].attributes.Picture.data[0].attributes.formats.medium.url)

                article.innerHTML = generateHtml
                containerCar.append(article) 
             }

             for(let i=0; i< data.meta.pagination.total; i++) {
                let date = new Date(data.data[i].attributes.DatePublish)
            
                let article2 = document.createElement("div")
                let generateHtml=`
                <article class="billettemoignages">
                    <p class="publishdate"> ${date.toLocaleDateString("fr")} ${date.getUTCHours()}:${date.getUTCMinutes()} </p>
                    <h2 class="namewitness"> ${data.data[i].attributes.NameWitness} </h2>
                    <span class="etiquettemap"> ${data.data[i].attributes.description_maps.data[0].attributes.depart} / ${data.data[i].attributes.description_maps.data[0].attributes.arrive} </span>
    
    
                    <div class="notes">
                        <div class="note">
                            <p class="note1bdd"> ${data.data[i].attributes.NoteSecurity} ${note}</p>
                            <p class="typenote">Sécurité</p> 
                        </div>
    
                        <div class="note">
                            <p class="note1bdd"> ${data.data[i].attributes.NoteBalisage} ${note}</p>
                            <p class="typenote">Balisage</p> 
                        </div>
    
                        <div class="note">
                            <p class="note1bdd"> ${data.data[i].attributes.NoteInterest} ${note}</p>
                            <p class="typenote">Intérêt</p> 
                        </div>
    
                        <div class="note">
                            <p class="note1bdd"> ${data.data[i].attributes.NoteService} ${note}</p>
                            <p class="typenote">Services</p> 
                        </div>
                    </div> 
    
                    <h3 class="titredutemoignage"> ${data.data[i].attributes.Titre} </h3>
                    <p class="descTemoignage"> ${data.data[i].attributes.Description} </p>
    
                    <div class="bottombillet">
                        <p class="answers"> 0 réponse </p>
                        <p class="lire">LIRE</p>
                    </div>
    
            </article>`
            
            article2.innerHTML = generateHtml
            billets.append(article2) 
            }

    })


    // Variables

    const caroussel = document.querySelector("#carousseltemoignage");

    let nextButton = document.querySelector(".arrowright");

    let prevButton = document.querySelector(".arrowleft");




    nextButton.addEventListener("click", slideNextButton);

    prevButton.addEventListener("click", slidePrevButton);




// Fonction pour le défilement des diapos

function slideNextButton() {

    caroussel.style.transition = "1s linear";

    let decalageCar = 560;

    caroussel.style.transform = `translateX(${-decalageCar}px)`
    
}

function slidePrevButton() {

    caroussel.style.transition = "1s linear";

    let decalageCar2 = 0;

    caroussel.style.transform = `translateX(${decalageCar2}px)`
    
}




