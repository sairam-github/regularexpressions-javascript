// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-a-literal-string-with-different-possibilities

function testMoreStringLiterals() {
    let petString = "James has a pet cat.";
    let petRegex = /dog|cat|bird|fish/; // Change this line
    let result = petRegex.test(petString);

    console.log(result);
}

testMoreStringLiterals();