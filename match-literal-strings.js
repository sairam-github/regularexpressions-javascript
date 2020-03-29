// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-literal-strings

function matchLiteralStrings() {
    let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
    let waldoRegex = /Waldo/; // Change this line
    let result = waldoRegex.test(waldoIsHiding);

    console.log(result);
}

matchLiteralStrings();