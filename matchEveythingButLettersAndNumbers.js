function matchEveythingButLettersAndNumbers() {
    let quoteSample = "The five boxing wizards jump quickly.";
    let nonAlphabetRegex = /\W/g; // Change this line
    let result = quoteSample.match(nonAlphabetRegex);

    console.log(result);
}

matchEveythingButLettersAndNumbers();

