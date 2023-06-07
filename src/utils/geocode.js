const request = require("request");
const geocode = (address, callback) => {
  //   const url =
  //     "http://api.positionstack.com/v1/forward?access_key=fb5133941f364197686992decf7a2834&query=${address}";

  const url = `http://api.positionstack.com/v1/forward?access_key=fb5133941f364197686992decf7a2834&query=${address}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.error || response.body.data.length === 0) {
      callback("Unable to find location! Try another Search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.data[0].latitude,
        longitude: response.body.data[0].longitude,
        location: response.body.data[0].label,
      });
    }
  });
};

module.exports = geocode;
