// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-numbers-and-letters-of-the-alphabet

function matchNumberAndLetters() {
    let quoteSample = "Blueberry 3.141592653s are delicious.";
    let myRegex = /[h-s2-6]/ig; // Change this line
    let result = quoteSample.match(myRegex); // Change this line

    console.log(result);
}

matchNumberAndLetters();