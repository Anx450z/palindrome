let assert = require("assert");
const { describe } = require("mocha");
let Phrase = require("../index.js");

describe("Phrase", function(){
  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function(){
      let nonPlaindrome = new Phrase("Apple");
      assert(!nonPlaindrome.palindrome());
    });

    it("should return true for a plain palindrome", function(){
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });
  });
});
