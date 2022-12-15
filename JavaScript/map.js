var map = L.map('map').setView([50.9652183, 1.8630816], 1);
const mapURL= "http://62.4.21.200:1337"
const allURL= "http://62.4.21.200:1337/api/infos-maps?populate=*";
const descmapURL= "http://62.4.21.200:1337/api/description-maps?populate=*";
const url = "http://62.4.21.200:1337/uploads/map_b35ed6785e.xml";


// L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
//     attribution: '&copy; CTRLS all right reserved',
//     apikey: 'f66d1bb47f424f39b13ebfea1e41d7c7',
//     maxZoom: 22
//   }).addTo(map);


  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; CTRLS all right reserved',
    maxZoom: 22
  }).addTo(map);


fetch(allURL)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.meta.pagination.total; i++) {      
    
      gpx = mapURL + data.data[i].attributes.coordinate.data.attributes.url
      new L.GPX(gpx, {
        async: true, 
        gpx_options: {
            joinTrackSegments: false
          },
          marker_options: {
            startIconUrl: null,
            endIconUrl: null,
            shadowUrl: null,
            iconSize: [20,30]
          },
          polyline_options: {
            color: 'orange',
            weight: 8,
            
          }
        })
        .on('loaded', function(e) {
        map.fitBounds(e.target.getBounds());
      })
      .on('mouseover', function() {
        this.setStyle({
            color: '#e5b9d5' 
        });
      })
      .on('mouseout', function() {
        this.setStyle({
            color: 'orange'
        });
      })
      .on('click', function(){
        hoverSegment(data.data[i].id)
      })
  .addTo(map);
}})




function hoverSegment(e){
  console.log(e)
}


let container = document.querySelector(".itineraire-map-informations")


fetch(descmapURL)
  .then(response => response.json())
  .then(data =>{

    for (let i = 0; i < data.meta.pagination.total; i++) {

      let article = document.createElement("div")
      
      let generateHTML = `
      
      <article class="itineraire-map-informations-section">
                <div class="itineraire-map-informations-global-div">
                    <div class="itineraire-map-informations-image-div">
                        <img src="${mapURL + data.data[i].attributes.image.data.attributes.formats.thumbnail.url}" alt="" class="itineraire-map-informations-image">
                    </div>
                    <div class="itineraire-map-informations-text-global">
                        <div class="itineraire-map-informations-habitude">
                            <span>${data.data[i].attributes.type}</span>
                        </div>
                        <div class="itineraire-map-informations-difficulte">
                            <span class="itineraire-map-informations-difficulte-habitude ${data.data[i].attributes.habitude_nb == 1 ? "itineraire-map-informations-difficulte-habitude-blue": data.data[i].attributes.habitude_nb == 2 ? "itineraire-map-informations-difficulte-habitude-red": "itineraire-map-informations-difficulte-habitude-green"}">
                            ${data.data[i].attributes.habitude_nb == 1 ? "J'ai l'habitude": data.data[i].attributes.habitude_nb == 2 ? "Je me dépasse": "Je débute / En famille"}
                            </span>
                        </div>
                        <h2>
                            <a href="#">${data.data[i].attributes.titre}</a>
                        </h2>
                        <p class="itineraire-map-informations-description">
                        ${data.data[i].attributes.description}
                        </p>
                    </div>
                    
                </div>
            </article>
      `

      article.innerHTML = generateHTML
      
      container.append(article)
    }

  })