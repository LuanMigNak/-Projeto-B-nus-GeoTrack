const getIpData = async (ip) => {
  const url = `https://api.techniknews.net/ipgeo/${ip}`;
  
  const response = await fetch(url);
  const data = await response.json();
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
  const searchButton = document.querySelector('.button');
  const btnSave = document.getElementById('btnSave')
  const ipInput = document.querySelector('#IpInput')

  searchButton.addEventListener('click', () => {
    let infoDiv = document.querySelector('.infoUser')
    infoDiv.innerText = 'loading...'
    return infoIp(getIpData(ipInput.value));
  });

  btnSave.addEventListener('click', async () => {
    let ipInput = document.querySelector('#IpInput')
    const a = await getIpData(ipInput.value)
    const infoDivSave = document.getElementsByClassName('InfoSave');
            infoDivSave[0].innerText = `ip: ${a.ip}
            continent: ${a.continent}
            country: ${a.country}(${a.countryCode})
            regionName: ${a.regionName}
            city: ${a.city}
            timezone: ${a.timezone}
            currency: ${a.currency}
            internet provider: ${a.org}`
  });

  searchButton.addEventListener('click', async () => {
    let result = await getIpData(ipInput.value)
    return initMap(result);
  });
};