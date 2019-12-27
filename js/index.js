const container = document.createElement("div")

container.classList.add("container")
document.body.appendChild(container)
for (let i = 0; i < 3; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row)
    for (let i = 0; i < 4; i++) {
        const card = document.createElement("div")
        card.classList.add("card", "col-3", "col-md-3", "col-xl-3", "back")
        row.appendChild(card)
    }
}

const flipCard = (e)=>{
    e.target.classList.remove("back")
}
const target = document.querySelectorAll(".card")

const cards = [...target];
console.log(cards.length);
cards.forEach(card => {
    card.addEventListener("click",flipCard)
})


