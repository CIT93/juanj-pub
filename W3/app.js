// displayOnPage functionality
// Variable displayed



const displayOnPage = function (text) {
    let newParagraph = document.createElement("P")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

let saluteCustomer = function () {
    console.log('Hello Customer!')
} 

saluteCustomer()


let circle = function(num) {
    let result = num 
    return result 
}
let value = circle(7)
let otherValue = circle(4)

displayOnPage(value, + `days a week`)



let timeToSleep = '10pm'
let timeToGetUp = '8am'
let timeToEat = '12pm'
let timeToWorkOut = '6pm'

displayOnPage('Hello World')
displayOnPage('Time to sleep ---> 10pm')
displayOnPage('Time to get up ---> 8am')
displayOnPage('Time to eat ---> 12pm')
displayOnPage('Time to work out ---> 6pm')
displayOnPage(otherValue, `of workout!`)
// Displays a variable and a string.
//  Displays a Scope 
// Displays a Boolean
// if else statement 
//let timeToWorkOut1 = '6pm';
// local 
// GLobal
let name 

name = 'JuanJ'

let isStrong = 'JuanJ' <= timeToSleep <= '10pm';
           
 if (timeToSleep <= '10pm' && timeToEat <= '12pm' ) {
    let Juanj = 'Juanj'
    displayOnPage(`goes to bed at 10pm he is a True Champion!`)
} else if (timeToWorkOut <= '6pm' || timeToGetUp <= '8am') {
    displayOnPage(`Then the schedule is on track`)
} else {
    displayOnPage(`It is all a fallacy!`)
}
console.log(`Hello World`)
// undefined null

if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}
   
   


