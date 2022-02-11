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
  const url = `https://api.techniknews.net/ipgeo/${ip}`
  
  const getLocation = async () => {
    const element = await fetch(url)
    const data = await element.json()
    return data
  }

  getLocation()
});

// AIzaSyCTl7iwusGTtQapPdHlfFlsBCql6BYst4ws