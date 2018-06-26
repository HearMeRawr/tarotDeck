// Darling don't hesitate to demonstrate what's on your mind

const majorArcana = [
{ title : "The Fool" },
{ title : "The Magician" },
{ title : "The High Priestess" },
{ title : "The Empress" },
{ title : "The Emperor" },
{ title : "The Hierophant" },
{ title : "The Lovers" },
{ title : "The Chariot" },
{ title : "Strength" },
{ title : "The Hermit" },
{ title : "Wheel of Fortune" },
{ title : "Justice" },
{ title : "The Hanged Man" },
{ title : "Death" },
{ title : "Temperance" },
{ title : "The Devil" },
{ title : "The Tower" },
{ title : "The Star" },
{ title : "The Moon" },
{ title : "The Sun" },
{ title : "Judgement" },
{ title : "The World" }
];

const minorArcana = [
{ title : "Ace of Swords" },
{ title : "Two of Swords" },
{ title : "Three of Swords" },
{ title : "Four of Swords" },
{ title : "Five of Swords" },
{ title : "Six of Swords" },
{ title : "Seven of Swords" },
{ title : "Eight of Swords" },
{ title : "Nine of Swords" },
{ title : "Ten of Swords" },
{ title : "Page of Swords" },
{ title : "Knight of Swords" },
{ title : "Queen of Swords" },
{ title : "King of Swords" },

{ title : "Ace of Wands" },
{ title : "Two of Wands" },
{ title : "Three of Wands" },
{ title : "Four of Wands" },
{ title : "Five of Wands" },
{ title : "Six of Wands" },
{ title : "Seven of Wands" },
{ title : "Eight of Wands" },
{ title : "Nine of Wands" },
{ title : "Ten of Wands" },
{ title : "Page of Wands" },
{ title : "Knight of Wands" },
{ title : "Queen of Wands" },
{ title : "King of Wands" },

{ title : "Ace of Coins" },
{ title : "Two of Coins" },
{ title : "Three of Coins" },
{ title : "Four of Coins" },
{ title : "Five of Coins" },
{ title : "Six of Coins" },
{ title : "Seven of Coins" },
{ title : "Eight of Coins" },
{ title : "Nine of Coins" },
{ title : "Ten of Coins" },
{ title : "Page of Coins" },
{ title : "Knight of Coins" },
{ title : "Queen of Coins" },
{ title : "King of Coins" },

{ title : "Ace of Cups" },
{ title : "Two of Cups" },
{ title : "Three of Cups" },
{ title : "Four of Cups" },
{ title : "Five of Cups" },
{ title : "Six of Cups" },
{ title : "Seven of Cups" },
{ title : "Eight of Cups" },
{ title : "Nine of Cups" },
{ title : "Ten of Cups" },
{ title : "Page of Cups" },
{ title : "Knight of Cups" },
{ title : "Queen of Cups" },
{ title : "King of Cups" },
];

const tarotCards = majorArcana.concat(minorArcana);

const randomNum = limit => Math.floor(Math.random()* Math.floor(limit));

const pullCard = dataSet => {
  const maxIndex = dataSet.length -1;
  const randomIndex = randomNum(maxIndex);
  return dataSet[randomIndex];
}

const cardPulled = pullCard(tarotCards);

const pullSpread = spreadSize => {
  let spread = [];
  let tarotDeck = tarotCards.slice();
  for (let i = spreadSize; i > 0; i--) {
    const pulledCard = pullCard(tarotDeck);
    const pulledCardIndex = tarotDeck.indexOf(pulledCard);
    tarotDeck.splice(pulledCardIndex, 1);
    spread.push(pulledCard);

  }
  return spread;
};

console.log('Laying down a spread: ', pullSpread(6));
