// const quoteContainer = document.getElementById('quote-container');
// const quoteText = document.getElementById('quote');
// const authorText = document.getElementById('quote-author');
// const twitterBtn = document.getElementById('twitter');
// const newQuoteBtn = document.getElementById('new-quote');
// const loader = document.getElementById('loader');

// let apiQuotes = [];

// // Show loader
// function loading() {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

// // Hide loader
// function complete() {
//     if (!loader.hidden) {
//         quoteContainer.hidden = false;
//         loader.hidden = true;
//     }
// }

// // Show New Quote

// function newQuote() {
//     loading();
//     // Pick a random quotes from apiQuotes array
//     const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

//     // Check if Author field is blank and replace it with 'Unknown'

//     if (!quote.author) {
//         authorText.textContent = 'Unknown';
//     } else {
//         authorText.textContent = quote.author;
//     }
//     if (quote.text.length > 100) {
//         quoteText.classList.add('long-quote');
//     } else {
//         quoteText.classList.remove('long-quote');
//     }

//     // Set Quote, Hide Loader
//     quoteText.textContent = quote.text;
//     complete();
// }

// // Get Quotes From API
// async function getQuote() {
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
//     const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
//     try {
//         const response = await fetch(proxyUrl + apiUrl);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         getQuote();
//         console.log('No Quote', error);
//     }
// }
// // on Load
// getQuote();




// // tweet quote
// function tweetQuote() {
//     const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}-${authorText.textContent}`;
//     window.open(twitterUrl, '_blank');
// }

// // Event Listener
// newQuoteBtn.addEventListener('click', newQuote);
// twitterBtn.addEventListener('click', tweetQuote);

// // on Load
// getQuotes();
// complete();

// //'What we see is mainly what we look for.'