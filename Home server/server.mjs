console.log("hello world");
import express from 'express'
const app = express()
const port = 3000
//192.168.1.11:3000
app.get('/', (req, res) => {
    console.log("Requesting IP: ", req.ip);
    
  res.send('Hello World!'+ '<br>' + new Date().toLocaleString())

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
