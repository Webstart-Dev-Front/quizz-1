console.log(`QUIZZ - 1`)
// Créer une branche quizz1/[PRENOM]-[NOM] à partir de master


// 1 - Write a function that capitalizes the first letter of a word
// arguments: word
function strUcFirst(a)
{return (a+'').charAt(0).toUpperCase()+a.substr(1);}

console.log(strUcFirst("vanessa"))


// 2 - Write a function that takes firstname and lastname and returns the initials
// arguments: firstName, lastName
const FirstName = 'Vanessa';
const LastName = 'Pacini';

console.log(FirstName.substr(0,1),LastName.substr(0,1));



// 3 - Write a function that returns the date in this specific format: "Nous sommes le 22/10 et il est 16h00"
// arguments: 



// 4 - Write a function that converts a temperature in Celsius to Fahrenheit
// arguments: tempInCelsius

function convertToF(tempInCelsius) {
  let fahrenheit = tempInCelsius * 9/5 + 32
  return fahrenheit;
}
console.log(convertToF(30))




// 5 - Write a function that simulates a dice roll and returns a random number between 1 and 6 everytime it is run.
// arguments: -
// tips: utiliser l'objet Math
console.log(Math.floor(Math.random() * 6) + 1)



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


// Pusher
