// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-characters-that-occur-one-or-more-times

function matchCharsThatOccursOneOrMoreTimes() {
    let difficultSpelling = "Mississippi";
    let myRegex = /s+/gi; // Change this line
    let result = difficultSpelling.match(myRegex);

    console.log(result);
}

matchCharsThatOccursOneOrMoreTimes();