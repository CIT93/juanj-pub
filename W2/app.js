// displayOnPage functionality
// Variable displayed


const displayOnPage = function (text) {
    let newParagraph = document.createElement("P")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

let timeToSleep = '10pm'
let timeToGetUp = '8am'
let timeToEat = '12pm'
let timeToWorkOut = '6pm'

displayOnPage('Hello World')
displayOnPage('Time to sleep ---> 10pm')
displayOnPage('Time to get up ---> 8am')
displayOnPage('Time to eat ---> 12pm')
displayOnPage('Time to work out ---> 6pm')

// Displays a variable and a string.
//  Displays a Scope 
// Displays a Boolean
// if else statement 
//let timeToWorkOut1 = '6pm';
// local 
// GLobal
let name = 'JuanJ'


if (timeToSleep) {
    console.log(`Since`, name, `goes to bed at 10pm he is a True Champion!`)
}

if (timeToGetUp = '8am') {
    let isSmart = name === 'JuanJ';
    console.log(`Since`, name, `Gets up at 8am he is a true Champion!`)
} 

if (timeToEat = '12pm') {
    console.log(`Since`, name, `eats at 12pm he is a true Champion!`)
} else {
    console.log('misses out on knowledge.')
}

if (timeToWorkOut = '6pm') {
    console.log(`Since`, name, `workouts at 6pm he is a Champion!`)
} else {
    console.log('Is Weak!')
}

console.log(`I prepare to eat at`, timeToEat + `.`)