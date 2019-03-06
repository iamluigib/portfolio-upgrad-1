import {
  people
} from '../data/people.js'

const projects = document.querySelector('#projects-content')

people.sort((a, b) => (a.height - b.height))

people.forEach((person) => {
  let column = document.createElement('div')
  column.className = 'col s12 m6'
  projects.appendChild(column)

  let card = document.createElement('div')
  if (person.gender === 'male') {
    card.className = 'card hoverable blue accent-3 white-text'
  } else if (person.gender === 'female') {
    card.className = 'card hoverable pink accent-1 white-text'
  } else {
    card.className = 'card hoverable yellow'
  }
  column.appendChild(card)

  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  card.appendChild(cardContent)

  let titleElement = document.createElement('span')
  titleElement.className = 'card-title'
  cardContent.appendChild(titleElement)
  titleElement.textContent = person.name

  let charHeight = document.createElement('p')
  cardContent.appendChild(charHeight)
  if (person.height === 'unknown') {
    charHeight.textContent = 'height unknown :('
  } else {
    charHeight.textContent = person.height + ' cm'
  }

  console.log('Card created for ' + person.name + '!')
})
