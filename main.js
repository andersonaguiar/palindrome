"use strict";

function checkPalindrome(word) {
    if (word.length == 0) return false;

    word = word.toLowerCase();

    return word === word.split('').reverse().join('');
}

(function(){
  document.getElementById('checkPalindrome').addEventListener('click', function(){
    var isPalindrome = checkPalindrome(document.getElementById('word').value);
    document.getElementById('result').innerHTML = (isPalindrome ? 'Yes' : 'No');
  });
})();
