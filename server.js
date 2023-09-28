const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
//configure env
dotenv.config();
//rest object
const app = express()
app.get('/',(req,res) => {
    res.send(
        
          " <h1>WELCOME TO AVTA</h1>");
        
    
})

//PORT
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`.bgCyan.white);
})
