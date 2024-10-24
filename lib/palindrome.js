// lib/palindrome.js
import { isString } from './helpers.js';
import { reverse } from './reverse.js';

export function palindrome(str) {
    if (!isString(str)) {
      return false;
    }
  
    if (str === '') {
      return false;
    }
  
    const reversed = reverse(str);
  
    // Hér lendum við í því að þar sem `reverse` *getur* skilað `null` þá ættum
    // við að athuga það líka þó svo að við vitum að við sendum inn streng.
    // Ef kveikt er á „JS Check“ í VSCode þá kemur villumelding ef við gerum ekki.
    if (!isString(reversed)) {
      return false;
    }
  
    return str.toLocaleLowerCase() === reversed.toLocaleLowerCase();
}