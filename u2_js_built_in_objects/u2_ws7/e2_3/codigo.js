var crd;
var crd_destino;
var latitud_des;
var longitud_des;

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

function encuentraDestino() {
    latitud_des = String (crd.latitude + 0.002);
    longitud_des = String(crd.longitude + 0.002);
}

function calcular_ruta (){
    var platform = new H.service.Platform({
        'apikey': 'ptWbZ66wWgsnL-wH-FnjKBSIMa5ds9Q_81pJETYCwUs'
      });
      // Retrieve the target element for the map:
      var targetElement = document.getElementById('mapContainer');
      
      // Get the default map types from the platform object:
      var defaultLayers = platform.createDefaultLayers();
      
      // Instantiate the map:
      var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 10,
          center: { lat: crd.latitude, lng: crd.longitude }
        });
      
      // Create the parameters for the routing request:
      var routingParameters = {
        'routingMode': 'fast',
        'transportMode': 'car',
        // The start point of the route:
        'origin': String(crd.latitude) + ',' + String(crd.longitude),
        // The end point of the route:
        'destination': latitud_des + ',' + longitud_des,
        // Include the route shape in the response
        'return': 'polyline'
      };
      
      // Define a callback function to process the routing response:
      var onResult = function(result) {
        // ensure that at least one route was found
        if (result.routes.length) {
          result.routes[0].sections.forEach((section) => {
               // Create a linestring to use as a point source for the route line
              let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
      
              // Create a polyline to display the route:
              let routeLine = new H.map.Polyline(linestring, {
                style: { strokeColor: 'blue', lineWidth: 3 }
              });
      
              // Create a marker for the start point:
              let startMarker = new H.map.Marker(section.departure.place.location);
      
              // Create a marker for the end point:
              let endMarker = new H.map.Marker(section.arrival.place.location);
      
              // Add the route polyline and the two markers to the map:
              map.addObjects([routeLine, startMarker, endMarker]);
              //map.addObjects([routeLine]);
      
              // Set the map's viewport to make the whole route visible:
              map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
          });
        }
      };
      
      // Get an instance of the routing service version 8:
      var router = platform.getRoutingService(null, 8);
      
      // Call calculateRoute() with the routing parameters,
      // the callback and an error callback function (called if a
      // communication error occurs):
      router.calculateRoute(routingParameters, onResult,
        function(error) {
          alert(error.message);
        });
}


function encuentraPosicion(pos) {
    crd = pos.coords;
    encuentraDestino();
    // navigator.geolocation.getCurrentPosition(encuentraDestino, error);
    calcular_ruta();
}

navigator.geolocation.getCurrentPosition(encuentraPosicion, error);