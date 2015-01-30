function setMarker(title, coords, map) {
  var markerLocale = new google.maps.LatLng(coords[0],coords[1]);
  var marker = new google.maps.Marker({
      position: markerLocale,
      map: map,
      title: title
  });

  var contentString = "html here";

  var infowindow = new google.maps.InfoWindow({ content: contentString });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}
