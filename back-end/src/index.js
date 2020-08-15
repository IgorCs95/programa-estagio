const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((request, rsponse, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

app.use((error,request,response,next)=>{
  response.status(error.status || 500)
  response.json({error:error.message})
})

app.listen(3333);


