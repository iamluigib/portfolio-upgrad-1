import { films } from './films.js'
import { people } from './people.js'

const intro = document.querySelector('#welcome-section')

films.sort ((a,b) => (a.episode_id > b.episode_id) ? 1 : -1)

films.forEach((film) => {
  let tile = document.createElement("div")
  
  let titleElement = document.createElement('h1')
  tile.appendChild(titleElement)
  titleElement.textContent = film.title

  let crawlElement = document.createElement('p')
  tile.appendChild(crawlElement)
  crawlElement.textContent = film.opening_crawl

  intro.appendChild(tile)
})

