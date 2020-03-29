// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/ignore-case-while-matching

function testIgnoreCase() {
    let myString = "freeCodeCamp";
    let fccRegex = /freeCodeCamP/i; // Change this line
    let result = fccRegex.test(myString);

    console.log(result);
}


testIgnoreCase();