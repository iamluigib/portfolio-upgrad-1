import {
  pokemon
} from '../data/pokemon.js'

pokemon.forEach((singleMon) => {
  fetch(singleMon.url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      createPokeCard(myJson);
    });
})

const cardWrapper = document.querySelector('.container')

function createPokeCard(pokedata) {
  let card = document.createElement('div')
  card.className = 'card'
  cardWrapper.appendChild(card)

  let cardImage = document.createElement('div')
  cardImage.className = 'card-image'
  card.appendChild(cardImage)

  let imgElement = document.createElement('img')
  imgElement.src = pokedata.front_default
  imgElement.alt = pokedata.name
  cardImage.appendChild(imgElement)


  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  card.appendChild(cardContent)

  let name = document.createElement('span')
  name.className = 'card-title'
  name.textContent = pokedata.name
  cardContent.appendChild(name)
}
