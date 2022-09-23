const myGyms = [
  {
    title: "Crunch Fitness",
    location: "Fresno",
    members: 326,
    verify: true
  },
  {
    title: "Gb3",
    location: "Fresno",
    members: 723,
    verify: true
  },
  {
    title: "Planet Fitness",
    location: "Fresno",
    memebers: 255,
    verify: false
  },
  {
    title: "Golds Gym",
    location: "Los Angeles",
    members: 1000,
    verify: true
  }
];


const falsemyGyms = myGyms.filter(function (myGym) {
    return myGym.verify
})
const summary = document.createElement('h2')
summary.textContent = `You have ${falsemyGyms.length} gyms to choose from.`
document.querySelector('body').appendChild(summary)

const newParagraph = document.createElement('p')
newParagraph.textContent = `Choose a gym from ${myGyms[0].title}, ${myGyms[1].title}, or ${myGyms[3].title}.`
document.querySelector('body').appendChild(newParagraph)

