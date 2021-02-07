"use strict";
// Задача 2-3
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string = " ") {
  // Write code under this line
  string = string.split(" ");
  let maxWord = string[0];

  for (let i = 1; i < string.length; i += 1) {
    let wordMassage = string[i];
    if (maxWord.length < wordMassage.length) {
      maxWord = wordMassage;
    }
  }
  return maxWord;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
