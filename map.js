var map = L.map('map').setView([50.9652183, 1.8630816], 1);
const mapURL= "http://62.4.21.200:1337";
const allURL= "http://62.4.21.200:1337/api/infos-maps?populate=*"

L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; CTRLS all right reserved',
    apikey: 'f66d1bb47f424f39b13ebfea1e41d7c7',
    maxZoom: 22
  }).addTo(map);


fetch(allURL)
  .then(response => response.json())
  .then(data => {
      gpx = mapURL + data.data[0].attributes.coordinate.data.attributes.url
      console.log(gpx)
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
          }
        }).on('loaded', function(e) {
        map.fitBounds(e.target.getBounds());
      }).addTo(map);
  })



  