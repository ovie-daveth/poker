let cardEl = document.getElementById("card")
let sumEl = document.getElementById("sum")
let messageEl = document.getElementById("message")
let message = " "
let isAlive = true
let hasBlackJack = false


let betEl = document.getElementById("bet")

function low(){
    betEl.textContent = "Your bet is $10"
}
function medium(){
    betEl.textContent = "Your bet is $20"
}
function high(){
    betEl.textContent = "Your bet is $30"
}

function bet(){
    if (betEl.textContent === "Your bet is $10") {
        return 10
    } else if (betEl.textContent === "Your bet is $20") {
        return 20
    } else if (betEl.textContent === "Your bet is $30") {
        return 30
    }
}

let playerName = document.getElementById("player-el")

let cards = []
let sum = 0

let player = {
    name: "David",
    chip: 200
}
playerName.textContent = player.name + ": " + "$" + player.chip

function getrandomNumber(){
    let randomNumber = Math.floor(Math.random() * 11) + 1
    return randomNumber
}


function playGame(){
    if (betEl.textContent != "Your bet is $10" && betEl.textContent != "Your bet is $20" && betEl.textContent != "Your bet is $30") {
        message = "place a bet"
        messageEl.textContent = message
        
        pass
    } else{
        
        if (sum === 0){
            let firstCard = getrandomNumber();
            let secondCard = getrandomNumber();
            cards = [firstCard]
            sum = cards[0]
            renderGame()
         } else {
                pass
        } 
        
        
    }
    
    renderGame()
}
function renderGame(){
    cardEl.textContent = "card: "
    sumEl.textContent = "Sum: " + sum
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "Draw another card"
    } else if (sum === 21) {
        message = "Wohoo! Got blackJack. Place another bet?"
        hasBlackJack = true
        player.chip += bet()
        playerName.textContent = player.name + ": " + "$" + player.chip
    } else {
        message = "You're out of the game. Place another bet?"
        isAlive = false
        player.chip -= bet()
        playerName.textContent = player.name + ": " + "$" + player.chip
        
    }
    messageEl.textContent = message

}
function newCard(){
    if (betEl.textContent != "Your bet is $10" && betEl.textContent != "Your bet is $20" && betEl.textContent != "Your bet is $30") {
        message = "place a bet"
        messageEl.textContent = message
        
        pass
    } else {
        if (sum === 0){
            pass
        } else{
            if (isAlive === true && hasBlackJack === false){
                let newCard = getrandomNumber();
                sum += newCard
                cards.push(newCard)
                cardEl.textContent += newCard
                renderGame()
            }
        }
        
    }
    
    
    
}
function startGame(){
    
}
