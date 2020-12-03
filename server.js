const express = require('express')
const { config } = require('./config');


const app = express()

const port = config.port


app.get("/", (req, res)=>{
    res.send('Hi Postman')
})



app.listen(`${port}`,()=>{
    console.log(`Server connected in http://localhost:${port}`)
})
