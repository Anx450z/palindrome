module.exports = Phrase;
//native object modification
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content){
  this.content = content;

  this.processedContent = function processedContent(){
    return this.letters().toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.letters = function letters(){
    let theLetters =[];
    const letterRegex = /[a-z]/i;
    Array.from(this.content).forEach(function(char) {
      if (char.match(letterRegex)) {
        theLetters.push(char);
      }
    });
    return theLetters.join("");
  }
}