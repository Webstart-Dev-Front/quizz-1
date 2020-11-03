console.log(`QUIZZ - 1`)
// Créer une branche quizz1/[PRENOM]-[NOM] à partir de master


// 1 - Write a function that capitalizes the first letter of a word
// arguments: word

  function capitalizesFirstLetter(word) {
    var splitStr = word.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
  }

  console.log(capitalizesFirstLetter("stephane"))
  console.log(capitalizesFirstLetter("stePHAne"))
  console.log(capitalizesFirstLetter("Stephane"))
  console.log(capitalizesFirstLetter("StEPHane"))


// 2 - Write a function that takes firstname and lastname and returns the initials
// arguments: firstName, lastName

  function returnsInitials(firstname, lastname) {
    var string = `${firstname} ${lastname}`
    var names = string.split(' ')
    var initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  console.log(returnsInitials("Stephane", "Crépin"))
  console.log(returnsInitials("stephane", "crépin"))


// 3 - Write a function that returns the date in this specific format: "Nous sommes le 22/10 et il est 16h00"
// arguments: 

function whatIsToday() {
  const today = new Date()

  return `Nous sommes le ${today.getDate()}/${today.getMonth()+1} et il est ${today.getHours()}h${today.getMinutes()}`
}

console.log(whatIsToday())

// 4 - Write a function that converts a temperature in Celsius to Fahrenheit
// arguments: tempInCelsius

function cToF(tempInCelsius) {
  var cToFahr = tempInCelsius * 9 / 5 + 32;

  return tempInCelsius +'\xB0C is ' + cToFahr + ' \xB0F.';
}

console.log(cToF(17))
console.log(cToF(-2))
console.log(cToF(0))

// 5 - Write a function that simulates a dice roll and returns a random number between 1 and 6 everytime it is run.
// arguments: -
// tips: utiliser l'objet Math

  function rollDice() {
    return Math.floor(Math.random() * 6) + 1
  }

  console.log(rollDice())
  console.log(rollDice())
  console.log(rollDice())
  console.log(rollDice())
  console.log(rollDice())
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

function bookIsOnLibrary(name) {
  for (let i = 0; i != library.length; i++) {
    switch (name) {
      case 'frankenstein':
        return library.frankenstein.available;
      case 'dune':
        return library.dune.available;
      case '1984':
        return library[1984].available;
      case 'warOfTheWorlds':
        return library.warOfTheWorlds.available;
      case 'theHungerGames':
        return library.theHungerGames.available;
      case 'braveNewWorld':
        return library.braveNewWorld.available;
      case 'theMartian':
        return library.theMartian.available;
      case 'iRobot':
        return library.iRobot.available;
      default:
        break
    }
    return "the library doesn't have it"
  }
}

console.log(bookIsOnLibrary("dune"))
console.log(bookIsOnLibrary("Dun"))
console.log(bookIsOnLibrary("FRANKENSTEIN"))
console.log(bookIsOnLibrary("theMartian"))
console.log(bookIsOnLibrary("1984"))
console.log(bookIsOnLibrary("theHungerGames"))

// Pusher
