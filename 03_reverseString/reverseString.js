const reverseString = function(string) {
    let stringArray = Array.from(string);

    let stringText = stringArray.reverse().toString()
    // we must remove ',' as they come included from Array.prototype.toString()
    stringText = stringText.replaceAll(',',"")

    return stringText;
};

// Do not edit below this line
module.exports = reverseString;
