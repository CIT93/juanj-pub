// displayOnPage functionality
// Variable displayed

let timeToSleep = '10pm'
let timeToGetUp = '8am'
let timeToEat = '12pm'
let timeToWorkOut = '6pm'

const displayOnPage = function (text) {
    let newParagraph = document.createElement("P")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

let saluteCustomer = function (name) {
    
} 



saluteCustomer()

let myDecision = function () {
    let message 
    if (timeToSleep <= '10pm' && timeToEat > '12pm' ) {
        
        message = `goes to bed at 10pm he is a True Champion!`
    } else if (timeToWorkOut <= '6pm' || timeToGetUp <= '8am') {
        message = `Then the schedule is on track`
    } else {
        message = `It is all a fallacy!`
    }
    return message
}

let message = myDecision()
displayOnPage(message)

let isStrong = function() {
    let anotherMessage 

    anotherMessage 
    if (name === undefined) {
        anotherMessage = 'please provide a name'
    } else {
        anotherMessage = (name)
    }
    return anotherMessage
       
} 
let anotherMessage = isStrong()
displayOnPage(anotherMessage)

let circle = function(num) {
    let result = num 
    return result 
}
let value = circle(7)
let otherValue = circle(4)
displayOnPage(value + ' ' + `days a week`)



displayOnPage(`Hello Customer! ${name}`)


displayOnPage('Hello World')
displayOnPage('Time to sleep ---> 10pm')
displayOnPage('Time to get up ---> 8am')
displayOnPage('Time to eat ---> 12pm')
displayOnPage('Time to work out ---> 6pm')
displayOnPage(otherValue+' ' + `days of workout!`)
// Displays a variable and a string.
//  Displays a Scope 
// Displays a Boolean
// if else statement 
//let timeToWorkOut1 = '6pm';
// local 
// GLobal




// 'JuanJ' <= timeToSleep <= '10pm';
           
 
console.log(`Hello World`)
// undefined null


   


