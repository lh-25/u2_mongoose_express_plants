const express = require('express');
const db = require('./db');
const plantController = require('./controllers/plantController')
const bodyParser = require('body-parser')
const logger = require('morgan')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

 app.get('/', (req,res) => res.send('welcome to our page'))

 app.get('/plants', plantController.getAllPlants)

 app.get('/plants/:id', plantController.getPlantById)
// CREATE will nee to be in a INDEX route
 app.post('/plants', plantController.createPlant)
 
 // PUT and DELETE will need to be iin a SHOW route bc we are targeting a single item 

 app.put('/plants/:id', plantController.updatePlant)

app.delete('/plants/:id', plantController.deletePlant)