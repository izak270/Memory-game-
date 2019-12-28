const level1 = document.querySelector(".level1")
const level2 = document.querySelector(".level2")
const level3 = document.querySelector(".level3")
level1.addEventListener('click', function () {
    startGame(4,0,5)
})
level2.addEventListener('click', function () {
    startGame(6,1,8)
})
level3.addEventListener('click', function () {
    startGame(8,2,11)
})



const startGame = (level,ids,pairs) => {
    const welcome = document.querySelector(".welcome")
    welcome.parentNode.removeChild(welcome)
    let strikes = 0
    const container = document.createElement("div")
    container.classList.add("container")
    document.body.appendChild(container)
    const menu = document.createElement('div')
    menu.classList.add('menu')
    container.appendChild(menu)
    const newGame1 = document.createElement("button")
    newGame1.innerText = "New game"
    const score = document.createElement('div')
    score.innerText = `You have: ${strikes} strikes`
    let bestScore = document.createElement("div")
    bestScore.innerText = `your worst score is ${localStorage.getItem('high score')} mistakes`

    menu.appendChild(newGame1)
    menu.appendChild(score)
    menu.appendChild(bestScore)

    for (let i = 0; i < 3; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        container.appendChild(row)
        for (let i = 0; i < level; i++) {
            const card = document.createElement("div")
            const img = document.createElement("img")
            img.src = "./images/back.jpg"

            card.classList.add("card", "col-3", "col-md-3", "col-xl-3")
            card.appendChild(img)
            row.appendChild(card)
        }
    }
    const cardsList = ["king1.jpg", 'quin3.jpg', 'ase.png', '10.png', '9.png', 'jack.jpg', '8.png', '7.png', '6.png', '5.png', '4.png', '3.png']
    let count = 1
    let targets = [10]
    const flipCard = (e) => {
        if (!targets.includes(e.target)) {
            e.target.src = `./images/${cardsList[selected[ids][e.target.id]]}`
            targets.push(e.target)
            if (targets[targets.length - 2].id != e.target.id && count == 2) {
                setTimeout(flipBack, 300)
                strikes++
                score.innerText = `You have: ${strikes} strikes`
                count = 0
            }

            else if (targets[targets.length - 2].id == e.target.id && count == 2) {
                count = 0
            }
            count++
            return count, targets, strikes
        }
    }

    const flipBack = (e) => {
        targets[targets.length - 1].src = "./images/back.jpg"
        targets[targets.length - 2].src = "./images/back.jpg"
        targets.pop()
        targets.pop()
        // targets = []
        return targets

        // console.log(e)
        // return lastTarget
    }
    let selected = [[0, 1, 2, 3, 4, 5],[0, 1, 2, 3, 4, 5, 6, 7, 8],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]]
    
    const choosNumber = () => {
        var j, x, i;
        for (i = selected[ids].length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = selected[ids][i];
            selected[ids][i] = selected[ids][j];
            selected[ids][j] = x;
        }
        return selected[ids]
    }
    choosNumber()
    const target = document.querySelectorAll(".card")

    const cards = [...target];
    console.log(cards.length);
    let f = 0
    cards.forEach(card => {
        card.addEventListener("click", flipCard)
        card.querySelector('img').id = selected[ids][f]
        if (f < pairs) {
            f++
        }
        else {
            f = 0, choosNumber()
        }
    }
    )
    const newGame = () => {

        targets.forEach(target => { target.src = "./images/back.jpg" })
        targets = [10]
        count = 1
        if(localStorage.getItem('high score')<strikes){
             localStorage.setItem("high score",strikes)
            }
       
        strikes = 0
        score.innerText = `You have: ${strikes} strikes`
        choosNumber()
        container.parentNode.removeChild(container)
        document.body.appendChild(welcome)
        console.log(localStorage.getItem('high score'));
    }
    newGame1.addEventListener('click', newGame)
    

}

