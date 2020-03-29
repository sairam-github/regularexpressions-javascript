// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames

function validateUserName() {
    let username = "aa";
    let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i; // Change this line
    let result = userCheck.test(username);

    console.log(result);
}

validateUserName();