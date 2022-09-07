// displayOnPage functionality
// Variable displayed
// Daily schedule

const gym = {
  name: "GB3",
  availableSpots: 55,
  memberships: 0,
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
  myDecision: function (message) {
    timeToSleep = "10pm";
    timeToGetUp = "8am";
    timeToEat = "12pm";
    timeToWorkOut = "6pm";
    if (timeToSleep <= "10pm" && timeToEat > "12pm") {
      message = `goes to bed at 10pm he is a True Champion!`;
    } else if (timeToWorkOut <= "6pm" || timeToGetUp <= "8am") {
      message = `Then the schedule is on track`;
    } else {
      message = `It is all a fallacy!`;
    }
    return message;
  },
};
gym.gymRoom(52);
displayOnPage(gym.roomAvailable(4));
gym.removeMembers(5);
displayOnPage(gym.roomAvailable(5));

gym.myDecision();
displayOnPage();

const isStrong = function () {
  let anotherMessage;
  anotherMessage;
  if (name === undefined) {
    anotherMessage = "please provide a name";
  } else {
    anotherMessage = name;
  }
  return anotherMessage;
};
let anotherMessage = isStrong();
displayOnPage(anotherMessage);

let circle = function (num) {
  let result = num;
  return result;
};
let value = circle(7);
let otherValue = circle(4);
displayOnPage(value + " " + `days a week`);

displayOnPage(`Hello Customer! ${name}`);

displayOnPage("Hello World");
displayOnPage("Time to sleep ---> 10pm");
displayOnPage("Time to get up ---> 8am");
displayOnPage("Time to eat ---> 12pm");
displayOnPage("Time to work out ---> 6pm");
displayOnPage(otherValue + " " + `days of workout!`);
