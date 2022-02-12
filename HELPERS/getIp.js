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
//   console.log(ip);
  const getLocation = async () => {
    const url = `https://api.techniknews.net/ipgeo/${ip}`
    const element = await fetch(url)
    const data = await element.json()
    const lati = data.lat
    // console.log(data);
    // console.log(lati);
    return data
  }

  console.log(getLocation());
});

const getLocation = async (ip) => {
    const url = `https://api.techniknews.net/ipgeo/${ip}`
    const element = await fetch(url)
    const data = await element.json()
    const lati = data.lat
    // console.log(data);
    // console.log(lati);
    return data
}

async function dados() {
//    const dadosP =  await getLocation(function(ip){});
//    console.log(dadosP);
    console.log(getIp());
}

dados()

const createMap = async (ip) => {
    const div = document.querySelector('.mapa');
    const mapaH = document.getElementById('mapImg')
    const coordinates = await streetView();
}


if (typeof module !== 'undefined') {
    module.exports = {
        getIp,
        createMap,
    }
}
//   const getLocation = async () => {
//     const element = await fetch(url)
//     const data = await element.json()
//     console.log(data);
//     const cord = {
//       lat: data.lat,
//       lng: data.lon
//     }

//     const initMap = () => {
//       const options = {
//         zoom: 10,
//         center: cord
//       }

//       const mapa = new google.maps.Map((mapaH), options)
//     }
//   }
