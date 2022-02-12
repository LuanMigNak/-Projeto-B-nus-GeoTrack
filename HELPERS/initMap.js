async function initMap(coord) {
  const locale = {
    lat: coord.lat,
    lng: coord.lon,
  };
  map = new google.maps.Map(document.getElementById("map"), {
    center: locale,
    zoom: 25,
  });
  const marker = new google.maps.Marker({
    position: locale,
    map: map,
  });
}

if (typeof module !== 'undefined') {
  module.exports = initMap;
}