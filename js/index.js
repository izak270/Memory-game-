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
        // img.id = 1
        // card.id = 1
            card.classList.add("card", "col-3", "col-md-3", "col-xl-3")
        card.appendChild(img)
        row.appendChild(card)
    }
}
const cardsList = ["king1.jpg", 'quin3.jpg', 'ase.png', '10.png', '9.png', 'jack.jpg']

let count = 1
let targets=[]
const flipCard = (e) => {
    if(targets[0]!=e.target){
    e.target.src = `./images/${cardsList[selected[e.target.id]]}`
    targets.push(e.target)
    if(targets[0].id!=e.target.id&&count==2){
        setTimeout(flipBack,300)
        count =0
    }
    else if(targets[0].id==e.target.id&&count==2){
        targets = []
        count =0
    }
    // if(id){id=false}else{id=true}
    count ++
    return count,targets
}}
//     if(lastTarget!=e.target.id){
//     lastTarget = e.target.id}
//     if(id==1){id++}else{id=1}
//     return [id,lastTarget]

// }
const flipBack = (e)=>{
    targets[0].src = "./images/back.jpg"
    targets[1].src =  "./images/back.jpg"
    targets = []
    return targets
   
    console.log(e)
    return lastTarget
}
let selected = [0, 1, 2, 3, 4, 5]
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
let f = 0 
cards.forEach(card => {
    card.addEventListener("click", flipCard)
        card.querySelector('img').id = selected[f]
        if(f<5){
            f++
        }
        else{
            f=0
        }
    }
)


