// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-more-than-the-first-match
function findMoreMatches() {
    let exampleStr = "Let's have fun with regular expressions!";
    let unRegex = /change/; // Change this line
    let result = unRegex.test(exampleStr);

    console.log(result);
}

findMoreMatches();