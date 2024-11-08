function countWordOccurrences(sentence: string, word: string): number {
    const smallLetterSentence = sentence.toLowerCase();
    const smallLetterWord = word.toLowerCase();
    let count = 0;
    let index = 0;

    while ((index = smallLetterSentence.indexOf(smallLetterWord, index)) !== -1) {
        count++;
        index += smallLetterWord.length;
    }

    return count;
}