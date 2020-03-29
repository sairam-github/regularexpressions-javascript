// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/extract-matches

function extractMatchingWords() {
    let extractStr = "Extract the word 'coding' from this string.";
    let codingRegex = /coding/; // Change this line
    let result = extractStr.match(codingRegex); // Change this line
    console.log(result);
}

extractMatchingWords();