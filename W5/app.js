const displayOnPage = function (text) {
  const newParagraph = document.createElement("P")
  newParagraph.innerHTML = text
  const outputDiv = document.getElementById("output")
  outputDiv.append(newParagraph)
}
let myGym = {
  title: "Crunch",
  location: "Fresno",
  members: 326,
  roomAvailable: function (gymSize) {
    let availableRoom = this.availableSpots - this.memberships;
    return gymSize <= availableRoom;
   },
  gymRoom: function (gymSize) {
    this.memberships = this.memberships + gymSize;
  },
  removeMembers: function (gymSize) {
    this.memberships = this.memberships - gymSize;
  },
  
}
let otherGym = {
  title: "Gb3",
  location: "Fresno",
  members: 723,
};
if (otherGym.members >= 500 && otherGym.location === "Fresno") {
  displayOnPage("I might go to the gym.");
} else {
  displayOnPage("decide?");

}
let result;
let circle = function (num) {
  let result = num;
  return result;
};
let value = circle(7);
let otherValue = circle(4);
displayOnPage(value + " " + `days a week of workout!`);

displayOnPage(`Hello Customer! ${name}`);
let getSummary = function (gym) {
  return {
    summary: `${otherGym.title} has ${otherGym.members} members.`,
    membersSummary: `${myGym.title} has ${myGym.members} members.`,
  };
};

let gymSummary = getSummary(myGym, otherGym);
let otherBookSummary = getSummary(otherGym);
let summary = getSummary(myGym); 

displayOnPage(gymSummary.membersSummary);
displayOnPage(gymSummary.summary);
myGym.gymRoom(52);
displayOnPage(myGym.roomAvailable(4));
myGym.removeMembers(5);
displayOnPage(myGym.roomAvailable(5));


