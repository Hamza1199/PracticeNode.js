var censorWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor(inStr) {
    for (idx in censorWords) {
        inStr = inStr.replace(censorWords[idx], "****");
    }
    for (idx in CustomCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], "****");
    }
    return inStr;
}
function addCensoredWord(word) {
    customCensoredWords.push(word);
}
function getCensoredWord() {
    return CustomCensoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWord = getCensoredWord;
