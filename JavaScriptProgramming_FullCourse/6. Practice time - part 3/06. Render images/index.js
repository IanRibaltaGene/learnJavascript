// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const imgContainer = document.getElementById("img-container")

function renderImages() {
    let imgsDOM = ""
    for (let i in imgs) {
        imgsDOM += `
            <img alt="Random employee" class="team-img" src="${imgs[i]}">
        `
    }
    imgContainer.innerHTML = imgsDOM
}

renderImages()