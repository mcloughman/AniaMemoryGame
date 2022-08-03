const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  cardArray.forEach((cardElement, i) => {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  });
}
createBoard();
function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  console.log(cards);
  if (cardsChosen[0] === cardsChosen[1]) {
    alert("You Found a Match!");
    cards[cardsChosenIds[0]].setAttribute("src", "images/white.png");
    cards[cardsChosenIds[1]].setAttribute("src", "images/white.png");
    cards[cardsChosenIds[0]].removeEventListener("click", flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  }
  cardsChosen = [];
  cardsChosenIds = [];
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  console.log(cardArray[cardId].name);
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardsChosen);
  console.log(cardsChosenIds);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
