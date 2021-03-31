const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose');
mongoose.connect('',{
    useNewUrlParser :true,useUnifiedTopology : true, useCreateIndex : true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected...'))
  .catch(()=> console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req,res)=>{
 

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})