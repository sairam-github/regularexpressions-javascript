// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-zero-or-more-times

function matchCharactersthatOccurZeroorMoreTimes() {
    // Only change code below this line
    let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
    let chewieRegex = /Aa*/; // Change this line
    // Only change code above this line

    let result = chewieQuote.match(chewieRegex);

    console.log(result);
}

matchCharactersthatOccurZeroorMoreTimes();