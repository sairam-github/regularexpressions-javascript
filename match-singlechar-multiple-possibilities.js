// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-character-with-multiple-possibilities

function matchCharMultiplePossibilities() {
    let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
    let vowelRegex = /[aeiou]/gi; // Change this line
    let result = quoteSample.match(vowelRegex); // Change this line

    console.log(result);
}

matchCharMultiplePossibilities();