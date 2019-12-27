const container = document.createElement("div")

container.classList.add("container")
document.body.appendChild(container)
for (let i = 0; i < 3; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row)
    for (let i = 0; i < 4; i++) {
        const card = document.createElement("div")
        const img = document.createElement("img")
        img.src = "./images/back.jpg"
        img.id.add =
            card.classList.add("card", "col-3", "col-md-3", "col-xl-3")
        card.appendChild(img)
        row.appendChild(card)
    }
}
const cardsList = ["king1.jpg", 'quin3.jpg', 'ase.png', '10.png', '9.png', 'jack.jpg']
let i = 0

const flipCard = (e) => {
    if(e.target.src == "./images/king1.jpg"){
        return
    }
    else{
    e.target.src = `./images/${cardsList[selected[i+1]]}`
    i++
    return i
    }

}
let selected = [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
const choosNumber = () => {
    var j, x, i;
    for (i = selected.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = selected[i];
        selected[i] = selected[j];
        selected[j] = x;

    }
    return selected
}
choosNumber()
const target = document.querySelectorAll(".card")

const cards = [...target];
console.log(cards.length);
cards.forEach(card => {
    card.addEventListener("click", flipCard)
})


