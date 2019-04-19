import {
  pokemon
} from '../data/pokemon.js'

class Pokemon {
  constructor(id) {
    this.id = id
  }
}

const mainContainer = document.querySelector('.row')

function createPokeCard(pokeData) {
  let column = document.createElement('div')
  column.className = "col s12 m6 l4 xl3"
  let card = document.createElement('div')
  card.className = 'card center-align hoverable'
  let cardImage = document.createElement('div')
  cardImage.className = 'card-image'
  let image = document.createElement('img')
  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  let cardTitle = document.createElement('span')
  cardTitle.className = 'card-title truncate'

  //let upperName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)
  cardTitle.textContent = pokeData.name
  if (pokeData.id !== 0) {
    image.src = `../images/${pokeData.imageID}${pokeData.name}.png`
  } else {
    image.src = `../images/pokeball.png`
  }

  cardContent.appendChild(cardTitle)
  cardImage.appendChild(image)
  card.appendChild(cardImage)
  card.appendChild(cardContent)
  column.appendChild(card)
  mainContainer.appendChild(column)
}

pokemon.forEach(singleMon => {
  fetch(singleMon.url)
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {

      createPokeCard(matchIdToImage(myJson))
    })
})

function matchIdToImage(aPokemon) {
  if (aPokemon.id < 10) {
    aPokemon.imageID = "00" + aPokemon.id
  }
  if (aPokemon.id > 9 && aPokemon.id < 100) {
    aPokemon.imageID = "0" + aPokemon.id
  }
  if (aPokemon.id > 99) {
    aPokemon.imageID = aPokemon.id
  }
  aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
  return aPokemon
}

function fetchSinglePokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(function (response) {
      return response.json()
    })
    .then(function (retrievedPokemon) {
      createPokeCard(matchIdToImage(retrievedPokemon))
    })
}


const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function () {
  let pokemonID = prompt('Enter an ID of an existing pokemon:')
  fetchSinglePokemon(pokemonID)
});
