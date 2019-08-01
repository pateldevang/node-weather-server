const request = require('request')


const forecast = (latitude,longitude,callback) => {
  const url = 'https://api.darksky.net/forecast/0f80134fe8fcc07592bece6452314334/' + latitude + ',' + longitude + '?units=si'


  request({url: url,json: true}, (error, response) => {
      if (error) {
        callback('Unable to connect to Internet.',undefined)
      } else if (response.body.error) {
        callback('Unable to find location',undefined)
      } else {
        callback(undefined, {
          temperature: response.body.currently.temperature,
          rainProbability: response.body.currently.precipProbability,
          summary: response.body.daily.data[0].summary
        })
      }
  })

}


module.exports = forecast
