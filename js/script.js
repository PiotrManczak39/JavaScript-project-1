/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*----------------------------------
           * `quotes` array
-----------------------------------*/
const quoteArray = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    citation: "speech",
    year: 1971
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    citation: "song",
    year: 650 B.C.
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank"
  },
  {
    quote: "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson",
    citation: "book",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
    citation: "movie",
    year: 2008
  }
];
/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[randomNumber];
}
/*---------------------------------
    Create `printQuote` function
-----------------------------------*/

function printQuote() {
  let zmienna = getRandomQuote();
  let html = '';
  html += '<p class="quote">' + zmienna.quote + '</p>';
  html += '<p class="source">' + zmienna.author;
  if ( zmienna.citation ) {
    html += '<span class="citation">' + zmienna.citation + '</span>';
  }
  if ( zmienna.year ) {
    html += '<span class="year">' + zmienna.year + '</span>';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}


/*------------------------------------------
   Event Listener for clicking button
-------------------------------------------*/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
