function matchNonWhitespaceChars() {
    let sample = "Whitespace is important in separating words";
    let countNonWhiteSpace = /\S/g; // Change this line
    let result = sample.match(countNonWhiteSpace);

    console.log(result);
}

matchNonWhitespaceChars();