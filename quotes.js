/* fetch("quotes.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data["Carl Reiner"]);
  }); */

const quotes = [
  {
    author: "Carl Reiner",
    quote:
      "A lot of people like snow. I find it to be an unnecessary freezing of water.",
  },

  {
    author: "Dr. Seuss",
    quote:
      "The sun did not shine. It was too wet to play. So we sat in the house. All that cold, cold, wet day.",
  },
  {
    author: "Kim Hubbard",
    quote:
      "Don't knock the weather. If it didn't change once in a while, nine out of ten people couldn't start a conversation.",
  },
  {
    author: "Mark Twain",
    quote:
      "If you don't like the weather in New England now, just wait a few minutes.",
  },
  {
    author: "Billy Connoly",
    quote: "There are two seasons in Scotland: June and Winter",
  },
  {
    author: "Mehmet Murat Ildan",
    quote:
      "The real weather is not the weather outside but the weather inside your mind!",
  },
  {
    author: "Taylor Jenkin Reid",
    quote:
      "When I lived in Los Angeles I never savored warm nights. You don't savor things that last forever.",
  },
  {
    author: "Kara Timmins",
    quote:
      "Sometimes, the weather is just the weather and doesn't have to mean anything more than that",
  },
  {
    author: "Jack Keroauc",
    quote:
      "I suddenly realized I was in California. Warm, palmy air - air you can kiss - and palms.",
  },
  {
    author: "Jerome K. Jerome",
    quote:
      "We shall never be content until each man makes his own weather and keeps it to himself.",
  },
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getRandomQuote(arr) {
  const objOfArray = getRandomIntInclusive(0, 9);
  return objOfArray;
}

let randomIndex = getRandomQuote(quotes);

const quotesHTML = document.getElementById("quotes");
quotesHTML.innerHTML =
  "&quot;" +
  quotes[randomIndex].quote +
  "&quot; <br> -<b>" +
  quotes[randomIndex].author +
  "</b>";
