// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-letters-of-the-alphabet

function matchLettersOfAlphabet() {
    let quoteSample = "The quick brown fox jumps over the lazy dog.";
    let alphabetRegex = /[a-z]/gi; // Change this line
    let result = quoteSample.match(alphabetRegex); // Change this line

    console.log(result);
}

matchLettersOfAlphabet();