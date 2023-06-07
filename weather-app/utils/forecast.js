const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=3c72e3cf21752cf5b9d42d5658002599&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   //console.log(response.body.current);

//   if (error) {
//     console.log("Unable to connect to the weather service!");
//   } else if (response.body.error) {
//     console.log("Unable to find location!");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });

const forecast = (latitude, longitude, callback) => {
  //   const url =
  //     "http://api.weatherstack.com/current?access_key=3c72e3cf21752cf5b9d42d5658002599&query=' + latitude + ',' + longitude + '&units=f'";
  const url = `http://api.weatherstack.com/current?access_key=3c72e3cf21752cf5b9d42d5658002599&query=${latitude},${longitude}&units=f`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect with the weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        console.log(
          body.current.weather_descriptions[0] +
            ". It is currently " +
            body.current.temperature +
            " degrees out. It feels like " +
            body.current.feelslike +
            " degrees out."
        )
      );
    }
  });
};

module.exports = forecast;
