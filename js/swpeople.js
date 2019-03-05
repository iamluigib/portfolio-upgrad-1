import { people } from "../data/people.js"

const men = people.filter(person => person.gender === "male")

const women = people.filter(person => person.gender === "female")

const other = people.filter(person => (person.gender === "n/a") || (person.gender === "none") || (person.gender === "hermaphrodite"))

// console.log(men, women, other)

men.forEach(man => {
  let manDiv = document.createElement('div')
  manDiv.className = 'card-panel'

  let manName = document.createElement('p')
  manName.textContent = man.name;
  manDiv.appendChild('manName')

  document.appendChild('manDiv')
})
