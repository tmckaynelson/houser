require('dotenv').config()

const express = require('express')
const cors = require('cors')
const massive = require('massive')

const ctrl = require('./controller')

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env


const app = express()

app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance)
    console.log('db connected')
})

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

app.listen(SERVER_PORT, () => {
    console.log('server running')
})
