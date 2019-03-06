import {
  films
} from '../data/films.js'

import {
  people
} from '../data/people.js'

const projects = document.querySelector('#projects-content')

people.sort((a, b) => (a.height > b.height) ? 1 : -1)

people.forEach((person) => {
  let column = document.createElement('div')
  column.className = 'col s12 m6'
  projects.appendChild(column)

  let card = document.createElement("div")
  if (person.gender === 'male') {
    card.className = "card hoverable blue accent-3 white-text"
  } else if (person.gender === 'female') {
    card.className = "card hoverable pink accent-1 white-text"
  } else {
    card.className = "card hoverable yellow"
  }
  column.appendChild(card)

  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  card.appendChild(cardContent)

  let titleElement = document.createElement('span')
  titleElement.className = "card-title"
  cardContent.appendChild(titleElement)
  titleElement.textContent = person.name

  let crawlElement = document.createElement('p')
  cardContent.appendChild(crawlElement)
  crawlElement.textContent = person.height

  console.log('Card created for ' + person.name + '!')
})
