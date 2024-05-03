
// created quotes array
const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." 
]

const usedIndexes = new Set() // it sets unique collections of the elements. for example: {1,2,3,4,5} you can not have {1,2,3,1,2}.

const quoteEl = document.getElementById("quote");

function generateQuote() {
// we protect the loop from endless (infinite) loop.
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);  // we access one index beyond because we use math.floor so random value will be down. the last index of our quotes is 9 not 10.  --> 9.999999 will be 9 because of math.floor
        
        if (usedIndexes.has(randomIdx)) continue;
        
        const quote = quotes[randomIdx];
        quoteEl.innerText = `"${quote}"`;
        usedIndexes.add(randomIdx);
        break;

    }




}