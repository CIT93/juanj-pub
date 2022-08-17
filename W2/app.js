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

console.log(`I prepare to eat at`, timeToEat + `.`)