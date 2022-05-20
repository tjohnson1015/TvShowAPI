fetch('/api/v1/episodes')
    .then(res => res.json())
    .then(data => {
        renderEpisodes(data)
        console.log(data)
    })

fetch('/api/v1/characters')
    .then(res => res.json())
    .then(data => {
        renderCharacters(data)
        console.log(data)
    })

const epList = document.querySelector('#episodes')
epList.addEventListener('change', (e) => {
    const epId = e.target.value
    fetch('api/v1/episodes/${epId}')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
})

const charList = document.querySelector('#characters')
charList.addEventListener('change', (e) => {
    const charId = e.target.value
    fetch('api/v1/character/${charId}')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
})


function renderEpisodes(episodes) {
    const epItems = episodes.map(episode => {
        return `
            <option value="${episode.id}">${episode.name}  - Season  ${episode.season}</option>
        `
    }).join('')
    epList.innerHTML = epItems
}

function renderCharacters(characters) {
    const chars = characters.map(character => {
        return `
            <option value="${character.id}">${character.character}  - Played By:  ${character.name}</option>
        `
    }).join('')
    charList.innerHTML = chars
}
