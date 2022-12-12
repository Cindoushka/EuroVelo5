var map = L.map('map').setView([50.9652183, 1.8630816], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; CTRLS all right reserved'
}).addTo(map);

var gpx = './maps.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, {
    async: true,
    gpx_options: {
        joinTrackSegments: false
      },
      marker_options: {
        startIconUrl: '',
        endIconUrl: '',
        shadowUrl: ''
      }
    }).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
  }).addTo(map);

  