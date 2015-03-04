/**
 * Created by D on 3/4/2015.
 */
/*
 In this kata you have to extend the dictionary with a method, that returns a list of words matching a pattern. This
 pattern may contain letters (lowercase) and placeholders ("?"). A placeholder stands for exactly one arbitrary letter.

 Javascript Example:

 var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
 fruits.getMatchingWords('lemon'); // must return []
 fruits.getMatchingWords('cherr??'); // must return []
 fruits.getMatchingWords('?a?a?a'); // must return ['banana', 'papaya']
 fruits.getMatchingWords('??????'); // must return ['banana', 'papaya', 'cherry']
 Additional Notes:

 the words and patterns are all lowercase
 the order of the returned words doesn't matter
 */
function Dictionary(words) {
    this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
    var patternLength = pattern.length;
    var rightLengthWords = this.words.filter(function(word) { //filter by length
        return (word.length === patternLength);
    });
    return rightLengthWords.filter(function(word){
        var allMatch = true; //only will change if one char doesn't match
        for (var i = 0; i < patternLength; i++){
            if (word.substr(i,1) != pattern.substr(i,1) && pattern.substr(i,1) != '?'){ //check every letter for match
                allMatch = false;
            }
        }
        return allMatch;
    });
}
