// displayOnPage functionality
// Variable displayed
// Daily schedule
const saluteCustomer = {
    name: 'JuanJ',
    age: 32,
    location: 'Fresno',
    myDecision: function(message){
        this.displayOnPage(`<b>${heading}<b>`);

    },
    
}
    displayOnPage= function (text) {
        const newParagraph = document.createElement("P")
        newParagraph.innerHTML = text
        const outputDiv = document.getElementById("output")
        outputDiv.append(newParagraph)
    }


const timeToSleep = '10pm'
const timeToGetUp = '8am'
const timeToEat = '12pm'
const timeToWorkOut = '6pm'

const myDecision = function () {
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

displayOnPage(`${saluteCustomer.name} is ${saluteCustomer.age} and lives in ${saluteCustomer.location}.`)


let message = myDecision()
displayOnPage(message)

const isStrong = function() {
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
 



   


