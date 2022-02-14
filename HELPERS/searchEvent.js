window.onload = () => {
  let searchButton = document.querySelector('.button');
  
  const getIpData = async (ip) => {
    const url = `https://api.techniknews.net/ipgeo/${ip}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  };

  searchButton.addEventListener('click', () => {
    let ipInput = document.querySelector('#IpInput')
    return getIpData(ipInput.value);
  });
};