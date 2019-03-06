import {
  films
} from '../data/films.js'

const intro = document.querySelector('#welcome-section')

const projects = document.querySelector('#projects-content')

films.sort((a, b) => (a.episode_id > b.episode_id) ? 1 : -1)

films.forEach((film) => {
  let column = document.createElement('div')
  column.className = 'col s12 m6 l4'
  projects.appendChild(column)

  let card = document.createElement("div")
  card.className = "card hoverable"
  column.appendChild(card)

  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  card.appendChild(cardContent)

  let titleElement = document.createElement('span')
  titleElement.className = "card-title"
  cardContent.appendChild(titleElement)
  titleElement.textContent = film.title

  let crawlElement = document.createElement('p')
  cardContent.appendChild(crawlElement)
  crawlElement.textContent = film.opening_crawl
})
