const showOnPage = function (text) {
    let newParagraph = document.createElement("P")
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById("output")
    outputDiv.append(newParagraph)
}

showOnPage('Hello World')