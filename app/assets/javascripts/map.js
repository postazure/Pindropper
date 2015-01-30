$('document').ready(function () {
  function initialize() {
    var mapOptions = {
      center: { lat: 37.7633, lng: -122.4167},
      zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
