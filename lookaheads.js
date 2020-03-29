function lookAheads() {
    let sampleWord = "astronaut";
    let pwRegex = /change/; // Change this line
    let result = pwRegex.test(sampleWord);

    console.log(result);
}

lookAheads();