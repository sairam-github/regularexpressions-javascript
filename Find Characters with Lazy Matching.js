// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-characters-with-lazy-matching

function findCharsWithLazyMatching() {
    let text = "<h1>Winter is coming</h1>";
    let myRegex = /<.*?>/; // Change this line
    let result = text.match(myRegex);

    console.log(result);
}

findCharsWithLazyMatching();