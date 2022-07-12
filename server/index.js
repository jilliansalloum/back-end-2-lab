const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.listen(5000, () => console.log('Server running on 5000'))

const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller')
app.get('/api/houses', getHouses)

app.post('/api/houses', createHouse)

app.put('/api/houses/:id', updateHouse)

app.delete('/api/houses/:id', deleteHouse)



