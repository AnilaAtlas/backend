console.log("hello world");
import express from "express";
import path from "path";
import bodyParser from "body-parser";
// import cors from "cors";
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// parse application/json
app.use(bodyParser.json())
// app.use(cors());
const __dirname = path.resolve();
console.log(__dirname);
const port = process.env.PORT || 3000; //empty port will b
//192.168.1.11:3000
// app.get("/", (req, res) => {
//   console.log("Requesting IP: ", req.ip);

//   res.send("Hello World!" + "<br>" + new Date().toLocaleString());
// });
app.get('/profile', (req, res) => {
  console.log("Requesting IP: ", req.ip);
res.send('Hello World!'+ new Date().toLocaleString())
})
app.get('/test',(req,res) => {
console.log("Requesting IP:", req.ip);
res.send('My name is Anila, iam becoming a web developere' + new Date().toLocaleDateString())
})
app.get('/service', (req, res) => {
  console.log("Requesting IP:", req.ip);
  res.send('My name is Anila, I am becoming a web developer. ' + new Date().toLocaleDateString());
});

app.get('/about', (req, res) => {
  console.log("Requesting IP:", req.ip);
res.send('Hello!')
})
app.post('/home', (req, res) => {
  console.log(req.body)
    const {name, age} = req.body
    console.log("body request data ", name,age );
  res.send('Hello World!'+ `name: ${name}  age: ${age} `)
  })

// app.post('/postmethod', (req, res) => {
// console.log(req.body)
//   const {name, age} = req.body
//   console.log("body request data ", name,age );
// res.send('Hello World!'+ `name: ${name}  age: ${age} `)
// })

app.put('/puttmethod', (req, res) => {
  console.log(req.body)
    const {name, age} = req.body
    console.log("body request data ", name,age );
  res.send('Hello World!'+ `name: ${name}  age: ${age} `)
  })


  app.patch('/patchmethod', (req, res) => {
    console.log(req.body)
      const {name, age} = req.body
      console.log("body request data ", name,age );
    res.send('Hello World!'+ `name: ${name}  age: ${age} `)
    })


    app.delete('/deletemethod', (req, res) => {
      console.log(req.body)
        const {name, age} = req.body
        console.log("body request data ", name,age );
      res.send('Hello World!'+ `name: ${name}  age: ${age} `)
      })

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

app.use(express.static(path.join(__dirname, 'React-js/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'React-js/dist/index.html'));
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


