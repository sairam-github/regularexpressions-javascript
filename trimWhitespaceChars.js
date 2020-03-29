// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/remove-whitespace-from-start-and-end

function trimWhitespaceChars() {
    let hello = "   Hello, World!  ";
    let wsRegex = /^\s+|\s+$/g; // Change this line
    let result = hello.replace(wsRegex, ""); // Change this line

    console.log(result);
}

trimWhitespaceChars();