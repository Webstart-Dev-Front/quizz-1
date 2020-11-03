console.log(`QUIZZ - 1`)
// Créer une branche quizz1/[PRENOM]-[NOM] à partir de master


// 1 - Write a function that capitalizes the first letter of a word
// arguments: word

function capitaliseFirstLetter(word) {
  const first = word.slice(0,1)
  const rest = word.slice(1,word.length)
  const fullWord = first.toUpperCase() + rest
  return fullWord
}

// 2 - Write a function that takes firstname and lastname and returns the initials
// arguments: firstName, lastName

function initials(firstName, lastName) {
  const initialFirst = firstName.slice(0,1)
  const initialLast = lastName.slice(0,1)
  const initials = (initialFirst + initialLast).toUpperCase()
  return initials
}

// 3 - Write a function that returns the date in this specific format: "Nous sommes le 22/10 et il est 16h00"
// arguments: 

function whatIsToday() {
  const today = new Date()
  var time = today.getHours() + `:`+ today.getMinutes()
  var date = `Nous sommes le ` + today.getUTCDate() + `/` + (today.getMonth()+1) + ` et il est ` + time + `.`
  return date
}

// 4 - Write a function that converts a temperature in Celsius to Fahrenheit
// arguments: tempInCelsius

function celsiusToFahrenheit(tempInCelsius) {
  const tempInFahrenheit = (tempInCelsius * 1.8) + 32
  return tempInFahrenheit
}

// 5 - Write a function that simulates a dice roll and returns a random number between 1 and 6 everytime it is run.
// arguments: -
// tips: utiliser l'objet Math

function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

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

function canIBorrowThisBook(book) {
  if(library.hasOwnProperty(book)) {
    if(library[book].available==true) {
      return `Yes, we do have ${book}, and it is available.`
    } else if(library[book].available==false) {
      return `Yes, we do have ${book}, but it isn't available currently.`
    }
  } else {
    return `No, we don't have ${book}.`
  }
}

result = canIBorrowThisBook("theHungerGames")
console.log(result)



// Pusher
