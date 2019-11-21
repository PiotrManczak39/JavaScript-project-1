/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

const body = document.querySelector('body');

/*----------------------------------
           * `quotes` array
-----------------------------------*/
const quoteArray = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    citation: "speech",
    year: 1971,
    cathegory: "fiction"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    citation: "song",
    year: 650,
    cathegory: "thiller"
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
    cathegory: "action"
  },
  {
    quote: "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson",
    citation: "book",
    cathegory: "fiction"
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
    citation: "movie",
    year: 2008,
    cathegory: "drama"
  }
];
/*--------------------------------------
     `getRandomQuote` function
--------------------------------------*/

function randomNumber() {
  let number = Math.floor(Math.random() * 256) + 1;
  return number;
}

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
  if ( zmienna.cathegory ) {
    html += '<span class="cathegory">' + zmienna.cathegory + '</span>';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  let n1 = randomNumber();
  let n2 = randomNumber();
  let n3 = randomNumber();
  let string = "rgba(" + n1 + ", " + n2 + ", " + n3 + ", .95)";
  body.style.backgroundColor = string;
}


/*------------------------------------------
   Event Listener for clicking button
   OR
   Display changing every 8 sekonds
-------------------------------------------*/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);

document.getElementById('load-quote').style.display = 'none';
window.setInterval(printQuote, 8000);
