const streetView = async (data) => {
  try {
    const url = await fetch(
      `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${data.lat},${data.lon}&fov=80&heading=70&pitch=0&key=AIzaSyCa5dtOhmoUUBj2WToFe9JKDZZEm8lWiUw`,
    );
    const location = await url.json();
    log(location);
    return location;
  } catch (error) {
    return new Error ('nothing');
  }
}

if (typeof module !== 'undefined') {
  module.exports = streetView;
}