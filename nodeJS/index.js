const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

let jsonTest = [
    {'1': {nome: 'Arthur'}},
    {'2': {nome: 'Victor'}},
    {'3':{nome: 'Carlos'}},
    {'4':{nome: 'Heitor'}},
    {'5':{nome: 'Maril'}},
    {'6':{nome: 'Cezar'}}
]

app.get('/best-devs',(request, response)=>{
    return response.json(jsonTest)
})

app.listen(2121, () => {
    console.log("Aplication started at port: 2121")
})