// import characters from SWAPI people API
import {
  people
} from '../data/people.js'

import {
  species
} from '../data/species.js'

// reference point in document
const projects = document.querySelector('#projects-content')

// function to get SWAPI person number
const getLastNumber = (url) => {
  let end = url.lastIndexOf('/')
  let start = end - 2
  if (url.charAt(start) === '/') {
    start++
  }
  return url.slice(start, end)
}

// just get the array of people with known height values so it can be sorted separately
const knownHeightPeople = people.filter(person => person.height !== 'unknown')

// sort people from shortest to tallest
knownHeightPeople.sort((a, b) => a.height - b.height)

// custom values from people array
const myPeopleArray = knownHeightPeople.map(person => {
  let imageURL = getLastNumber(person.url)
  //species property holds an array, so get the first item in it for comparison
  let foundSpecies = species.find(alien => alien.url === person.species[0])  
  
  console.log(foundSpecies)
  return {
    name: person.name,
    height: person.height,
    eye_color: person.eye_color,
    gender: person.gender,
    imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
  }
  
})

// card creation loop for SWAPI characters
myPeopleArray.forEach((person) => {
  // create column element for grid system
  let column = document.createElement('div')
  column.className = 'col s12 m6 l4'
  projects.appendChild(column)

  // create card element & change color based on gender
  let card = document.createElement('div')
  card.title = person.name
  if (person.gender === 'male') {
    card.className = 'card blue accent-3 white-text'
  } else if (person.gender === 'female') {
    card.className = 'card pink accent-1 white-text'
  } else {
    card.className = 'card yellow'
  }
  column.appendChild(card)

  // add animation on scroll with AOS
  let aosAtt = document.createAttribute('data-aos')
  aosAtt.value = 'fade-up'
  let aosAnchorAtt = document.createAttribute('data-aos-anchor-placement')
  aosAnchorAtt.value = 'center-bottom'
  card.setAttributeNode(aosAtt)
  card.setAttributeNode(aosAnchorAtt)

  // create card image container
  let cardImage = document.createElement('div')
  cardImage.className = 'card-image'
  card.appendChild(cardImage)

  // create image from SW visual guide
  let imgElement = document.createElement('img')
  imgElement.src = person.imagePath
  imgElement.alt = 'character image'
  cardImage.appendChild(imgElement)

  // create card content container
  let cardContent = document.createElement('div')
  cardContent.className = 'card-content'
  card.appendChild(cardContent)

  // create card title from SWAPI character name
  let titleElement = document.createElement('span')
  titleElement.className = 'card-title truncate'
  cardContent.appendChild(titleElement)
  titleElement.textContent = person.name

  // convert character height from cm to ft & in
  let charHeightFeet = Math.floor(person.height / 30.48)
  let charHeightInches = Math.floor(person.height % 30.48 / 2.54)

  // create character height in card content container
  let charHeight = document.createElement('p')
  cardContent.appendChild(charHeight)

  console.log(person.species)

  // log failed and created card in console
  if (person.height === 'unknown') {
    card.className = 'hide-me'
    console.log('Card NOT created for ' + person.name + ' due to insufficient data.')
  } else {
    charHeight.textContent = charHeightFeet + " ft " + charHeightInches + " in"
    console.log('Card successfully created for ' + person.name + '!')
  }
})
