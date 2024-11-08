"use strict";
function countWordOccurrences(sentence, word) {
    var smallLetterSentence = sentence.toLowerCase();
    var smallLetterWord = word.toLowerCase();
    var count = 0;
    var index = 0;
    while ((index = smallLetterSentence.indexOf(smallLetterWord, index)) !== -1) {
        count++;
        index += smallLetterWord.length;
    }
    return count;
}
