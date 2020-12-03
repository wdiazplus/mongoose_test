const express = require('express')
const app = express()

const port = 8080


app.get("/", (req, res)=>{
    res.send('Hi Postman')
})

app.listen(`${port}`,()=>{
    console.log(`Server connected in http://localhost:${port}`)
})