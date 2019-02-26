import {
  films
} from './films.js'

const intro = document.querySelector('#welcome-section')

films.sort ((a,b) => (a.episode_id > b.episode_id) ? 1 : -1)

films.forEach((film) => {
  let div = document.createElement("div")
  div.className = "card"
  intro.appendChild(div)
  
  let titleElement = document.createElement('h1')
  intro.appendChild(titleElement)
  titleElement.textContent = film.title

  let crawlElement = document.createElement('p')
  intro.appendChild(crawlElement)
  crawlElement.textContent = film.opening_crawl
})