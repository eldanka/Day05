function main() {

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";

    var wordBlanks = "My " + myNoun + " is soo " + myAdjective + " and he " + myVerb + " " + myAdverb + " away.";

    return wordBlanks;
}

console.log(main());
module.exports = main;