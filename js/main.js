console.log('Up and running!');

var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

var cardsInPlay = [];
var matchCounter = 0;

var reset = function () {
  for (var i = 0; i < cards.length; i++) {
    document
      .getElementsByTagName('img')
      [i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
  matchCounter = 0;
  shuffle();
};

function checkforMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log('You found a match!');
  } else {
    console.log('Sorry, try again.');
  }
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert('You found a match!');
    } else if (cardsInPlay[0] !== cardsInPlay[1]) {
      alert('Sorry, try again.');
    }
    return flipCard;
  }

  console.log('User flipped ' + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
}

function shuffle() {
  for (var i = 0; i < cards.length; i++) {
    // get a random index
    var randomIndex = Math.floor(Math.random() * cards.length);

    // store it in a variable (a)
    var a = cards[randomIndex];

    // switch cards at randomIndex and i
    cards[randomIndex] = cards[i];
    cards[i] = a;
  }
}

function createBoard() {
  shuffle();
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

document
  .getElementById('reset-button')
  .addEventListener('click', () => reset());

createBoard();
