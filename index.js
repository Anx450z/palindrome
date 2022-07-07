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
    return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
  }
}