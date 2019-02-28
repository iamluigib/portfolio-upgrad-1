import { people } from "../data/people.js"

const men = people.filter(person => person.gender === "male")

const women = people.filter(person => person.gender === "female")

const other = people.filter(person => (person.gender === "n/a") || (person.gender === "none") || (person.gender === "hermaphrodite"))

console.log(other)
