const http = require('http');
const express = require('express')
const data = require('./data');
const { foods, characters } = require('./data');
const { episodes } = require('./data');

const hostname = '127.0.0.1';
const port = 3000;

const app = express()

const server = http.createServer(app)

app.use(express.static('./public'))

// app.get('/api/v1/episodes', (req, res) => {
//     res.json(data.episodes)
// })

// app.get('/api/v1/characters', (req, res) => {
//     res.json(data.characters)
// })

app.get('/api/v1/characters/:charId', (req, res) => {
    const charId = req.params.charId
    let char = null
    for (let currentChar of data.characters) {
    if (currentChar.id == charId) {
        char = currentChar
    }
    }
    if (char === null) {
    res.status(404).json({ error: 'could not find character with that id.'})
    return
    }

    res.json(char)
})

app.get('/api/v1/characters/:search', (req,res) => {
    const search = req.query.search
    if (!search) {
        return res.json(data.characters)
    } else {
        const results = characters.filter(character => character.character.toLowerCase().includes(search.toLowerCase()))
        res.json(results)
    }
})

app.get('/api/v1/episodes', (req,res) => {
    const search = req.query.search
    if (!search) {
        return res.json(data.episodes)
    } else {
        const results = episodes.filter(episode => episode.name.toLowerCase().includes(search.toLowerCase()))
        res.json(results)
    }
})

app.get('/api/v1/episodes/:epId', (req, res) => {
    const epId = req.params.epId
    let ep = null
    for (let currentEp of data.episodes) {
    if (currentEp.id == epId) {
        ep = currentEp
    }
    }
    if (ep === null) {
    res.status(404).json({ error: 'could not find episode with that id.'})
    return
    }

    res.json(ep)
})

app.get('/contactcard', (req, res) => {
    const { firstName, lastName } = req.query
    if (!firstName || !lastName) {
        res.status(400)
        res.send('Enter your first and last name.')
    }
    else {
        const email = `${firstName[0]}.${lastName}@ecorp.com`
        const userName = `${firstName[0]}${firstName[1]}${firstName[2]}_${lastName}`
        res.send(`
        <h1>Welcome ${firstName} ${lastName}!</h1>
        <h2>Email Address: ${email}</h2>
        <h2>Username: ${userName}</h2>
        `)
    }
})

app.get('/foods', (req,res) => {
    const search = req.query.search
    if (!search) {
        return res.json(data.foods)
    } else {
        const results = data.foods.filter((food) => {
            return food.includes(search)
        })
        res.json(results)
    }

})



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
