console.log(`QUIZZ - 1`)

// Créer une branche quizz1/[PRENOM]-[NOM] à partir de master

// 1 - Write a function that capitalizes the first letter of a word
// arguments: word

function capitalizeFirstLetter(word) {
  if (typeof word !== 'string') {
    return 'Function need a string argument'
  }
  return word.charAt(0).toUpperCase() + word.slice(1)
}

console.log(capitalizeFirstLetter('michel'))

// 2 - Write a function that takes firstname and lastname and returns the initials
// arguments: firstName, lastName

function returnInitials(firstname, lastname) {
  if (typeof firstname == 'string' && typeof lastname == 'string') {
    return firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase()
  }
  return 'Function need string arguments'
}

console.log(returnInitials('michel', 'belmondo'))

// 3 - Write a function that returns the date in this specific format: "Nous sommes le 22/10 et il est 16h00"
// arguments: 

function whatIsToday() {
  const today = new Date()

  // TODO
  
  return `Nous sommes le ${today.getDate()}/${today.getMonth() + 1} et il est ${today.getHours()}h${today.getMinutes()}`
}

console.log(whatIsToday())

// 4 - Write a function that converts a temperature in Celsius to Fahrenheit
// arguments: tempInCelsius

function celsiusToFahrenheit(tempInCelsius) {
  if (typeof tempInCelsius !== 'number') {
    return 'Function need a number argument'
  }
  return (tempInCelsius * 1.8) + 32 + '°F'
}

console.log(celsiusToFahrenheit(0))

// 5 - Write a function that simulates a dice roll and returns a random number between 1 and 6 everytime it is run.
// arguments: -
// tips: utiliser l'objet Math

function rollDice() {
  return 1 + Math.floor(Math.random() * 6)
}

console.log(rollDice())

// Bonus: 6 - Write a function that takes the name of a book and returns if it is available, if it was borrowed or if the library doesn't have it.

const library = {
  frankenstein: {
    available: false
  },
  dune: {
    available: true
  },
  "1984": {
    available: true
  },
  warOfTheWorlds: {
    available: true
  },
  theHungerGames: {
    available: false
  },
  braveNewWorld: {
    available: false
  },
  theMartian: {
    available: true
  },
  iRobot: {
    available: true
  },
}

function isItAvailable(name) {
  if (typeof name !== 'string') {
    return 'Function need a string argument'
  }
  var length = Object.keys(library).length
  for (let i = 0; i < length; i++) {
    if (Object.keys(library)[i] == name) {
      var book = Object.values(library)[i]
      var status = Object.values(book)
      if (status == 'true') {
        return 'This book is available'
      }
      return 'This book was borrowed'
    }
  }
  return "The library doesn't have this book"
}

console.log(isItAvailable('theMartian'))

// Pusher
