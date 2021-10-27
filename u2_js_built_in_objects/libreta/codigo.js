// let cad = "Es es una prueba de una funcion";

// fin = false;
// let pos = -1;
// while (!fin){
//     posicion = cad.indexOf("una", pos + 1);

//     if (posicion == -1)
//         fin = true;
//     else
//         console.log(pos);
// }

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

var crd;
  function encuentraPosicion(pos) {
    crd = pos.coords;

    var platform = new H.service.Platform({
        'apikey': 'ptWbZ66wWgsnL-wH-FnjKBSIMa5ds9Q_81pJETYCwUs'
    });
    
    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();
    
    
    // Instantiate (and display) a map object:
    var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 17,
          center: { lat: crd.latitude, lng: crd.longitude }
        });
    
        // Define a variable holding SVG mark-up that defines an icon image:
    var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">I</text></svg>';

    // Create an icon, an object holding the latitude and longitude, and a marker:
    var icon = new H.map.Icon(svgMarkup),
    coords = {lat: crd.latitude, lng: crd.longitude},
    marker = new H.map.Marker(coords, {icon: icon});

    // Add the marker to the map and center the map at the location of the marker:
    map.addObject(marker);
    map.setCenter(coords);
  }
  
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
  
navigator.geolocation.getCurrentPosition(encuentraPosicion, error);
