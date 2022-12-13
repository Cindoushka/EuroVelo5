var map = L.map('map').setView([50.9652183, 1.8630816], 1);

L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
    attribution: '&copy; <a href="https://github.com/Cindoushka/EuroVelo5" target="_blank">CTRLS</a> all right reserved',
    apikey: 'f66d1bb47f424f39b13ebfea1e41d7c7',
    maxZoom: 22
  }).addTo(map);





var gpx = './maps.gpx';

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

  