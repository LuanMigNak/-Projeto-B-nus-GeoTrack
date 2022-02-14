function getIp(callback)
{
    function response(s)
    {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger()
    {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function() {
            response(s);
        };
        s.onerror = function() {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}


getIp(function (ip) {
  console.log(ip);
  const getLocation = async () => {
    const url = `https://api.techniknews.net/ipgeo/${ip}`
    const element = await fetch(url)
    const data = await element.json()
    console.log(data);
    const infoIp = () => {
        const infoDiv = document.getElementsByClassName('infoUser')
        infoDiv[0].innerText = `ip: ${data.ip}
        continent: ${data.continent}
        country: ${data.country}(${data.countryCode})
        regionName: ${data.regionName}
        city: ${data.city}
        timezone: ${data.timezone}
        currency: ${data.currency}
        internet provider: ${data.org}`
    }
    const locationMap = await createMap(data)

    infoIp()
    return data;
  }

  console.log(getLocation());
});

const createMap = async (coord) => await initMap(coord)

if (typeof module !== 'undefined') {
    module.exports = {
        getIp,
        createMap,
    }
}
