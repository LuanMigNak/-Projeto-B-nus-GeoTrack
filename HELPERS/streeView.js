const streetView = async (lat, lon) => {
  try {
    const url = await fetch(
      `https://maps.googleapis.com/maps/api/streetview?${lat},${lon}`,
    );
    const data = await url.json();
    log(data);
    return data;
  } catch (error) {
    return new Error ('nothing');
  }
}

if (typeof module !== 'undefined') {
  module.exports = streetView;
}