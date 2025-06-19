// Player class
class Player {
    constructor(name, coins, cards, isKing) {
        this.name = name;
        this.coins = coins;
        this.cards = cards;
        this.isKing = isKing;
    }
}

// Arrays
const cards = [];
const characters = [];
const players = [];

// Function to load the data
async function loadData() {
    const cardsResponse = await fetch('cards.json');
    const cardsData = await cardsResponse.json();
    cardsData.forEach(card => { cards.push(card); });

    const charactersResponse = await fetch('characters.json');
    const charactersData = await charactersResponse.json();
    charactersData.forEach(character => { characters.push(character); });
}

function start_round() {
    // Loading the data
    loadData();

    players.forEach(player => {
        if (player.isKing === true) {
            // King takes his character first
        }
    });
}

// Random function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}