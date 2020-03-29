// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-anything-with-wildcard-period
function matchWithWildcardPeriod() {
    let exampleStr = "Let's have fun with regular expressions!";
    let unRegex = /.un/; // Change this line
    let result = unRegex.test(exampleStr);

    console.log(result);
}

matchWithWildcardPeriod();