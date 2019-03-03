import {
  films
} from '../data/films.js'

const intro = document.querySelector('#welcome-section')

films.sort((a, b) => (a.episode_id > b.episode_id) ? 1 : -1)

films.forEach((film) => {
  let container = document.createElement('div')
  container.className = "container"
  intro.appendChild(container)

  let row = document.createElement('div')
  row.className = 'row'
  container.appendChild(row)

  let column = document.createElement('div')
  column.className = 'col s12'
  row.appendChild(column)

  let card = document.createElement("div")
  card.className = "card"
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
