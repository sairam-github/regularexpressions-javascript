function convertStringsToUrlSlugs() {
    // The global variable
    let globalTitle = "A Mind Needs Books Like A Sword Needs A Whetstone";
    let splitArray = globalTitle.trim().split(" ");
    splitArray = splitArray.map(
        function (value) {
            return value.toLowerCase();
        }
    ).join("-");
    console.log(splitArray);
// Only change code above this line
}

convertStringsToUrlSlugs();