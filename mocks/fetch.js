const results = require('./item')

const fetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url.includes('https://api.techniknews.net/ipgeo/')) {
      const clientIp = url.split('ipgeo/')[1]
      return Promise.resolve(item.find(({ip}) => ip === clientIp ))
    }
    return Promise.resolve(results)
  } 
});

module.exports = fetch;