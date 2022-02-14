const getIpData = async (ip) => {
  const url = `https://api.techniknews.net/ipgeo/${ip}`;
  
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

const infoIp = async (data) => {
  const ipInfo = await data;
  const infoDiv = document.getElementsByClassName('infoUser')
  infoDiv[0].innerText = `ip: ${ipInfo.ip}
  continent: ${ipInfo.continent}
  country: ${ipInfo.country}(${ipInfo.countryCode})
  regionName: ${ipInfo.regionName}
  city: ${ipInfo.city}
  timezone: ${ipInfo.timezone}
  currency: ${ipInfo.currency}
  internet provider: ${ipInfo.org}`
};
window.onload = () => {
  let searchButton = document.querySelector('.button');

  searchButton.addEventListener('click', () => {
    let ipInput = document.querySelector('#IpInput')
    return infoIp(getIpData(ipInput.value));
  });

  searchButton.addEventListener('click', async () => {
    let ipInput = document.querySelector('#IpInput')
    let result = await getIpData(ipInput.value)
    return initMap(result);
  });
};