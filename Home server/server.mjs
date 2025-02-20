console.log("hello world");
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

const port = process.env.PORT || 3000; //empty port will b
//192.168.1.11:3000
app.get("/", (req, res) => {
  console.log("Requesting IP: ", req.ip);

  res.send("Hello World!" + "<br>" + new Date().toLocaleString());
});
app.get("/weather/:cityName", (req, res) => {
  console.log("Weather App");
  let weatherData = {
    karachi:{
      city: "Karachi",
      tempInc: 26,
      humididty: 26,
      high: 32,
      low: 23,
    },
    lahore: {
      city: "lahore",
      tempInC: 28,
      humidity: 56,
      high: 32,
      low: 23,
    },
  };
  let userInputCity = req.params.cityName.toLowerCase();
  let weatherDataToSend = weatherData[userInputCity];
  if (weatherDataToSend) {
    res.send(weatherDataToSend);
  } else {
    res.status(404).send(`Data for ${req.params.cityName} not found`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
