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
    let theLetters = [];
    for (let i =0; i < this.content.length; i++){
      if (this.content.charAt(i).match(/[a-zA-z]/)){
        theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
  }
}