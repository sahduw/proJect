let quotes = [
    `Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. - Albert Einstein`,
    `The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt`,
    `The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt`,
    `The best way to predict the future is to create it. - Peter Drucker`,
    `I've never seen a player that can dominate a game the way LeBron James can He don't always have to score. He makes plays for other guys. But when the game is on the line, and you need a shot to be made, he's going to make that play. - Scottie Pippen`
];

let quote = document.querySelector("#quote")
document.querySelector("#generator").addEventListener('click', function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = randomQuote;
})