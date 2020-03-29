// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/using-the-test-method

function matchAWord() {
    let myString = "Hello, World!";
    let myRegex = /Hello/;
    let result = myRegex.test(myString); // Change this line

    console.log(result);
}


matchAWord();