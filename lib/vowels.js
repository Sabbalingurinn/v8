const VOWELS = 'aeiouyáéýúíóöæ'.split('');
import { isString } from './helpers.js';


export function vowels(str) {
    if (isString(str)) {
      let counter = 0;
      for (let letter of str.toLowerCase()){
        if (VOWELS.includes(letter)){
          counter += 1;
        }
      }
      return counter;
    }
    return 0;
}