async function initMap(coord) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: coord.lat, lng: coord.lon },
    zoom: 8,
  });
}

if (typeof module !== 'undefined') {
  module.exports = initMap;
}