import { isString, splitOnWhitespace } from './helpers.js';

export function longest(str) {
    if (!isString(str)) {
      return null;
    }
  
    const words = splitOnWhitespace(str, ' ');
  
    let longestWord = '';
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
}