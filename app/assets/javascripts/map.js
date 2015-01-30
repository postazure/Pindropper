$('document').ready(function () {
  var map = initializeMap();

  var coords = [37.787791,-122.396917];
  setMarker(coords, map);
});

function initializeMap() {
  var mapOptions = {
    center: { lat: 37.7633, lng: -122.4167},
    zoom: 12
  };
  return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function setMarker(coords, map) {
  var markerLocale = new google.maps.LatLng(37.787791,-122.396917);
  var marker = new google.maps.Marker({
      position: markerLocale,
      map: map,
      title:"Hello World!"
  });
}
