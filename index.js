module.exports = Phase;
//native object modification
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content){
  this.content = content;

  this.processor = function processor(){
    return string.toLowerCase(string);
  }

  this.processedContent = function processedContent(){
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  this.louder = function louder(){
    return this.content.toUpperCase();
  }
}