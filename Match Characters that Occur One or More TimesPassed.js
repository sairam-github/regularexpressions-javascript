// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-one-or-more-times

function matchCharactersthatOccurOneorMoreTimesPassed() {
    let difficultSpelling = "Mississippis";
    let myRegex = /s+/g; // Change this line
    let result = difficultSpelling.match(myRegex);

    console.log(result);
}

matchCharactersthatOccurOneorMoreTimesPassed();