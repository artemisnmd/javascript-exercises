const reverseString = function(string) {
    let length = string.length;
    let reverseString = "";
    for (let i = 0; i<length; i++){
        reverseString += string.charAt(length-(i+1));
    }
    return reverseString;
};
// Do not edit below this line
module.exports = reverseString;
