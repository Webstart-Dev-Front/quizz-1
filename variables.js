//1°

function minenmaj(mot){
    return  (mot+'').charAt(0).toUpperCase()+mot.substr(1);
}

console.log(minenmaj('ryan'))


//2°

var getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

console.log(getInitials('Ryan Logan'))
console.log(getInitials('ryan logan'))

//3°
const today = new Date()
function whatIsToday(today){
    return 'Nous sommes le ' + `${today.getDate()} / ${today.getMonth()+1}` + " et il est " + `${today.getHours()}h${today.getMinutes()}`
}

console.log(whatIsToday(today))

//4°

function cenf(celsius){
    let cenf =  (celsius * 1.8) + 32
    return cenf
}

console.log(cenf(0))

//5°

function random(max){
    return Math.floor(Math.random() * Math.floor(max))
}

console.log(random(6))

// Bonus

const library = {
    frankenstein: {
      available: false
    },
    dune: {
      available: true
    },
    [1984]: {
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
    
    validate(available){
        switch (available){
            case (this.frankenstein[available] == true):
            case (this.dune[available] == true):
            case (this[1984][available] == true):
            case (this.warOfTheWorlds[available] == true):
            case (this.theHungerGames[available] == true):
            case (this.braveNewWorld[available] == true):
            case (this.theMartian[available] == true):
            case (this.iRobot[available] == true):
                return 'Disponible'
            default:
                return 'Pas disponible'
        } 
  }
}

console.log(validate(frankenstein))

  