$('document').ready(function () {
  var map = initializeMap({center: { lat: 37.7633, lng: -122.4167}, zoom: 12});

  var coords = [37.787791,-122.396917];
  var marker = setMarker("title", coords, map);

  google.maps.event.addListener(map, 'click', function(e) {
    return e.latLng;
  });
});

function initializeMap(mapOptions) {
  return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
