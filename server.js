const express = require("express")
const app = express()
const PORT = 8000
const cors = require("cors")



const beatles = {
    'john lennon':{
        'birthLocation': 'Liverpool',
        'instrument': 'guitar',
    },
    'paul mccartney':{
        'birthLocation': 'Liverpool',
        'instrument': 'bass'
    },
    'george harrison': {
        'birthLocation': 'Liverpool',
        'instrument': 'guitar'
    },
    'ringo star': {
        'birthLocation': 'Liverpool',
        'instrument': 'drums'
    },
    'unknown': {
        'birthLocation': 'Liverpool?',
        'instrument': 'tambourine'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const beatlesName = req.params.name.toLowerCase()
    if( beatles[beatlesName]){
        res.json(beatles[beatlesName])
    }else{
        res.json(beatles['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})