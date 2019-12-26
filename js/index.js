class MemoryGame{
    constructor(){
        this.cards = new Cards
        this.initEvents()
        
    }
    
}
class Cards{
    constructor(){
       this.allCards =[]
       this.allCards.push($(".row"));
        for (let i = 0; i < 3; i++) {
            this.allCards[i] = $(`.row:nth-child(${i + 1}) .cell`);
    }
}
    
}

