let assert = require("assert");
const { describe } = require("mocha");
let Phrase = require("../index.js");

describe("Phrase", function(){
  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function(){
      let nonPalindrome = new Phrase("Apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function(){
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for mixed-case palindrome", function(){
      let mixedPalindrome = new Phrase("Racecar");
      assert(mixedPalindrome.palindrome());
    });
    
    it("should return true for a palindrome with punctuation", function() {
      let punctuationPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuationPalindrome.palindrome());
    }); 
  });

  describe("#letters", function(){
    it("should return only letters", function(){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(),"MadamImAdam");
    });
  });
});
