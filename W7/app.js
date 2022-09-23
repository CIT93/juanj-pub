const displayOnPage = function (text) {
  const newParagraph = document.createElement("P");
  newParagraph.innerHTML = text;
  const outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};
let myGym = [
  {
    title: "Crunch Fitness",
    location: "Fresno",
    members: 326,
  },
];
let otherGyms = [
  {
    title: "Gb3",
    location: "Fresno",
    members: 723,
  },
];
displayOnPage(`Hello Customer! ${name}`);
const gymTime = function () {
if (otherGyms.members >= 500 && otherGyms.location === "Fresno") {
  displayOnPage("I might go to the gym.");
} else {
  displayOnPage("decide?");
}
return gymTime
} 
let guess = function (num) {
  let result = num;
  return result;
};
let value = guess(7);
let otherValue = guess(4);
displayOnPage(value + " " + `days a week of workout!`);

displayOnPage(otherGyms.length + myGym.length + " " + `Gyms to Choose from.`);

const index = otherGyms.findIndex(function (otherGym, index) {
  displayOnPage(
    `Gym I should Attend, ${otherGym.title}, ${otherGym.location}.`
  );
  displayOnPage(`${otherGym.title} has ${otherGym.members} members?`);
  return otherGym.title, myGym.title === "Gym I should Attend";
});
const index2 = myGym.findIndex(function (myGym, index2) {
  displayOnPage(
    `Other Gym I should Attend, ${myGym.title}, ${myGym.location}.`
  );
  displayOnPage(`${myGym.title} has ${myGym.members} members?`);
  return myGym.title === "Other Gym I should Attend";
});
